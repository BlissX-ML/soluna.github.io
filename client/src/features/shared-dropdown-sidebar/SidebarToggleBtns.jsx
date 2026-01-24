import { useDispatch } from "react-redux";
import classes from "./SidebarToggleBtns.module.scss";

import { useAppSelector } from "../../store/reducer/hooks.js";
import { setSidebarActive } from "../../store/reducer/dropdownSidebar.js";

import Sidebar from "../../components/icons/Asidebar.jsx";

// 侧边栏切换按钮
export default function SidebarToggleBtns() {
    const dispatch = useDispatch();
    const { sidebarActive } = useAppSelector((state) => state.dropdownSidebar);

    return (
        <button
            aria-label="切换侧边栏"
            className={`${classes["toggle-btn"]} ${sidebarActive ? "" : classes["close"]}`}
            onClick={() => dispatch(setSidebarActive())}
        >
            <Sidebar />
        </button>
    );
}
