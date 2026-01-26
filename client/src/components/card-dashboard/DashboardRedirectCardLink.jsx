import ArrowRedirect from '../icons/ArrowRedirect';
import classes from './DashboardRedirectCardLink.module.scss';

export default function DashboardRedirectCardLink({ handleClick }) {
    return (
        <button className={classes.link} onClick={handleClick}>
            <span>跳转页面</span>
            <ArrowRedirect />
        </button>
    );
}
