import { useContext } from "react";
import { RECAP_NAV } from "../../../data/recap/recap.js";
import classes from './CategoryTitle.module.css'

import { recapAsideContext } from "../../../store/RecapAsideManageContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoryTitle() {
    const navigate = useNavigate();
    const location = useLocation();
    const ctx = useContext(recapAsideContext);

    function handleClick(key) {
        ctx.setActiveKey(key);
        console.log('activeKey', ctx.activeKey)
        if (location.pathname !== '/recap') { navigate('/recap') }
    }

    return (
        <>
            {RECAP_NAV.map((val) => (
                <li
                    key={val.key}
                    className={val.key === ctx.activeKey ? classes.active : ''}
                    onClick={() => handleClick(val.key)}
                >
                    {val.title}
                </li>
            ))}
        </>

    )
}