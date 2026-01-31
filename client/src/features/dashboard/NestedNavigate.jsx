import { useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import classes from './NestedNavigate.module.scss';

import {
    setCurSecNavInd,
    setCurSecNavItem
} from '../../store/reducer/dashboardNestedNavigate.js';
import { useAppDispatch, useAppSelector } from '../../store/reducer/hooks';

import { useNavCubicBezier } from '../../hooks/useNavCubicBezier.jsx';
import { DASHBOARD_TOTAL } from '../../_data/dashboard/dashbord.js';

export default function NestedNavigate() {
    const activeBlockRef = useRef(null);
    const activeBtnRef = useRef(null);

    const dispatch = useAppDispatch();
    const { curSecNavInd, curSecNavItem } = useAppSelector(
        state => state.dashboardNestedNavigate
    );

    const location = useLocation();

    const { lines } = useNavCubicBezier(
        activeBlockRef,
        activeBtnRef,
        curSecNavInd,
        DASHBOARD_TOTAL
    );

    function handleClick(e, key, ind) {
        e.stopPropagation();
        dispatch(setCurSecNavItem(key));
        dispatch(setCurSecNavInd(ind));
    }

    // 当 URL 变化时，同步更新 Redux（供其他组件使用）
    useEffect(() => {
        const curPathId = location.pathname.split('/').pop();
        const matchedIndex = DASHBOARD_TOTAL.findIndex(
            item => item?.key === curPathId
        );

        if (matchedIndex !== -1) {
            dispatch(setCurSecNavItem(DASHBOARD_TOTAL[matchedIndex]?.key));
            dispatch(setCurSecNavInd(matchedIndex));
        }
    }, [location.pathname]);

    console.log(curSecNavItem);
    return (
        <>
            {DASHBOARD_TOTAL.map((el, ind) => (
                <>
                    <div
                        className={classes.container}
                        ref={curSecNavItem === el?.key ? activeBlockRef : null}
                    >
                        {curSecNavItem === el?.key && (
                            <svg className={classes.svg}>
                                {lines.map((line, ind) => (
                                    <g key={`line-${ind}`}>
                                        <path
                                            d={line}
                                            stroke="none"
                                            strokeWidth="10"
                                            fill="#E8967D"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                    </g>
                                ))}
                            </svg>
                        )}
                        <NavLink
                            to={el?.key}
                            key={el?.key}
                            className={`${classes['sec-nav-link']} ${curSecNavItem === el?.key ? classes.active : ''}`}
                            ref={
                                curSecNavItem === el?.key ? activeBtnRef : null
                            }
                            onClick={e => handleClick(e, el?.key, ind)}
                        >
                            <span className={classes.text}>{el?.title}</span>
                        </NavLink>
                    </div>
                </>
            ))}
        </>
    );
}
