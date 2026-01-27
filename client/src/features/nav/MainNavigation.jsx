import classes from './MainNavigation.module.scss';
import { setCurItem } from '../../store/reducer/dropdownSidebar.js';
import { useAppDispatch, useAppSelector } from '../../store/reducer/hooks.js';

import { Repository_Navigate } from '../../_data/repository-page/repository.js';

import NavRedirectRoute from '../../components/redirect/NavRedirectRoute.jsx';
import DropMenuRedirectAsideMenu from '../shared-dropdown-sidebar/DropMenuRedirectAside.jsx';

import { MEMOS_SIDEBAR } from '../../_data/memo/memo';

export default function MainNavigation() {
    const dispatch = useAppDispatch();
    const { initialItem } = useAppSelector(state => state.dropdownSidebar);

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
                onClick={() => dispatch(setCurItem(initialItem))}
                extraContentInList={
                    <DropMenuRedirectAsideMenu
                        style={classes['dropdown-visibility']}
                        catalogs={Repository_Navigate}
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
