import { Outlet } from "react-router-dom";

import classes from "./MemoSidebarNavigate.module.scss";

import { MEMOS_TYPES } from "../../_data/memo-page/memo.js";
import SidebarNavigateMemo from "../../features/memo-page/SidebarNavigateMemo";

export default function MemoSidebarNavigate() {
    return (
        <>
            <SidebarNavigateMemo CATEGORY={MEMOS_TYPES} />

            <section id="main-content" className={classes.content}>
                <Outlet />
            </section>
        </>
    );
}
