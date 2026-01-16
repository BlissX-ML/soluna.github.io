import { useAppDispatch, useAppSelector } from "../../store/reducer/hooks.js";
import { setCurItem } from "../../store/reducer/dropdownSidebar.js";
import classes from "./main-navigation.module.scss";

import RedirectItemPage from "../../components/links/redirect-page.jsx";
import DropMenuRedirectAsideMenuRepository from "../repository-page/DropMenuRedirectAsideMenuRepository.jsx";
import DropMenuRedirectAsideMenuMemo from "../memo-page/DropMenuRedirectAsideMenuMemo.jsx";

export default function MainNavigation() {
    const dispatch = useAppDispatch();
    const { initialItem } = useAppSelector((state) => state.repository);

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
                    <DropMenuRedirectAsideMenuMemo
                        style={classes["dropdown-visibility"]}
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
                    <DropMenuRedirectAsideMenuRepository
                        style={classes["dropdown-visibility"]}
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
