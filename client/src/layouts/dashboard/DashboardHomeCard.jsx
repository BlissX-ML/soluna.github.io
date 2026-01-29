import { useNavigate } from 'react-router-dom';
import classes from './DashboardHomeCard.module.scss';

import { DASHBOARD_TOTAL } from '../../_data/dashboard/dashbord';
import DashboardRedirectCard from '../../components/card/DashboardRedirectCard';

export default function DashboardHomeCard() {
    const navigate = useNavigate();

    return (
        <main className={classes['content-container']}>
            {DASHBOARD_TOTAL.map(el => (
                <main key={el?.key} className={classes.singleContent}>
                    <DashboardRedirectCard
                        resources={el}
                        handleClick={() => navigate(el?.key)}
                    />
                </main>
            ))}
        </main>
    );
}
