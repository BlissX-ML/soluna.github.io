import { useCallback, useEffect, useRef, useState } from 'react';
import { DASHBOARD_TOTAL } from '../../../_data/dashboard/dashbord';
import classes from './DashboardNavigate.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DashboardNavigate() {
    const navigate = useNavigate();
    const location = useLocation();

    const [curSecNavItem, setCurSecNavItem] = useState(null);
    const [curSecNavInd, setCurSecNavInd] = useState(0);
    const [lines, setLines] = useState([]);
    const activeBtnRef = useRef(null);
    const activeBlockRef = useRef(null);

    // 控制弧度强度
    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

    function handleClick(e, key, ind) {
        e.stopPropagation();
        setCurSecNavItem(key);
        setCurSecNavInd(ind);

        if (location.pathname.split('/').pop() === key) return;

        navigate(key);
    }

    const recomputeLines = useCallback(() => {
        const activeBlockEl = activeBlockRef.current;
        const activeBtnEl = activeBtnRef.current;

        if (!activeBlockEl || !activeBtnEl) return;

        // 统一坐标系：以 menu 左上角为 (0,0)
        const c = activeBlockEl.getBoundingClientRect(); // 容器
        const b = activeBtnEl.getBoundingClientRect(); // 按钮

        const realPos = (x, y) => ({ x: x - c.left, y: y - c.top }); // 去除边框

        let d;

        const topPos1 = realPos(
            b.left + (b.width / 4) * 1.3,
            b.top - b.height / 5
        );
        const topPos2 = realPos(
            b.left + (b.width / 4) * 2.7,
            b.top - b.height / 5
        );
        const leftPos = realPos(b.left - b.width / 4, b.bottom);
        const rightPos = realPos(b.right + b.width / 4, b.bottom);

        if (curSecNavInd === 0) {
            const dx = rightPos.x - topPos2.x;
            const offset = clamp(Math.abs(dx) * 0.5, 50, 220);

            const dLT = realPos(b.left, b.top);
            const dLT1 = realPos(b.left, b.top - b.height / 5);
            const dLB = realPos(b.left, b.bottom);

            const d1 = `M ${dLT.x} ${dLT.y}`;
            const d2 = `L ${dLT1.x} ${dLT1.y}`;
            const d3 = `L ${topPos2.x} ${topPos2.y}`;
            const d4 = `C ${topPos2.x + offset} ${topPos2.y}, ${rightPos.x - offset} ${rightPos.y}, ${rightPos.x} ${rightPos.y}`;
            const d5 = `L ${dLB.x} ${dLB.y} Z`;

            d = [d1, d2, d3, d4, d5].join(' ');
        } else if (curSecNavInd === DASHBOARD_TOTAL.length - 1) {
            const dx = leftPos.x - topPos1.x;
            const offset = clamp(Math.abs(dx) * 0.5, 50, 220);

            const dRT = realPos(b.right, b.top);
            const dRT1 = realPos(b.right, b.top - b.height / 5);
            const dRB = realPos(b.right, b.bottom);

            const d1 = `M ${leftPos.x} ${leftPos.y}`;
            const d2 = `C ${leftPos.x + offset} ${leftPos.y}, ${topPos1.x - offset} ${topPos1.y}, ${topPos1.x} ${topPos1.y}`;
            const d3 = `L ${dRT1.x} ${dRT1.y}`;
            const d4 = `L ${dRB.x} ${dRB.y} Z`;

            d = [d1, d2, d3, d4].join(' ');
        } else {
            // 用三次贝塞尔自动生成级联弧线
            const dx1 = leftPos.x - topPos1.x;
            const offset1 = clamp(Math.abs(dx1) * 0.5, 50, 220); // 距离越远弯得越自然

            const dx2 = rightPos.x - topPos2.x;
            const offset2 = clamp(Math.abs(dx2) * 0.5, 50, 220);

            // A - B - C - D 的 path
            const d1 = `M ${leftPos.x} ${leftPos.y}`; // 起点 A
            const d2 = `C ${leftPos.x + offset1} ${leftPos.y}, ${topPos1.x - offset1} ${topPos1.y}, ${topPos1.x} ${topPos1.y}`; // A 附近的拐点，B附近的拐点，B
            const d3 = `L ${topPos2.x} ${topPos2.y}`; // B 到 C
            const d4 = `C ${topPos2.x + offset2} ${topPos2.y}, ${rightPos.x - offset2} ${rightPos.y}, ${rightPos.x} ${rightPos.y} Z`; // C 附近的拐点(右侧)，D附近的拐点，D

            const d5 = `L ${leftPos.x} ${leftPos.y} `; // 底部横线

            d = [d1, d2, d3, d4, d5].join(' ');
        }

        setLines([d]);
    }, [curSecNavItem]);

    useEffect(() => {
        recomputeLines();
    }, [recomputeLines]);

    return (
        <main className={classes['sec-nav']}>
            {DASHBOARD_TOTAL.map((el, ind) => (
                <>
                    <div
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
                        <button
                            key={el?.key}
                            className={`${classes['sec-nav-btn']} ${curSecNavItem === el?.key ? classes.active : ''}`}
                            ref={
                                curSecNavItem === el?.key ? activeBtnRef : null
                            }
                            onClick={e => handleClick(e, el?.key, ind)}
                        >
                            <span className={classes.text}>{el?.title}</span>
                        </button>
                    </div>
                </>
            ))}
        </main>
    );
}
