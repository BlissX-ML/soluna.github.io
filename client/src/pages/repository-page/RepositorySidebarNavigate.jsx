import { Outlet } from "react-router-dom";

import classes from "./RepositorySidebarNavigate.module.scss";

import SidebarNavigate from "../../features/shared-dropdown-sidebar/SidebarNavigate";
import { Repository_Navigate } from "../../_data/repository-page/repository";

export default function RepositorySidebarNavigate() {
    return (
        <>
            <SidebarNavigate catalogs={Repository_Navigate} startURL="/memo" />

            <section id="main-content" className={classes.content}>
                <Outlet />
            </section>
        </>
    );
}
