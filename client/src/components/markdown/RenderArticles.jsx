import { useEffect, useRef, useState } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // 可以解析 HTML
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'; // 防止不可信内容遭受 XSS 攻击

import classes from './RenderArticles.module.scss';

import RenderMarkdown from './RenderMarkdown.jsx';

export default function RenderArticles({ articles }) {
    const [content, setContent] = useState('');
    const anchor = articles?.fileName; // 用来涉及锚点，实现点击跳转的
    const countRef = useRef(0);

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
        setContent(articles.content);
    }, [articles]);

    return (
        <>
            <RenderMarkdown>
                {content ? (
                    <>
                        <h2 className={classes.h2} id={anchor}>
                            {articles?.titleCh}
                        </h2>

                        <ReactMarkdown
                            components={{
                                li: ({ node, children, ...props }) => {
                                    const firstLev =
                                        node.position.start.column === 1;
                                    const id = firstLev
                                        ? `${anchor}-item-${countRef.current++}`
                                        : undefined;
                                    return (
                                        <li id={id} {...props}>
                                            {children}
                                        </li>
                                    );
                                },
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
                ) : null}
            </RenderMarkdown>
        </>
    );
}
