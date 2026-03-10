import { Link } from 'react-router-dom';
import classes from './IndexPageRedirectBtn.module.scss';

export default function IndexPageRedirectBtn({ src, children }) {
    return (
        <Link to={src} className={classes['index-link']}>
            {children}
        </Link>
    );
}
