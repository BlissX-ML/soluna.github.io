import { useLocation } from "react-router-dom";
import classes from "./sidebar-navigate.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/reducer/hooks.js";

import {
    openSecondaryItems,
    setCurItem,
    toggleOpenSecondaryItems,
} from "../../store/reducer/repository.js";

export default function SidebarNavigate({ CATEGORY }) {
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
            <aside className={classes["sidebar"]}>
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
            </aside>

            {/* 放是否显示的按钮的 */}
            <svg className={classes["sidebar-container"]}></svg>
        </>
    );
}
