import classes from './Dashboard.module.scss';

import DashboardTitlebar from '../../features/title-bar/DashboardTitlebar';
import DashboardHomeCard from '../../layouts/dashboard/DashboardHomeCard';

export default function Dashboard() {
    return (
        <section id="main-content" className={classes['dashboard-container']}>
            <DashboardTitlebar />
            <DashboardHomeCard />
        </section>
    );
}
