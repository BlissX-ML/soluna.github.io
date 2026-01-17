// ?.() 是「可选链」的语法
// 相当于 if (onItemClick) {onItemClick(els.key)}

import scrollToItem from "../../_utils/browser/scroll-into-view";
import classes from "./DropdownMenuBtns.module.scss";

export default function DropdownMenuBtns({ CATEGORY, onItemClick }) {
    function handleDropdownMenu(el) {
        onItemClick(el?.key);
        scrollToItem(el?.detail?.data?.[0]?.fileName);
    }

    return (
        <ul className={classes["dropdown-menu"]}>
            {/* 在这里显示 repository 下拉列表的选项 */}
            {CATEGORY.map((els) => (
                <li key={els.key} onClick={() => handleDropdownMenu(els)}>
                    <button>{els.title}</button>
                </li>
            ))}
        </ul>
    );
}
