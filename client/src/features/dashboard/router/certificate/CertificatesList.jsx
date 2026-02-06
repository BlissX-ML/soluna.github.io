import { useRef, useState } from 'react';
import classes from './CertificatesList.module.scss';
import { useCarouselStates } from '../../../../store/zustand/carouselZustand.js';
import { useLineCubicBezier } from '../../../../hooks/useLineCubicBezier.jsx';

import ExtendCloseBtn from '../../../../components/icons/ExtendCloseBtn';
import ExtendBtn from '../../../../components/icons/ExtendBtn';

export default function CertificatesList({ styleLayout, datas }) {
    const containerRef = useRef(null);
    const firstCategoryRef = useRef(null);
    const secondCategoryRef = useRef({});
    const [openedCategory, setOpenedCategory] = useState(null); // 控制要打开的元素列表

    // 状态控制
    const { handleCarouselItem } = useCarouselStates();

    // 弧状线可服用组件
    const { lines } = useLineCubicBezier(
        containerRef,
        firstCategoryRef,
        secondCategoryRef,
        openedCategory
    );

    const handleToggle = key => {
        setOpenedCategory(prev => (prev === key ? null : key)); // 点击同一个就关闭
        // secondCategoryRef.current = {};
    };

    const collectSecondList = (el, ind) => {
        if (!openedCategory) return;

        const key = `second-${openedCategory}`;
        if (!secondCategoryRef.current[key]) {
            secondCategoryRef.current[key] = [];
        }
        secondCategoryRef.current[key][ind] = el;
    };

    return (
        <>
            <div
                className={`${classes.menu} ${styleLayout}`}
                ref={containerRef}
            >
                {/* 线段 */}
                <svg className={classes.svg}>
                    {lines.map((line, ind) => (
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
                    {datas.map(cert => (
                        <li
                            key={cert?.key}
                            className={classes['first-li']}
                            ref={
                                openedCategory === cert?.key
                                    ? firstCategoryRef
                                    : null
                            }
                        >
                            {/* 当前项目的标题 */}
                            <span>{cert?.title}</span>

                            {/* 控制开关第二层标题的 */}
                            <button onClick={() => handleToggle(cert?.key)}>
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
                        {datas
                            .find(el => el?.key === openedCategory)
                            ?.details.map((cert, index) => (
                                <li
                                    key={cert?.key}
                                    className={classes['second-li']}
                                    ref={el => collectSecondList(el, index)}
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
        </>
    );
}
