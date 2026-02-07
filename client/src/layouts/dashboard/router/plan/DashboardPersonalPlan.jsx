import { useMemo } from 'react';
import { useDashboardPlanStates } from '../../../../store/zustand/dashboard-dropdown';
import classes from './DashboardPersonalPlan.module.scss';

import Underline from '../../../../components/icons/Underline';
import DoubleBarEchart from '../../../../components/charts/DoubleBarEchart';

import PlanSelect from '../../../../features/dashboard/router/plan-learn/PlanSelect';
import PlanListContent from '../../../../features/dashboard/router/plan-learn/PlanListContent';

import { FUTURE_PLANS } from '../../../../_data/dashboard/personal-plan/plans';

export default function DashboardPersonalPlan() {
    const { hasOption } = useDashboardPlanStates();

    // filter 返回数组， find返回对象或 undefined
    const selectedPlans = useMemo(() => {
        return FUTURE_PLANS.filter(els => {
            if (hasOption === 'all') {
                return els.canIterate; // 如果是 'all'，显示所有可遍历的项
            }
            // 否则只显示匹配的项
            return els?.key === hasOption;
        });
    }, [hasOption]);

    return (
        <main className={classes.container}>
            <PlanSelect planLearnData={FUTURE_PLANS} />

            {/* 包含计划标题，计划内容，图表 */}
            {selectedPlans.map(els => (
                <main className={classes.each} key={els?.key}>
                    {/* 标题部分 */}
                    <div className={classes.title}>
                        <p>{els.title}</p>
                        <Underline />
                    </div>

                    {/* 计划内容 + 图表 */}
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
