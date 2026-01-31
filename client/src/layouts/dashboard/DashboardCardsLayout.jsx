import classes from './DashboardCardsLayout.module.scss';

import { DASHBOARD_TOTAL } from '../../_data/dashboard/dashbord';
import DashboardCards from '../../features/dashboard/DashboardCards';

export default function DashboardCardsLayout() {
    return (
        <main className={classes['content-container']}>
            <DashboardCards resources={DASHBOARD_TOTAL} />
        </main>
    );
}
