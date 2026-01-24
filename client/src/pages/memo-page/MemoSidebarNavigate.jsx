import { Outlet } from "react-router-dom";

import classes from "./MemoSidebarNavigate.module.scss";

import { MEMOS_SIDEBAR } from "../../_data/memo-page/memo.js";
import SidebarNavigation from "../../features/shared-dropdown-sidebar/SidebarNavigation";

export default function MemoSidebarNavigate() {
    return (
        <section id="main-content">
            <SidebarNavigation catalogs={MEMOS_SIDEBAR} startURL="/memo" />
            <Outlet />
        </section>
    );
}
