import { useState } from "react";

import classes from "./TodosItems.module.scss";
import TitlesComp from "../plans-titles/TitlesComp.jsx";
// import ContentComp from '../plans-contents/ContentComp.jsx'
import ContentFutureViewer from "../future-items/ContentFutureViewer";
import ContentDoneViewer from "../complete-items/ContentDoneViewer";
// import { TODO_ITEMS } from '../../../_data/plans-page/future-todos/future-items';
import { COMPLETE_ITEMS } from "../../../_data/plans-page/done-items";

export default function TodosItems() {
    const [selectTitle, setSelectTitle] = useState("future");

    return (
        <main className={classes.container}>
            <div className={classes.itemsSelect}>
                <TitlesComp state={selectTitle} changeState={setSelectTitle} />
                {/* <ContentComp state={selectTitle} /> */}
            </div>

            <div className={classes.results}>
                {/* {selectTitle === "future" ? (
                    <ContentFutureViewer slot="future" items={TODO_ITEMS} />
                ) : (
                    <ContentDoneViewer slot="done" items={COMPLETE_ITEMS} />
                )} */}
            </div>
        </main>
    );
}
