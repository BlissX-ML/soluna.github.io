import { useAppDispatch, useAppSelector } from "../../store/reducer/hooks.js";
import { setCurItem } from "../../store/reducer/dropdownSidebar.js";
import classes from "./MainNavigation.module.scss";

import RedirectItemPage from "../../components/links/RedirectItemPage.jsx";
import DropMenuRedirectAsideMenu from "../shared-dropdown-sidebar/DropMenuRedirectAside.jsx";
import { MEMOS_TYPES } from "../../_data/memo-page/memo.js";
import { Repository_Navigate } from "../../_data/repository-page/repository.js";

export default function MainNavigation() {
    const dispatch = useAppDispatch();
    const { initialItem } = useAppSelector((state) => state.dropdownSidebar);

    return (
        <ul className={classes.ul}>
            <RedirectItemPage
                path="/home"
                listStyle=""
                extraContentInList={null}
            >
                首页
            </RedirectItemPage>

            <RedirectItemPage
                path="/plans"
                listStyle=""
                extraContentInList={null}
            >
                未来目标
            </RedirectItemPage>

            <RedirectItemPage
                path="/memo"
                listStyle={classes["drop-navigation"]}
                extraContentInList={
                    <DropMenuRedirectAsideMenu
                        style={classes["dropdown-visibility"]}
                        catalogs={MEMOS_TYPES}
                        startUrl="/memo"
                    />
                }
            >
                面试手册
            </RedirectItemPage>

            <RedirectItemPage
                path="/repository"
                listStyle={classes["drop-navigation"]}
                onClick={() => dispatch(setCurItem(initialItem))}
                extraContentInList={
                    <DropMenuRedirectAsideMenu
                        style={classes["dropdown-visibility"]}
                        catalogs={Repository_Navigate}
                        startUrl="/repository"
                    />
                }
            >
                知识库
            </RedirectItemPage>

            <RedirectItemPage
                path="footprint"
                listStyle=""
                extraContentInList={null}
            >
                我的旅程
            </RedirectItemPage>

            <RedirectItemPage
                path="resources"
                listStyle=""
                extraContentInList={null}
            >
                资源共享
            </RedirectItemPage>

            <RedirectItemPage
                path="about"
                listStyle=""
                extraContentInList={null}
            >
                自我介绍
            </RedirectItemPage>
        </ul>
    );
}
