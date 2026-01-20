import { Outlet } from "react-router-dom";

import classes from "./RepositorySidebarNavigate.module.scss";

import { Repository_Navigate } from "../../_data/repository-page/repository.js";
import SidebarNavigate from "../../features/repository-page/SidebarNavigateRepository.jsx";

export default function RepositorySidebarNavigate() {
    return (
        <section className={classes.container}>
            <SidebarNavigate CATEGORY={Repository_Navigate} />

            <section id="main-content" className={classes.contents}>
                <Outlet />
            </section>
        </section>
    );
}
