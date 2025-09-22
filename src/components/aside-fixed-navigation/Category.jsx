import { NavLink, useLocation, useNavigate } from "react-router-dom";


import classes from './Category.module.scss'

import { useAppDispatch, useAppSelector } from "../../store/reducer/hooks";
import { setCurItem } from "../../store/reducer/repository";


export default function Category({ categories }) {
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useAppDispatch();
    const { curItem } = useAppSelector((state) => state.repository);  // 控制内部目录的内容

    const handleClick = (key) => {
        dispatch(setCurItem(key))

        // 已经在 repository 下，不强制跳（很重要的交互效果）
        if (location.pathname.startsWith('/repository')) {
            return
        }

        if (location.pathname !== '/repository') navigate('/repository')
    }

    return (
        <>
            {categories.map((els) => (
                <li
                    key={els.key}
                    onClick={() => handleClick(els.key)}
                    className={`${classes.li} ${curItem === els.key ? classes.active : ''}`}
                >
                    <span className={classes.title}>{els.title}</span>

                    <ul className={`${classes.ul} ${curItem === els.key ? classes.active : ''}`}>
                        {els.detailContent?.map((subEls) => (
                            <li key={subEls.key}>
                                <NavLink
                                    to={`/repository/${subEls.key}`}
                                    className={({ isActive }) =>
                                        isActive ? classes.active : ''
                                    }
                                >
                                    {subEls.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </>
    )
}