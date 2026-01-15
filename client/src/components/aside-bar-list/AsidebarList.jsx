import classes from "./AsidebarList.module.scss";

export default function AsidebarList({
    ITEMS,
    handleUpdateItem,
    curItem,
    secondaryItemsState,
}) {
    // active类在这里对应的 .scss 内定义的，把这个函数放在父组件的话会找不到 active 的类的定义
    function activeClass(item) {
        return curItem === item && secondaryItemsState ? classes.active : "";
    }

    return (
        <ul className={classes["first-ul"]}>
            {ITEMS.map((firstLevel) => (
                <li
                    onClick={() => handleUpdateItem(firstLevel.key)}
                    className={`${classes["first-li"]} ${activeClass(firstLevel.key)}`}
                    key={firstLevel.key}
                >
                    <div className={classes["title"]}>{firstLevel.title}</div>

                    <ul
                        className={`${classes["second-ul"]} ${activeClass(firstLevel.key)}`}
                    >
                        {firstLevel?.detail?.data.map((secondaryLevel) => (
                            <li
                                className={classes["second-li"]}
                                key={secondaryLevel.key}
                            >
                                {secondaryLevel?.title}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}
