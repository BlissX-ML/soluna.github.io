import { Outlet } from "react-router-dom";

import classes from "./MemoSidebarNavigate.module.scss";

import { MEMOS_TYPES } from "../../_data/memo-page/memo.js";
import SidebarNavigate from "../../features/shared-dropdown-sidebar/SidebarNavigate";

export default function MemoSidebarNavigate() {
    return (
        <section id="main-content">
            <SidebarNavigate catalogs={MEMOS_TYPES} startURL="/memo" />

            <Outlet />
        </section>
    );
}
