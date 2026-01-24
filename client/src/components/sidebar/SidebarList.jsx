import classes from "./SidebarList.module.scss";

export default function SidebarList({
    categories, // 侧边栏数据
    handleFirstLevelState, // 处理一级列表状态
    handleSecondaryLevelState, // 处理二级列表状态
    handleFirstLevelClick, // 处理一级标题点击
    handleSecondaryLevelClick, // 处理二级标题点击
    startURL, // 跳转的起始路由
}) {
    return (
        <ul className={classes["first-ul"]}>
            {categories.map((firstLevel) => (
                <li
                    onClick={() => handleFirstLevelClick(startURL, firstLevel)}
                    className={`${classes["first-li"]} ${handleFirstLevelState(firstLevel)}`}
                    key={firstLevel.key}
                >
                    <div className={classes["title"]}>{firstLevel.title}</div>

                    <ul
                        className={`${classes["second-ul"]} ${handleSecondaryLevelState(firstLevel)}`}
                    >
                        {firstLevel?.detail?.data.map((secondaryLevel) => (
                            <li
                                className={classes["second-li"]}
                                key={secondaryLevel?.key}
                                onClick={(e) =>
                                    handleSecondaryLevelClick(e, secondaryLevel)
                                }
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
