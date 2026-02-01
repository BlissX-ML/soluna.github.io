import { useEffect, useRef, useState } from 'react';
import { FUTURE_PLANS } from '../../../_data/dashboard/personal-plan/future-plan';
import classes from './DashboardPersonalPlan.module.scss';

export default function DashboardPersonalPlan() {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState('all');
    const selectRef = useRef(null);

    // 点击外部关闭下拉
    useEffect(() => {
        function handleClickOutside(e) {
            // 已经选中了就关闭下拉列表
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = plan => {
        setOption(plan.key);
        setIsOpen(false); // 选中后关闭下拉列表
    };

    const selectedPlan = FUTURE_PLANS.find(p => p.key === option);

    return (
        <main className={classes.container}>
            {/* 选择当前要选中的项目 */}
            <main className={classes.select} ref={selectRef}>
                <div
                    className={classes.default}
                    onClick={() => setIsOpen(!isOpen)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            setIsOpen(!isOpen);
                        }
                    }}
                >
                    <span>{selectedPlan?.title || '全部'}</span>
                    <span className={classes.arrow}>{isOpen ? '▲' : '▼'}</span>
                </div>

                <ul
                    className={`${classes.options} ${isOpen ? classes.active : ''}`}
                >
                    {FUTURE_PLANS.map(plan => (
                        <li
                            key={plan?.key}
                            onClick={() => handleSelect(plan)}
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleSelect(plan);
                                }
                            }}
                            tabIndex={0}
                            role="option"
                            aria-selected={option === plan.key}
                        >
                            {plan.title}
                        </li>
                    ))}
                </ul>
            </main>

            {/* 包含计划标题，计划内容，图表 */}
            <main></main>
            <main></main>
        </main>
    );
}
