import { useEffect, useState } from "react";
import fetchContent from "../../_data/memo-page/fetch-content";
import ReactMarkdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";
import rehypePrism from "rehype-prism-plus"; // 连接 ReactMarkdown 和 PrismJS 的桥梁

import RenderMarkdown from "../markdown/RenderMarkdown.jsx";

export default function RenderArticles({ articles }) {
    const [content, setContent] = useState("");
    const path = articles?.path;

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
        <RenderMarkdown>
            <h2>{articles?.frontmatter?.titleCh}</h2>
            <ReactMarkdown
                remarkPlugins={[remarkFrontmatter]}
                rehypePlugins={[rehypePrism]}
            >
                {content}
            </ReactMarkdown>
        </RenderMarkdown>
    );
}
