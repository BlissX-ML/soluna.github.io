import { useNavigate } from 'react-router-dom';
import classes from './DropMenuRedirectAside.module.scss';
// useAppSelector 选择在切片中定义的变量（状态）
// useAppDispatch 分派函数（动作）以改变这些变量
import { useAppDispatch } from '../../store/reducer/hooks';
import {
    openSecondaryItems,
    setSidebarActiveOpen,
    setCurItem,
    initialSecondaryContent
    // setFirstContent
    // updateItemContent,
} from '../../store/reducer/dropdownSidebar.js';

import scrollToItem from '../../_utils/browser/scroll-into-view.js';
import DropdownMenuBtns from '../../components/buttons/DropdownMenuBtns.jsx';
import { MEMOS_ROUTE } from '../../_data/memo/memo';

export default function DropMenuRedirectAsideMenu({
    style,
    catalogs,
    startUrl
}) {
    const navigate = useNavigate(); // 跳转页面
    const dispatch = useAppDispatch();

    function handleReduxState(item) {
        dispatch(setCurItem(item)); // 修改为当前选中的 item
        // dispatch(updateItemContent(item)); // 修改二级标题
        dispatch(openSecondaryItems()); // 联动 sidebar-nav, 控制 sidebar 的二级标题展开状态
    }

    function handleEachDropdownMenu(item) {
        // 传入 .key 作为参数
        handleReduxState(item?.key);

        // 保持侧边栏常开
        dispatch(setSidebarActiveOpen());

        // 导航到对应 item?.key 的页面
        navigate(`${startUrl}/${item?.key.toLowerCase()}`);

        // 删除 repository 的内容状态
        dispatch(initialSecondaryContent());

        // 导航到每一个路由对应的第一篇文章
        scrollToItem(item?.detail?.data?.[0]?.fileName);
    }

    return (
        <div className={`${classes['drop-menu-container']} ${style}`}>
            <DropdownMenuBtns
                catalogs={catalogs}
                handleEachDropdownMenu={handleEachDropdownMenu}
            />
        </div>
    );
}
