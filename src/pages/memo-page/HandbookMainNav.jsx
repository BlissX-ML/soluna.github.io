import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import classes from "./HandbookMainNav.module.scss";

import { useAppDispatch } from "../../store/reducer/hooks.js";
import { resetOpen } from "../../store/reducer/aside-toggle.js";

import AsideNavigate from "../../features/aside-fixed-navigation/AsideNavigate.jsx";

export default function HandbookMainNav() {
    const dispatch = useAppDispatch();

    // 因为是同时控制所有的侧边栏，所以先初始化设置
    useEffect(() => {
        dispatch(resetOpen());
    }, []);

    return (
        <section id="main-content" className={classes.container}>
            {/* 实际导航栏设置 */}
            <AsideNavigate categories={["前端八股文"]} />
            <Outlet />
        </section>
    );
}
