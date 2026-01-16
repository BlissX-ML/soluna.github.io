import { useLocation, useNavigate } from "react-router-dom";

// useAppSelector 选择在切片中定义的变量（状态）
// useAppDispatch 分派函数（动作）以改变这些变量
import { useAppDispatch } from "../../store/reducer/hooks";
import {
    openSecondaryItems,
    setAsidebarActiveOpen,
    setCurItem,
    updateItemContent,
} from "../../store/reducer/dropdownSidebar.js";

import classes from "./DropMenuRedirectAsideMenuMemo.module.scss";

import DropdownMenuBtns from "../../components/buttons/DropdownMenuBtns.jsx";
import { MEMOS_TYPES } from "../../_data/memo-page/memo";

// displayStyle 用来控制下拉列表的隐藏与显示
export default function DropMenuRedirectAsideMenuMemo({ style }) {
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
        if (location.pathname !== "/memo") {
            // 避免上一个页面修改了侧边栏的状态，没有保持侧边栏常开
            dispatch(setAsidebarActiveOpen());
            navigate("/memo"); // 导航到选中页面
        }
    }

    return (
        <div className={`${classes["drop-menu-container"]} ${style}`}>
            <DropdownMenuBtns
                CATEGORY={MEMOS_TYPES}
                onItemClick={handleClick}
            />
        </div>
    );
}
