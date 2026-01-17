import { Outlet } from "react-router-dom";

import classes from "./MemoSidebarNavigate.module.scss";

import { MEMOS_TYPES } from "../../_data/memo-page/memo.js";
import SidebarNavigateMemo from "../../features/memo-page/SidebarNavigateMemo";

export default function MemoSidebarNavigate() {
    return (
        <section id="main-content" className={classes.container}>
            <SidebarNavigateMemo CATEGORY={MEMOS_TYPES} />
            <Outlet />
        </section>
    );
}
