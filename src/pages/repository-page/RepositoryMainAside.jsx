import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import classes from "./RepositoryMainAside.module.scss";

import { useAppDispatch } from "../../store/reducer/hooks.js";
import { resetOpen } from "../../store/reducer/aside-toggle.js";

import AsideNavigate from "../../features/aside-fixed-navigation/AsideNavigate.jsx";
import { Repository_Navigate } from "../../_data/repository-page/repository.js";
import SidebarNavigate from "../../features/sidebar-navigate";

export default function RepositoryMainAside() {
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
