import { useLocation, useNavigate } from "react-router-dom";
import scrollToItem from "../../_utils/browser/scroll-into-view";
import classes from "./AsidebarList.module.scss";

export default function AsidebarList({
    ITEMS,
    handleUpdateItem,
    curItem,
    secondaryItemsState,
    startURL
}) {
    const navigate = useNavigate();  // 跳转到对应的路由
    const location = useLocation(); // 核查当前页面

    // active类在这里对应的 .scss 内定义的，把这个函数放在父组件的话会找不到 active 的类的定义
    function activeClass(item) {
        return curItem === item && secondaryItemsState ? classes.active : "";
    }

    // 处理一级标题点击
    const handleFirstLevelClick = (startURL, item) => {
        handleUpdateItem(item?.key);
        if(!location.pathname.endsWith(item?.key)) {
            navigate(`${startURL}/${item?.key.toLowerCase()}`);
        }

        // 平滑移动，默认返回顶部，itemId 固定为数组第一个元素
        scrollToItem(item?.detail?.data?.[0]?.fileName);
    };  

    // 处理二级标题点击
    const handleSecondaryClick = (e, item) => {
        e.stopPropagation(); // 阻止事件冒泡
        scrollToItem(item?.fileName);
        console.log(item?.fileName)
    };

    return (
        <ul className={classes["first-ul"]}>
            {ITEMS.map((firstLevel) => (
                <li
                    onClick={() => handleFirstLevelClick(startURL, firstLevel)}
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
                                key={secondaryLevel?.key}
                                onClick={(e) =>
                                    handleSecondaryClick(e, secondaryLevel)
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
