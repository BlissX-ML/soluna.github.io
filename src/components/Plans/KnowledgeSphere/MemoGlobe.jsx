import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from './MemoGlobe.module.css'

import { RECAP_NAV } from "../../../data/recap/recap.js";
import Glob from "./Glob.jsx";
import { recapAsideContext } from "../../../store/RecapAsideManageContext.jsx";


export default function MemoGlobe() {
    const ctx = useContext(recapAsideContext);
    const navigate = useNavigate()

    function handleClick(key) {
        ctx.setActiveKey(key);
        navigate('/recap')
    }

    return (
        <main className={classes.memoGlobe}>
            {RECAP_NAV.map(els => (
                <Glob delay={els.delayTime} key={els.key} handleClick={() => handleClick(els.key)}>
                    {els.title}
                </Glob>
            ))}
        </main>
    )
}