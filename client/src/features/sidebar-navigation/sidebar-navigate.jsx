import { useLocation } from "react-router-dom";
import classes from "./sidebar-navigate.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/reducer/hooks.js";

import {
    openSecondaryItems,
    setCurItem,
    toggleOpenSecondaryItems,
} from "../../store/reducer/repository.js";
import { useState } from "react";

export default function SidebarNavigate({ CATEGORY }) {
    const [openSidebar, setOpenSidebar] = useState(true);

    // 和下拉列表联动
    const dispatch = useAppDispatch();

    // 选中知识库页面的state
    const { curItem, secondaryItemsState } = useAppSelector(
        (state) => state.repository,
    );

    const location = useLocation();

    function updateSecondaryItems(item) {
        if (curItem === item) {
            dispatch(toggleOpenSecondaryItems());
        } else {
            dispatch(setCurItem(item));
            dispatch(openSecondaryItems());
        }

        if (location.pathname.startsWith("/repository")) {
            return;
        }
    }

    function activeClass(item) {
        return curItem === item && secondaryItemsState ? classes.active : ""; //
    }

    return (
        <>
            {/* 放侧边栏 */}
            <aside
                className={`${classes["sidebar"]} ${openSidebar ? "" : classes["close"]}`}
            >
                <div className={classes["sidebar-toggle-container"]}>
                    <p>
                        <span>目录</span>
                        <span>catalogs</span>
                    </p>
                </div>

                <ul className={classes["first-ul"]}>
                    {CATEGORY.map((firstLevel) => (
                        <>
                            <li
                                onClick={() =>
                                    updateSecondaryItems(firstLevel.key)
                                }
                                className={`${classes["first-li"]} ${activeClass(firstLevel.key)}`}
                                key={firstLevel.key}
                            >
                                <div className={classes["title"]}>
                                    {firstLevel.title}
                                </div>

                                <ul
                                    className={`${classes["second-ul"]} ${activeClass(firstLevel.key)}`}
                                >
                                    {firstLevel?.detail?.data.map(
                                        (secondaryLevel) => (
                                            <li
                                                className={classes["second-li"]}
                                                key={secondaryLevel.key}
                                            >
                                                {secondaryLevel?.title}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </li>
                        </>
                    ))}
                </ul>

                {/* 放是否显示的按钮的 */}
                <button
                    aria-label="切换侧边栏"
                    className={classes["toggle-btn"]}
                    onClick={() => setOpenSidebar((state) => !state)}
                >
                    <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        width="256"
                        height="256"
                    >
                        <path d="M638.72 970.666667h-256c-118.186667 0-198.272-25.002667-251.946667-78.72S52.053333 758.186667 52.053333 640V384c0-118.186667 25.002667-198.272 78.72-251.946667S264.533333 53.333333 382.72 53.333333h256c118.186667 0 198.272 25.002667 251.946667 78.72S969.386667 265.813333 969.386667 384v256c0 118.186667-25.002667 198.272-78.72 251.946667S756.906667 970.666667 638.72 970.666667z m-256-853.333334c-100.096 0-165.802667 19.2-206.72 59.946667S116.053333 283.904 116.053333 384v256c0 100.096 19.072 165.802667 59.946667 206.72S282.624 906.666667 382.72 906.666667h256c100.096 0 165.802667-19.072 206.72-59.946667S905.386667 740.096 905.386667 640V384c0-100.096-19.072-165.802667-59.946667-206.72S738.816 117.333333 638.72 117.333333z"></path>
                        <path d="M340.053333 970.666667a32 32 0 0 1-32-32V85.333333a32 32 0 0 1 32-32 32 32 0 0 1 32 32v853.333334a32 32 0 0 1-32 32zM638.72 653.226667a31.914667 31.914667 0 0 1-22.613333-9.386667l-109.226667-109.226667a32 32 0 0 1 0-45.269333l109.226667-109.184a32 32 0 0 1 45.269333 0 32 32 0 0 1-0.042667 45.226667L574.762667 512l86.570666 86.613333a32 32 0 0 1-22.613333 54.613334z"></path>
                    </svg>
                </button>
            </aside>
        </>
    );
}
