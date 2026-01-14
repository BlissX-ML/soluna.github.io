import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../store/reducer/hooks.js";
import { resetOpen } from "../../store/reducer/aside-toggle.js";

import classes from "./RepositorySidebarNavigate.module.scss";

import { Repository_Navigate } from "../../_data/repository-page/repository.js";
import SidebarNavigate from "../../features/sidebar-navigation/sidebar-navigate.jsx";

export default function RepositorySidebarNavigate() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetOpen());
    }, []);

    return (
        <section id="main-content" className={classes.container}>
            <SidebarNavigate CATEGORY={Repository_Navigate} />
            <Outlet />
        </section>
    );
}
