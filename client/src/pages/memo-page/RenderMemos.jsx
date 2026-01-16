import classes from "./RenderMemos.module.scss";

import { MEMOS } from "../../_data/memo-page/memo.js";

import RenderArticles from "../../components/render-articles/RenderArticles";
import { useAppSelector } from "../../store/reducer/hooks";

export default function RenderMemos() {
    const { asidebarActive } = useAppSelector((state) => state.repository);

    return (
        <main
            className={`${classes.mainContent} ${asidebarActive ? "" : classes.close}`}
        >
            {MEMOS.map((memo) => (
                <RenderArticles articles={memo} key={memo.key}></RenderArticles>
            ))}
        </main>
    );
}
