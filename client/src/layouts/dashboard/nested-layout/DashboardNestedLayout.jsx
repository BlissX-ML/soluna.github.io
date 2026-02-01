import { Outlet } from 'react-router-dom';
import DashboardNavigate from '../nav/DashboardNavigate';
import classes from './DashboardNestedLayout.module.scss';

export default function DashboardNestedLayout() {
    return (
        <section id="main-content" className={classes['container']}>
            <DashboardNavigate />
            <Outlet />
        </section>
    );
}
