import { useMemo } from 'react';
import { CATEGORIES_COURSES } from '../../../../_data/dashboard/learn-growth/learn-growth';
import PlanSelect from '../../../../features/dashboard/router/plan-learn/PlanSelect';
import { useDashboardPlanStates } from '../../../../store/zustand/dashboard-dropdown';
import classes from './DashboardLearnGrowth.module.scss';
import Underline from '../../../../components/icons/Underline';
import PlanListContent from '../../../../features/dashboard/router/plan-learn/PlanListContent';
import DoubleBarEchart from '../../../../components/charts/DoubleBarEchart';

export default function DashboardLearnGrowth() {
    const { hasOption } = useDashboardPlanStates();

    console.log(hasOption);
    const selectedPlans = useMemo(() => {
        const data = CATEGORIES_COURSES.find(els => {
            return els?.key === hasOption;
        });
        // 找到了就返回
        if (data) return data?.details;

        // 找不到就返回第一个的 details（兜底）
        return CATEGORIES_COURSES[0]?.details || [];
    }, [hasOption]);

    console.log(selectedPlans);

    return (
        <main className={classes.container}>
            <PlanSelect planLearnData={CATEGORIES_COURSES} />

            {/* 包含计划标题，计划内容，图表。和 personal-plan 共用布局 */}
            {selectedPlans.map(els => (
                <main className={classes.each} key={els?.key}>
                    <div className={classes.title}>
                        <p>{els.title}</p>
                        <Underline />
                    </div>

                    <div className={classes.content}>
                        <PlanListContent eachDdata={els} />
                        <DoubleBarEchart
                            className={classes.chart}
                            data={els?.details}
                        />
                    </div>
                </main>
            ))}
        </main>
    );
}
