import { useEffect, useMemo, useRef } from 'react';
import classes from './PlanSelect.module.scss';
import { useDashboardPlanStates } from '../../../../store/zustand/dashboard-dropdown';

import DashboardDropdown from '../../../../components/drop-down/DashboardDropdown';

export default function PlanSelect({ planLearnData }) {
    const selectRef = useRef(null);
    const { hasOption, closeOpen, setInitialOption } = useDashboardPlanStates();

    useEffect(() => {
        const exists = planLearnData.some(p => p.key === hasOption);
        if (!exists && planLearnData.length > 0) {
            setInitialOption(planLearnData[0].key);
        }
    }, [planLearnData, hasOption]);

    // 控制列表选中的项目
    const selectedPlan = useMemo(() => {
        const data = planLearnData.find(p => p.key === hasOption);
        if (!data) return;
        return data; // 简化处理
    }, [hasOption, planLearnData]);

    // 点击外部关闭下拉
    useEffect(() => {
        function handleClickOutside(e) {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                closeOpen(); // 已经选中了就关闭下拉列表
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [closeOpen]);

    return (
        <main className={classes.select} ref={selectRef}>
            <DashboardDropdown
                title={selectedPlan?.title} // 获取最初渲染的可选项的 title
                planLearnData={planLearnData}
            />
        </main>
    );
}
