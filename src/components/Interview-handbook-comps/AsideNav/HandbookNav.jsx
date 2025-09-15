import { useContext } from 'react'
import classes from './HandbookNav.module.css'
import { ICONS } from '../../../data/icons/icons.js';
import { HandbookContext } from '../../../store/context/HandbookAsideContext.jsx';

export default function HandbookNav() {
    const ctx = useContext(HandbookContext)

    return (
        <aside className={`${classes.aside} ${ctx.active ? classes.open : classes.close}`}>
            <button className={classes.asideBtn} onClick={ctx.toggle}>
                {ctx.active ? <ICONS.CloseAside /> : <ICONS.OpenAside />}
            </button>

            <p>前端八股文</p>
        </aside>
    )
}