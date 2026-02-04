import classes from './MainNavigation.module.scss';

import { REPOSITORY_SIDEBAR } from '../../_data/repository/repository.js';

import NavRedirectRoute from '../../components/redirect/NavRedirectRoute.jsx';
import DropMenuRedirectAsideMenu from '../shared-dropdown-sidebar/DropMenuRedirectAside.jsx';

import { MEMOS_SIDEBAR } from '../../_data/memo/memo';

export default function MainNavigation() {
    return (
        <ul className={classes.ul}>
            <NavRedirectRoute
                path="/home"
                listStyle=""
                extraContentInList={null}
            >
                首页
            </NavRedirectRoute>

            <NavRedirectRoute
                path="/dashboard"
                listStyle=""
                extraContentInList={null}
            >
                生活面板
            </NavRedirectRoute>

            <NavRedirectRoute
                path="/memo"
                listStyle={classes['drop-navigation']}
                extraContentInList={
                    <DropMenuRedirectAsideMenu
                        style={classes['dropdown-visibility']}
                        catalogs={MEMOS_SIDEBAR}
                        startUrl="/memo"
                    />
                }
            >
                面试手册
            </NavRedirectRoute>

            <NavRedirectRoute
                path="/repository"
                listStyle={classes['drop-navigation']}
                extraContentInList={
                    <DropMenuRedirectAsideMenu
                        style={classes['dropdown-visibility']}
                        catalogs={REPOSITORY_SIDEBAR}
                        startUrl="/repository"
                    />
                }
            >
                知识库
            </NavRedirectRoute>

            <NavRedirectRoute
                path="footprint"
                listStyle=""
                extraContentInList={null}
            >
                我的旅程
            </NavRedirectRoute>

            <NavRedirectRoute
                path="resources"
                listStyle=""
                extraContentInList={null}
            >
                资源共享
            </NavRedirectRoute>

            <NavRedirectRoute
                path="about"
                listStyle=""
                extraContentInList={null}
            >
                自我介绍
            </NavRedirectRoute>
        </ul>
    );
}
