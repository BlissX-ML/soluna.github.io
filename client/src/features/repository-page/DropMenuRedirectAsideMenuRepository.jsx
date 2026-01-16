import { useLocation, useNavigate } from "react-router-dom";

// useAppSelector 选择在切片中定义的变量（状态）
// useAppDispatch 分派函数（动作）以改变这些变量
import { useAppDispatch } from "../../store/reducer/hooks";
import {
    openSecondaryItems,
    setCurItem,
    updateItemContent,
} from "../../store/reducer/dropdownSidebar.js";

import classes from "./DropMenuRedirectAsideMenuRepository.module.scss";

import { Repository_Navigate } from "../../_data/repository-page/repository.js";
import DropdownMenuBtns from "../../components/buttons/DropdownMenuBtns.jsx";

// displayStyle 用来控制下拉列表的隐藏与显示
export default function DropMenuRedirectAsideMenuRepository({ style }) {
    const navigate = useNavigate(); // 跳转页面
    const location = useLocation(); // 核查当前页面

    const dispatch = useAppDispatch();

    function handleReduxState(item) {
        dispatch(setCurItem(item)); // 修改为当前选中的 item
        dispatch(updateItemContent(item)); // 修改二级标题
        dispatch(openSecondaryItems()); // 联动 sidebar-nav, 控制 sidebar 的二级标题展开状态
    }

    function handleClick(item) {
        handleReduxState(item);
        if (location.pathname !== "/repository") navigate("/repository"); // 导航到选中页面
    }

    return (
        <div className={`${classes["drop-menu-container"]} ${style}`}>
            <DropdownMenuBtns
                CATEGORY={Repository_Navigate}
                onItemClick={handleClick}
            />
        </div>
    );
}
