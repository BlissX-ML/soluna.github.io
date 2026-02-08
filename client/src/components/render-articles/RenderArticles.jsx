import { useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // 可以解析 HTML
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'; // 防止不可信内容遭受 XSS 攻击

import classes from './RenderArticles.module.scss';

import fetchContent from '../../_utils/browser/fetch-content/fetch-content.js';
import RenderMarkdown from '../markdown/RenderMarkdown.jsx';

export default function RenderArticles({ articles, ...props }) {
    const [content, setContent] = useState('');
    const path = articles?.path;
    const anchor = articles?.fileName; // 用来涉及锚点，实现点击跳转的

    const schema = {
        ...defaultSchema,
        tagNames: [
            ...(defaultSchema.tagNames || []),
            'details',
            'summary',
            'svg',
            'path',
            'circle',
            'rect',
            'line',
            'g',
            'style'
        ],
        attributes: {
            ...defaultSchema.attributes,
            svg: ['width', 'height', 'viewBox'],
            path: ['d', 'fill', 'stroke'],
            '*': ['className', 'style']
        }
    };

    useEffect(() => {
        const loadMarkdown = async () => {
            if (!path) return;

            // 2. 使用 await 等待 Promise 结果
            const result = await fetchContent(path);

            // 3. 将拿到的字符串存入 State
            setContent(result);
        };

        loadMarkdown();
    }, [path]);

    return (
        <>
            <RenderMarkdown anchor={anchor}>
                {content.length !== 0 && (
                    <>
                        <h2 className={classes.h2}>{articles?.titleCh}</h2>

                        <ReactMarkdown
                            components={{
                                a: ({ href, children, ...props }) => (
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        {...props}
                                    >
                                        {children}
                                    </a>
                                )
                            }}
                            remarkPlugins={[remarkFrontmatter, remarkGfm]}
                            rehypePlugins={[
                                rehypeRaw,
                                [rehypeSanitize, schema],
                                rehypePrism
                            ]}
                        >
                            {content}
                        </ReactMarkdown>
                    </>
                )}
            </RenderMarkdown>
        </>
    );
}
