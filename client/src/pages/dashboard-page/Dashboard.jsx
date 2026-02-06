import classes from './Dashboard.module.scss';

import DashboardTitlebar from '../../features/title-bar/DashboardTitlebar';
import DashboardCardsLayout from '../../layouts/dashboard/main-router/DashboardCardsLayout';

export default function Dashboard() {
    return (
        <section id="main-content" className={classes['dashboard-container']}>
            <DashboardTitlebar />
            <DashboardCardsLayout />
        </section>
    );
}
