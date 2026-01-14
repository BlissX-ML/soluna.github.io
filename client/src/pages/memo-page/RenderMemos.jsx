import classes from "./RenderMemos.module.scss";

import { MEMOS } from "../../_data/memo-page/memo.js";

import RenderArticles from "../../components/render-articles/RenderArticles";

export default function RenderMemos() {
    return (
        <main className={classes.mainContent}>
            {MEMOS.map((memo, ind) => (
                <RenderArticles
                    articles={memo}
                    ind={ind}
                    key={memo.key}
                ></RenderArticles>
            ))}
        </main>
    );
}
