import { ICONS } from "../../../../data/icons/icons.js";
import classes from './Title.module.scss'

export default function Title({ onClick, active, children }) {
    const Hint = ICONS.hint;

    return (
        <div
            className={`${classes.choice} ${active}`}
            onClick={onClick}
        >
            <span>{children}</span>
            <Hint />
        </div>
    )
}