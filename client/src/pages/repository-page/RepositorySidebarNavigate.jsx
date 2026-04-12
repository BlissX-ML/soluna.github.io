import { Outlet } from 'react-router-dom';
import classes from './RepositorySidebarNavigate.module.scss';

import { REPOSITORY_SIDEBAR } from '../../_data/repository/repository.js';
import SidebarNavigation from '../../features/shared-dropdown-sidebar/SidebarNavigation.jsx';

export default function RepositorySidebarNavigate() {
    return (
        <main id="main-content" className={classes.container}>
            <SidebarNavigation
                catalogs={REPOSITORY_SIDEBAR}
                startURL="/repository"
            />
            <Outlet />
        </main>
    );
}
