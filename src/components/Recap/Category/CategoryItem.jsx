import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from './CategoryItem.module.css'

import { recapAsideContext } from "../../../store/RecapAsideManageContext.jsx";
import { RECAP_Detailed_Nav } from "../../../data/recap/recap.js";

export default function CategoryItem() {
    const ctx = useContext(recapAsideContext);

    const curBigHeadline = ctx.activeKey;
    const contents = RECAP_Detailed_Nav.filter(el => el.key === curBigHeadline)[0].content;

    return (
        <ul className={classes.ul}>
            {contents.map(text => (
                <li key={text.key}>
                    <Link to={`${text.key}`}>
                        {text.content}
                    </Link>
                </li>
            ))}
        </ul>
    )
}