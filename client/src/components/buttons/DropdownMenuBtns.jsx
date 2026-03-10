// ?.() 是「可选链」的语法
// 相当于 if (onItemClick) {onItemClick(els.key)}

import { Link } from 'react-router-dom';
import classes from './DropdownMenuBtns.module.scss';

export default function DropdownMenuBtns({
    catalogs,
    startUrl,
    handleEachDropdownMenu
}) {
    return (
        <ul className={classes['dropdown-menu']}>
            {/* 在这里显示 repository 下拉列表的选项 */}
            {catalogs.map(els => (
                <Link
                    className={classes.link}
                    to={`${startUrl}/${els?.key.toLowerCase()}`}
                    key={els.key}
                    onClick={() => handleEachDropdownMenu(els)}
                >
                    {els.title}
                </Link>
            ))}
        </ul>
    );
}
