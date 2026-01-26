import classes from './DashboardRedirectCardHeader.module.scss';

export default function DashboardRedirectCardHeader({ resources }) {
    return (
        <div className={classes.top}>
            <h2>{resources.title}</h2>
            <p className={classes.desc}>{resources?.desc}</p>
        </div>
    );
}
