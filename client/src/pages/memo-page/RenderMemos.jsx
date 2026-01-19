import classes from "./RenderMemos.module.scss";

import { MEMOS } from "../../_data/memo-page/memo.js";

import RenderArticles from "../../components/render-articles/RenderArticles";
import { useAppSelector } from "../../store/reducer/hooks";
import { useEffect, useRef, useState } from "react";

export default function RenderMemos() {
    const { asidebarActive } = useAppSelector((state) => state.repository);

    const [visibleCount, setVisibleCount] = useState(10);
    const maxRendered = useRef(0); // 记录曾经渲染过的最大值

    useEffect(() => {
        const timer = setTimeout(() => {
            if (
                visibleCount < MEMOS.length &&
                visibleCount >= maxRendered.current
            ) {
                const newCount = visibleCount + 10;
                setVisibleCount(newCount);
                maxRendered.current = newCount; // 更新最大值
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [visibleCount]);

    return (
        <main
            className={`${classes.mainContent} ${asidebarActive ? "" : classes.close}`}
        >
            {MEMOS.slice(0, visibleCount).map((memo) => (
                <RenderArticles articles={memo} key={memo.key}></RenderArticles>
            ))}
        </main>
    );
}
