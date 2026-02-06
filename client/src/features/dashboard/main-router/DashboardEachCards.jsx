import { useNavigate } from 'react-router-dom';
import classes from './DashboardEachCards.module.scss';

import DashboardRedirectCard from '../../../components/card/DashboardRedirectCard';
import { useDispatch } from 'react-redux';
import {
    setCurSecNavInd,
    setCurSecNavItem
} from '../../../store/reducer/dashboardNestedNavigate';

export default function DashboardEachCards({ resources }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleClick(key, ind) {
        navigate(key); // 跳转页面
        dispatch(setCurSecNavItem(key)); // 更新二级导航栏
        dispatch(setCurSecNavInd(ind)); // 更新二级导航栏的索引
    }

    return (
        <>
            {resources.map((el, ind) => (
                <main key={el?.key} className={classes.singleContent}>
                    <DashboardRedirectCard
                        resources={el}
                        handleClick={() => handleClick(el?.key, ind)}
                    />
                </main>
            ))}
        </>
    );
}
