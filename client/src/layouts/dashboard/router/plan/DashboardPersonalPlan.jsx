import { useMemo } from 'react';
import { FUTURE_PLANS } from '../../../../_data/dashboard/personal-plan/future-plan';
import classes from './DashboardPersonalPlan.module.scss';
import Underline from '../../../../components/icons/Underline';
import DoubleBarEchart from '../../../../components/charts/DoubleBarEchart';
import { useDashboardPlanStates } from '../../../../store/zustand/dashboard-plan';
import PlanSelect from '../../../../features/dashboard/router/plan/PlanSelect';
import PlanListContent from '../../../../features/dashboard/router/plan/PlanListContent';

export default function DashboardPersonalPlan() {
    const { hasOption } = useDashboardPlanStates();

    // filter 返回数组， find返回对象或 undefined
    const plans = useMemo(() => {
        return FUTURE_PLANS.filter(els => {
            // 如果是 'all'，显示所有可遍历的项
            if (hasOption === 'all') {
                return els.canIterate;
            }
            // 否则只显示匹配的项
            return els?.key === hasOption;
        });
    }, [hasOption]);

    return (
        <main className={classes.container}>
            <PlanSelect />

            {/* 包含计划标题，计划内容，图表 */}
            {plans.map(els => (
                <main className={classes.each} key={els?.key}>
                    <div className={classes.title}>
                        <p>{els.title}</p>
                        <Underline />
                    </div>
                    <div className={classes.content}>
                        <PlanListContent data={els} />
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
