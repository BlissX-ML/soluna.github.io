import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

import classes from "./RenderArticles.module.scss";

import fetchContent from "../../_utils/browser/fetch-content/fetch-content.js";
import RenderMarkdown from "../markdown/RenderMarkdown.jsx";

export default function RenderArticles({ articles }) {
    const [content, setContent] = useState("");
    const path = articles?.path;
    const anchor = articles?.fileName; // 用来涉及锚点，实现点击跳转的

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
        <RenderMarkdown anchor={anchor}>
            <h2 className={classes.h2}>{articles?.titleCh}</h2>
            <ReactMarkdown
                remarkPlugins={[remarkFrontmatter, remarkGfm]}
                rehypePlugins={[rehypePrism]}
            >
                {content}
            </ReactMarkdown>
        </RenderMarkdown>
    );
}
