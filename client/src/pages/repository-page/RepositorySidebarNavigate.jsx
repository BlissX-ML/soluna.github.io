import { Outlet } from "react-router-dom";
import classes from "./RepositorySidebarNavigate.module.scss";

import { Repository_Navigate } from "../../_data/repository-page/repository.js";
import SidebarNavigation from "../../features/shared-dropdown-sidebar/SidebarNavigation.jsx";

export default function RepositorySidebarNavigate() {
    return (
        <section id="main-content">
            <SidebarNavigation
                catalogs={Repository_Navigate}
                startURL="/repository"
            />
            <Outlet />
        </section>
    );
}
