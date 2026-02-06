import { Outlet } from 'react-router-dom';
import classes from './DashboardNestedLayout.module.scss';

import DashboardNavigate from '../router/nav/DashboardNavigate';

export default function DashboardNestedLayout() {
    return (
        <section id="main-content" className={classes['container']}>
            <DashboardNavigate />
            <Outlet />
        </section>
    );
}
