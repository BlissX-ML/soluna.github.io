import classes from './SidebarList.module.scss';

export default function SidebarList({
    categories, // 侧边栏数据
    handleFirstLevelState, // 处理一级列表状态
    handleSecondaryLevelState, // 处理二级列表状态
    handleFirstLevelClick, // 处理一级标题点击
    handleSecondaryLevelClick, // 处理二级标题点击
    startURL // 跳转的起始路由
}) {
    return (
        <ul className={classes['first-ul']}>
            {categories.map(firstLevel => (
                <li
                    key={firstLevel.key}
                    className={`${classes['first-li']} ${handleFirstLevelState(firstLevel)}`}
                >
                    <button
                        className={classes.btn}
                        onClick={() =>
                            handleFirstLevelClick(startURL, firstLevel)
                        }
                    >
                        <div className={classes['title']}>
                            {firstLevel.title}
                        </div>
                    </button>
                    <ul
                        className={`${classes['second-ul']} ${handleSecondaryLevelState(firstLevel)}`}
                    >
                        {firstLevel?.detail?.data.map(secondaryLevel => (
                            <li
                                key={secondaryLevel?.key}
                                className={classes['second-li']}
                            >
                                <button
                                    className={classes.btn}
                                    onClick={e =>
                                        handleSecondaryLevelClick(
                                            e,
                                            secondaryLevel
                                        )
                                    }
                                >
                                    {secondaryLevel?.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}
