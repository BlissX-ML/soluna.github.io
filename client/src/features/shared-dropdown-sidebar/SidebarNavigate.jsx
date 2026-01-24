import { useLocation } from "react-router-dom";
import classes from "./SidebarNavigate.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/reducer/hooks.js";

import {
    openSecondaryItems,
    setAsidebarActive,
    setCurItem,
    toggleOpenSecondaryItems,
} from "../../store/reducer/dropdownSidebar.js";

import AsidebarToggleBtns from "../../components/buttons/AsidebarToggleBtns";
import AsidebarList from "../../components/aside-bar/AsidebarList";
import AsidebarCatalogs from "../../components/aside-bar/AsidebarCatalogs";

export default function SidebarNavigate({ catalogs, startURL }) {
    const location = useLocation();
    const dispatch = useAppDispatch();

    // 选中知识库页面的state
    const { asidebarActive, curItem, secondaryItemsState } = useAppSelector(
        (state) => state.dropdownSidebar,
    );

    function updateSecondaryItems(item) {
        if (curItem === item) {
            dispatch(toggleOpenSecondaryItems());
        } else {
            dispatch(setCurItem(item));
            dispatch(openSecondaryItems());
        }

        if (location.pathname.startsWith(startURL)) {
            return;
        }
    }

    return (
        <aside
            className={`${classes["sidebar"]} ${asidebarActive ? "" : classes["close"]}`}
        >
            {/* 目录 */}
            <AsidebarCatalogs />

            {/* 控制侧边栏二级分类是否打开 */}
            <AsidebarList
                ITEMS={catalogs}
                handleUpdateItem={(item) => updateSecondaryItems(item)}
                curItem={curItem}
                secondaryItemsState={secondaryItemsState}
                startURL={startURL}
            />

            {/* 放是否显示的按钮的 */}
            <AsidebarToggleBtns
                sidebarState={asidebarActive}
                toggleSidebar={() => dispatch(setAsidebarActive())}
            />
        </aside>
    );
}
