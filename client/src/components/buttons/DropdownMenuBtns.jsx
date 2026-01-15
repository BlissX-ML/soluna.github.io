// ?.() 是「可选链」的语法
// 相当于 if (onItemClick) {onItemClick(els.key)}

import classes from "./DropdownMenuBtns.module.scss";

export default function DropdownMenuBtns({ CATEGORY, onItemClick }) {
    return (
        <ul className={classes["dropdown-menu"]}>
            {/* 在这里显示 repository 下拉列表的选项 */}
            {CATEGORY.map((els) => (
                <li key={els.key} onClick={() => onItemClick?.(els.key)}>
                    <button>{els.title}</button>
                </li>
            ))}
        </ul>
    );
}
