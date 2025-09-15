// @ts-nocheck

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurItem, toggle } from '../../../store/reducer/repository.js';

import classes from './CategoryDropContent.module.css'

import { RECAP_NAV } from '../../../data/repository-page/repository.js';


export default function CategoryDropContent() {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.repository);

    const navigate = useNavigate();
    const location = useLocation();

    function handleClick(key) {
        dispatch(setCurItem(key));   // 修改当前选中的 item 
        if (location.pathname !== '/repository') navigate('/repository');
        dispatch(toggle())
    }

    return (
        <div className={`${classes.content} ${active ? classes.active : ''}`}>
            <ul className={classes.list}>
                {RECAP_NAV.map(els => (
                    <li key={els.key}>
                        <button onClick={() => handleClick(els.key)}>
                            {els.dropTitle}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}