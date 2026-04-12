import classes from './Resources.module.scss';

import ResourcesPage from '../../layouts/resources-page/ResourcesPage';
export default function Resources() {
    return (
        <main id="main-content" className={classes['page-container']}>
            <ResourcesPage />
        </main>
    );
}
