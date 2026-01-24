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

import classes from "./DropMenuRedirectAside.module.scss";

import DropdownMenuBtns from "../../components/buttons/DropdownMenuBtns.jsx";
import scrollToItem from "../../_utils/browser/scroll-into-view";

// displayStyle 用来控制下拉列表的隐藏与显示
export default function DropMenuRedirectAsideMenu({
    style,
    catalogs,
    startUrl,
}) {
    const navigate = useNavigate(); // 跳转页面
    const location = useLocation(); // 核查当前页面
    const dispatch = useAppDispatch();

    function handleReduxState(item) {
        dispatch(setCurItem(item)); // 修改为当前选中的 item
        dispatch(updateItemContent(item)); // 修改二级标题
        dispatch(openSecondaryItems()); // 联动 sidebar-nav, 控制 sidebar 的二级标题展开状态
    }

    function handleEachDropdownMenu(item) {
        // 传入 .key 作为参数
        handleReduxState(item?.key);

        // 如果没有以 /memo 开头，则开启侧边栏
        // if (!location.pathname.startsWith("/memo")) {
        //     dispatch(setAsidebarActiveOpen()); // 避免关闭了侧边栏，保持侧边栏常开
        // }

        dispatch(setAsidebarActiveOpen());

        // 导航到对应 item?.key 的页面
        navigate(`${startUrl}/${item?.key.toLowerCase()}`);

        // 导航到每一个路由对应的第一篇文章
        scrollToItem(item?.detail?.data?.[0]?.fileName);
    }

    return (
        <div className={`${classes["drop-menu-container"]} ${style}`}>
            <DropdownMenuBtns
                catalogs={catalogs}
                handleEachDropdownMenu={handleEachDropdownMenu}
            />
        </div>
    );
}
