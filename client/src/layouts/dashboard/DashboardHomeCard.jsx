import { useNavigate } from 'react-router-dom';
import classes from './DashboardHomeCard.module.scss';

import { DASHBOARD_TOTAL } from '../../_data/dashboard/dashbord';
import DashboardRedirectCardHeader from '../../components/card-dashboard/DashboardRedirectCardHeader';
import DashboardRedirectCardLink from '../../components/card-dashboard/DashboardRedirectCardLink';

export default function DashboardHomeCard() {
    const navigate = useNavigate();

    return (
        <main className={classes['content-container']}>
            {DASHBOARD_TOTAL.map(el => (
                <main key={el?.key}>
                    <DashboardRedirectCardHeader resources={el} />
                    <DashboardRedirectCardLink
                        handleClick={() => navigate(el?.key)}
                    />
                </main>
            ))}
        </main>
    );
}
