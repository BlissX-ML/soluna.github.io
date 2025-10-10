import { useLocation, useNavigate } from 'react-router-dom';


import classes from './drop-items.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/reducer/hooks';
import { setCurItem, toggle, updateItemContent } from '../../store/reducer/repository';
import { resetOpen } from '../../store/reducer/aside-toggle';
import DropButtons from '../../components/buttons/drop-buttons';
import { Repository_Navigate } from '../../_data/repository-page/repository';



export default function DropItems() {
    const dispatch = useAppDispatch();
    const { active } = useAppSelector((state) => state.repository);

    const navigate = useNavigate();
    const location = useLocation();

    function handleClick(key) {
        dispatch(setCurItem(key));           // 修改当前选中的 item 
        dispatch(updateItemContent(key));    // 修改当前大类下的，对应小类的内容展示

        dispatch(resetOpen());               // 重置左侧的导航栏状态（联动左侧导航栏）

        if (location.pathname !== '/repository') navigate('/repository');

        dispatch(toggle())
    }

    return (
        <div
            className={`${classes.content} ${active ? classes.active : ''}`}
        >
            <DropButtons
                CATEGORY={Repository_Navigate}
                itemClick={handleClick}
            />
        </div >
    )
}