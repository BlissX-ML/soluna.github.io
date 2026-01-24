import { useContext } from "react";
// import { CardContext } from "../../../store/context/knowledgeCardContext.jsx";
import classes from "./KnowledgeCard.module.css";

export default function CardAsk() {
    // const ctx = useContext(CardContext);

    return (
        <div className={classes.ask}>
            {/* <h3>隐藏 HTML 元素的方法?</h3>
            <button onClick={ctx.changeVisible}>
                <ctx.icon className={classes.icon} />
            </button> */}
        </div>
    );
}
