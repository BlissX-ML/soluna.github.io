// import { ICONS } from '../../../_data/icons/icons.js';

import classes from "./TitlesComp.module.scss";

export default function TitlesComp({ state, changeState }) {
    // const Hint = ICONS.hint;

    return (
        <div className={classes.select}>
            <div
                className={`${classes.choice} ${state === "future" ? classes.selectActive : ""}`}
                onClick={() => changeState("future")}
            >
                <span>未来计划</span>
                {/* <Hint /> */}
            </div>

            <div
                className={`${classes.choice} ${state === "done" ? classes.selectActive : ""}`}
                onClick={() => changeState("done")}
            >
                <span>已完成计划</span>
                {/* <Hint /> */}
            </div>
        </div>
    );
}
