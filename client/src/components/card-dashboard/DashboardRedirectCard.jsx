import RedirectToRoute from '../icons/RedirectToRoute';
import classes from './DashboardRedirectCard.module.scss';

export default function DashboardRedirectCard({ resources, handleClick }) {
    return (
        <>
            <h2>{resources.title}</h2>
            <p className={classes.desc}>{resources?.desc}</p>

            <button className={classes.link} onClick={handleClick}>
                <RedirectToRoute color="var(--icon-color)" />
                <span>详情</span>
            </button>
        </>
    );
}
