import { Outlet } from "react-router-dom";

import classes from "./RepositorySidebarNavigate.module.scss";

import { Repository_Navigate } from "../../_data/repository-page/repository.js";
import SidebarNavigate from "../../features/repository-page/SidebarNavigateRepository.jsx";

export default function RepositorySidebarNavigate() {
    return (
        <section id="main-content" className={classes.container}>
            <SidebarNavigate CATEGORY={Repository_Navigate} />
            <Outlet />
        </section>
    );
}
