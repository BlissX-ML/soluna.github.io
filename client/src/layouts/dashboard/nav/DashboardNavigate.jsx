import classes from './DashboardNavigate.module.scss';

import NestedNavigate from '../../../features/dashboard/NestedNavigate.jsx';

export default function DashboardNavigate() {
    return (
        <main className={classes['sec-nav']}>
            <NestedNavigate />
        </main>
    );
}
