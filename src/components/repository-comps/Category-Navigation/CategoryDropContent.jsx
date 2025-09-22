// 这里放置的是导航栏下下拉内容框的内容

import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store/reducer/hooks.js';
import { setCurItem, toggle, updateItemContent } from '../../../store/reducer/repository.js';

import classes from './CategoryDropContent.module.scss'

import { Repository_Navigate } from '../../../data/repository-page/repository.js';
import { changeAside, resetOpen } from '../../../store/reducer/aside-toggle.js';

export default function CategoryDropContent() {
    const dispatch = useAppDispatch();
    const { active } = useAppSelector((state) => state.repository);

    const navigate = useNavigate();
    const location = useLocation();

    function handleClick(key) {
        dispatch(setCurItem(key));           // 修改当前选中的 item 
        dispatch(updateItemContent(key));    // 修改当前大类下的，对应小类的内容展示

        dispatch(resetOpen());               // 重置左侧的导航栏状态（联动左侧导航栏）

        if (location.pathname !== '/repository') navigate('/repository');

        dispatch(toggle())
    }

    return (
        <div
            className={`${classes.content} ${active ? classes.active : ''}`}
        >
            <ul>

                {/* 在这里显示 repository 下拉列表的选项 */}
                {Repository_Navigate.map(els => (
                    <li key={els.key}>
                        <button onClick={() => handleClick(els.key)}>
                            {els.title}
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}