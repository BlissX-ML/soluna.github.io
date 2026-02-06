import { useEffect, useRef } from 'react';
import classes from './PlanSelect.module.scss';
import { useDashboardPlanStates } from '../../../../store/zustand/dashboard-plan';

import { FUTURE_PLANS } from '../../../../_data/dashboard/personal-plan/future-plan';
import DropdownArrow from '../../../../components/icons/DropdownArrow';

export default function PlanSelect() {
    const selectRef = useRef(null);
    const { isOpen, hasOption, toogleOpen, closeOpen, handleSelect } =
        useDashboardPlanStates();

    const selectedPlan = FUTURE_PLANS.find(p => p.key === hasOption);

    // 点击外部关闭下拉
    useEffect(() => {
        function handleClickOutside(e) {
            // 已经选中了就关闭下拉列表
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                closeOpen();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [closeOpen]);

    return (
        <main className={classes.select} ref={selectRef}>
            <button className={classes.default} onClick={() => toogleOpen()}>
                <span>{selectedPlan?.title || '全部'}</span>
                <span
                    className={`${classes.arrow} ${isOpen ? classes.open : ''}`}
                >
                    <DropdownArrow />
                </span>
            </button>

            <ul
                className={`${classes.options} ${isOpen ? classes.active : ''}`}
            >
                {FUTURE_PLANS.map(plan => (
                    <li key={plan?.key}>
                        <button onClick={() => handleSelect(plan?.key)}>
                            {plan.title}
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
