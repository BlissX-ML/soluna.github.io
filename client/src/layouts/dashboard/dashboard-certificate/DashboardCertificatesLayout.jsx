import * as d3 from 'd3';
import classes from './DashboardCertificatesLayout.module.scss';
import { OBTAINED_CERTIFICATE } from '../../../_data/dashboard/certificates/obtained-certificate';
import { useCallback, useEffect, useRef, useState } from 'react';

import { CERTIFICATE_CHART } from '../../../_data/dashboard/certificates/certificate-chart';
import PieChart from '../../../components/charts/PieChart';
import SlideItems from '../../../features/slide/SlideItems';
import { useCarouselStates } from '../../../store/zustand/carouselZustand';
import ExtendBtn from '../../../components/icons/ExtendBtn';
import ExtendCloseBtn from '../../../components/icons/ExtendCloseBtn';

export default function DashboardCertificatesLayout() {
    const { handleCarouselItem } = useCarouselStates();

    const itemRefs = useRef({});
    const menuRef = useRef(null);
    const [lines, setLines] = useState([]);
    const [openedCategory, setOpenedCategory] = useState(null); // 控制要打开的元素列表

    const handleToggle = key => {
        setOpenedCategory(openedCategory === key ? null : key); // 点击同一个就关闭
    };

    // 控制弧度强度
    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

    // 可复用的重算函数
    const recomputeLines = useCallback(() => {
        if (!openedCategory) {
            setLines([]); // 关闭时清空线
            return;
        }

        const menuEl = menuRef.current;
        const firstEl = itemRefs.current[`first-${openedCategory}`];
        const secondEls = itemRefs.current[`second-${openedCategory}`] || [];

        if (
            !menuEl ||
            !firstEl ||
            !Array.isArray(secondEls) ||
            secondEls.length === 0
        ) {
            setLines([]); // 缺少节点时不画
            return;
        }

        // 统一坐标系：以 menu 左上角为 (0,0)
        const c = menuEl.getBoundingClientRect();

        const r1 = firstEl.getBoundingClientRect();
        const x1 = r1.right - c.left;
        const y1 = r1.top + r1.height / 2 - c.top;

        const newLines = secondEls.map(secondEl => {
            const r2 = secondEl.getBoundingClientRect();
            const x2 = r2.left - c.left;
            const y2 = r2.top + r2.height / 2 - c.top;

            // 用三次贝塞尔自动生成级联弧线
            const dx = x2 - x1;
            const offset = clamp(dx * 0.5, 60, 220); // 距离越远弯得越自然

            // C = Cubic Bézier（画三次贝塞尔曲线，即平滑弧线）
            const d = `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2} ${y2}`;

            return { d };
        });

        setLines(newLines);
    }, [openedCategory]);

    useEffect(() => {
        recomputeLines();
    }, [recomputeLines]);

    useEffect(() => {
        // 窗口尺寸变化时重算
        const onResize = () => recomputeLines();
        window.addEventListener('resize', onResize);

        // menu 自身尺寸/布局变化时重算（展开收起、字体变化等）
        let rec;

        // 确保 menu DOM 存在并且浏览器支持 ResizeObserver
        if (menuRef.current && 'ResizeObserver' in window) {
            rec = new ResizeObserver(() => recomputeLines());
            rec.observe(menuRef.current); // ResizeObserver 的监听
        }

        return () => {
            window.removeEventListener('resize', onResize);
            if (rec) rec.disconnect(); // ResizeObserver 的停止监听
        };
    }, [recomputeLines]);

    return (
        <main className={classes.container}>
            <div className={classes.menu} ref={menuRef}>
                {/* 线段 */}
                <svg className={classes.svg}>
                    {lines.map((line, ind) => (
                        // M 起点，L 连线点。
                        <path
                            key={`line-${ind}`}
                            d={line.d}
                            stroke="#ff7300"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                    ))}
                </svg>

                {/* 第一层 */}
                <ul className={classes['menu-first']}>
                    {OBTAINED_CERTIFICATE.map(cert => (
                        <li
                            key={cert?.key}
                            className={classes['first-li']}
                            ref={el => {
                                itemRefs.current[`first-${cert.key}`] = el;
                            }}
                        >
                            {/* 当前项目的标题 */}
                            <span>{cert?.title}</span>

                            {/* 控制开关第二层标题的 */}
                            <button onClick={() => handleToggle(cert.key)}>
                                {openedCategory === cert?.key ? (
                                    <ExtendCloseBtn />
                                ) : (
                                    <ExtendBtn />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* 第二层 */}
                {openedCategory && (
                    <ul className={classes['menu-second']}>
                        {OBTAINED_CERTIFICATE.find(
                            el => el?.key === openedCategory
                        )?.details.map((cert, index) => (
                            <li
                                key={cert?.key}
                                className={classes['second-li']}
                                ref={el => {
                                    if (
                                        !itemRefs.current[
                                            `second-${openedCategory}`
                                        ]
                                    ) {
                                        itemRefs.current[
                                            `second-${openedCategory}`
                                        ] = [];
                                    }
                                    itemRefs.current[
                                        `second-${openedCategory}`
                                    ][index] = el;
                                }}
                            >
                                <button
                                    onClick={() => handleCarouselItem(cert)}
                                >
                                    {cert?.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <SlideItems />

            <PieChart className={classes.chart} datas={CERTIFICATE_CHART} />
        </main>
    );
}
