import classes from "./KnowledgeCard.module.css";
import { memo, useContext } from "react";

import Titles from "./Titles.jsx";
import CardAnswer from "./CardAnswer.jsx";
import CardAsk from "./CardAsk.jsx";
// import { CardContext } from '../../../store/context/knowledgeCardContext.jsx';

function KnowledgeCard() {
    // const ctx = useContext(CardContext);

    return (
        <>
            <main className={classes.cardPart}>
                <div className={classes.left}>
                    <h3>每日一问</h3>
                    <p>Are you ready to answer today&apos;s question?</p>
                </div>

                {/* <div className={classes.right}>
                    <CardAsk />

                    <div className={`${classes.answer} ${ctx.state ? classes.show : ''}`} >
                        <CardAnswer />
                    </div>
                </div> */}
            </main>
        </>
    );
}

export default memo(KnowledgeCard);
