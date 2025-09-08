import { useState } from 'react'
import classes from './HandbookNav.module.css'
import { ICONS } from '../../../data/icons/icons.js';

export default function HandbookNav() {
    const [openAside, setOpenAside] = useState(true);

    function handleAside() {
        setOpenAside(prev => !prev)
    }

    return (
        <aside className={`${classes.aside} ${openAside ? classes.open : classes.close}`}>
            <button onClick={handleAside}>
                {openAside ? <ICONS.CloseAside /> : <ICONS.OpenAside />}
            </button>

            <div className={`${classes.navigation} ${openAside ? classes.open : classes.close}`}>
                <p>前端八股文</p>
            </div>

        </aside>
    )
}