import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './NestedNavigate.module.scss';

import { useNavCubicBezier } from '../../../../hooks/useNavCubicBezier.jsx';
import { DASHBOARD_TOTAL } from '../../../../_data/dashboard/dashbord.js';
import { useDashboardNestedNavigateStates } from '../../../../store/zustand/dashboard-nested.navigate';

export default function NestedNavigate() {
    const activeBlockRef = useRef(null);
    const activeBtnRef = useRef(null);

    const location = useLocation();

    const { curSecNavItem, curSecNavInd, setCurSecNavItem, setCurSecNavInd } =
        useDashboardNestedNavigateStates();

    const { lines } = useNavCubicBezier(
        activeBlockRef,
        activeBtnRef,
        curSecNavInd,
        DASHBOARD_TOTAL
    );

    function handleClick(e, key, ind) {
        e.stopPropagation();
        setCurSecNavItem(key);
        setCurSecNavInd(ind);
    }

    // 当 URL 变化时，同步更新 Redux（供其他组件使用）
    useEffect(() => {
        const curPathId = location.pathname.split('/').pop();
        const matchedIndex = DASHBOARD_TOTAL.findIndex(
            item => item?.key === curPathId
        );

        if (matchedIndex !== -1) {
            setCurSecNavItem(DASHBOARD_TOTAL[matchedIndex]?.key);
            setCurSecNavInd(matchedIndex);
        }
    }, [location.pathname, setCurSecNavInd, setCurSecNavItem]);

    return (
        <>
            {DASHBOARD_TOTAL.map((el, ind) => (
                <div
                    key={el?.key}
                    className={classes.container}
                    ref={curSecNavItem === el?.key ? activeBlockRef : null}
                >
                    {curSecNavItem === el?.key && lines.length > 0 && (
                        <svg className={classes.svg}>
                            {lines.map((line, lineInd) => (
                                <g key={`line-${lineInd}`}>
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
                        ref={curSecNavItem === el?.key ? activeBtnRef : null}
                        onClick={e => handleClick(e, el?.key, ind)}
                    >
                        <span className={classes.text}>{el?.title}</span>
                    </NavLink>
                </div>
            ))}
        </>
    );
}
