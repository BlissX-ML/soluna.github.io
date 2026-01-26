import { useParams } from 'react-router-dom';
import classes from './DashboardChartLayout.module.scss';

export default function DashboardChartLayout() {
    const { dashboardId } = useParams();

    return <h1>{dashboardId}</h1>;
}
