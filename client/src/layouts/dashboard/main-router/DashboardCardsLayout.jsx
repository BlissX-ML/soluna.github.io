import classes from './DashboardCardsLayout.module.scss';

import { DASHBOARD_TOTAL } from '../../../_data/dashboard/dashbord';
import DashboardEachCards from '../../../features/dashboard/main-router/DashboardEachCards';

export default function DashboardCardsLayout() {
    return (
        <main className={classes['content-container']}>
            <DashboardEachCards resources={DASHBOARD_TOTAL} />
        </main>
    );
}
