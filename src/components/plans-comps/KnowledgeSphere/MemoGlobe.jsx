// @ts-nocheck

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from './MemoGlobe.module.css'

import { RECAP_NAV } from "../../../data/repository-page/repository.js";
import Glob from "./Glob.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCurItem } from "../../../store/reducer/repository";
// import { recapAsideContext } from "../../../store/RepositoryManageContext.jsx";


export default function MemoGlobe() {
    // const ctx = useContext(recapAsideContext);
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const { curItem, active } = useSelector(state => state.repository)

    function handleClick(key) {
        dispatch(setCurItem(key))
        // navigate('/repository')
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