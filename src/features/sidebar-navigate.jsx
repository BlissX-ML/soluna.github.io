import { useState } from "react";
import classes from "./sidebar-navigate.module.scss";

export default function SidebarNavigate({ CATEGORY }) {
    const [curSelectedItem, setCurSelectedItem] = useState(null);
    const [openSecondaryItems, setOpenSecondaryItems] = useState(false);

    function expandSecondaryItems(item) {
        setCurSelectedItem(item);
        if (curSelectedItem !== item) {
            setOpenSecondaryItems(true);
            return;
        }
        setOpenSecondaryItems((state) => !state);
    }

    function activeClass(item) {
        return curSelectedItem === item && openSecondaryItems
            ? classes.active
            : "";
    }

    return (
        <>
            {/* 放侧边栏 */}
            <aside className={classes["sidebar"]}>
                <ul className={classes["first-ul"]}>
                    {CATEGORY.map((firstLevel, ind) => (
                        <>
                            <li
                                onClick={() =>
                                    expandSecondaryItems(firstLevel.key)
                                }
                                className={`${classes["first-li"]} ${activeClass(firstLevel.key)}`}
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
