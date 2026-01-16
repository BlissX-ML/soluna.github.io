import { Outlet } from "react-router-dom";

import classes from "./MemoSidebarNavigate.module.scss";

import SidebarNavigate from "../../features/repository-page/SidebarNavigateRepository.jsx";
import { MEMOS_TYPES } from "../../_data/memo-page/memo.js";

export default function MemoSidebarNavigate() {
    return (
        <section id="main-content" className={classes.container}>
            <SidebarNavigate CATEGORY={MEMOS_TYPES} />
            <Outlet />
        </section>
    );
}
