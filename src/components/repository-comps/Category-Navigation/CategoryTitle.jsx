// @ts-nocheck

import { useLocation, useNavigate } from "react-router-dom";

import classes from './CategoryTitle.module.css'

import { useDispatch, useSelector } from "react-redux";
import { setCurItem } from "../../../store/reducer/repository.js";

import { RECAP_NAV } from "../../../data/repository-page/repository.js";


export default function CategoryTitle() {
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();
    const { curItem } = useSelector((state) => state.repository);

    function handleClick(key) {
        dispatch(setCurItem(key))
        if (location.pathname !== '/repository') navigate('/repository')
    }

    return (
        <aside className={classes.aside}>
            <ul>
                {RECAP_NAV.map((val) => (
                    <li
                        key={val.key}
                        className={val.key === curItem ? classes.active : ''}
                        onClick={() => handleClick(val.key)}
                    >
                        {val.title}
                    </li>
                ))}
            </ul>
        </aside>
    )
}