import { useParams } from 'react-router-dom';
import classes from './DashboardChartLayout.module.scss';

export default function DashboardChartLayout() {
    const { dashboardId } = useParams();

    return (
        <section id="main-content" className={classes.container}>
            <main>
                <div className={classes.details}></div>
                <div className={classes.chart}></div>
            </main>
            <main></main>
            <main></main>
            <main></main>
            <main></main>
        </section>
    );
}
