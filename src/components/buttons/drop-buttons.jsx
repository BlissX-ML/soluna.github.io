// ?.() 是「可选链」的语法
// 相当于 if (onItemClick) {onItemClick(els.key)}

import classes from './drop-buttons.module.scss';

export default function DropButtons({ CATEGORY, itemClick }) {
    return (
        <ul className={classes.default} >
            {/* 在这里显示 repository 下拉列表的选项 */}
            {CATEGORY.map(els => (
                <li key={els.key}>
                    <button onClick={() => itemClick?.(els.key)}>
                        {els.title}
                    </button>
                </li>
            ))}

        </ul>
    )
}