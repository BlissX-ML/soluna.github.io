import classes from './Homepage.module.scss';
import HomeLayout from '../../layouts/home/HomeLayout';

export default function Homepage() {
    return (
        <main id="main-content" className={classes.homepage}>
            <HomeLayout />
        </main>
    );
}
