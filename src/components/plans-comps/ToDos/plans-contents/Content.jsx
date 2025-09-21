import classes from './Content.module.css'

import { handleActiveItem, handleAwards, } from "../../../../store/reducer/plans.js";
import { useAppDispatch, useAppSelector } from '../../../../store/reducer/hooks.js';


export default function Content({ items, slot, style }) {
    // 选择 plans 分片内的，基于 slot(future / done) 的数据
    const dispatch = useAppDispatch();
    const { activeItem } = useAppSelector(state => state?.plans[slot]);

    const curKey = activeItem?.key ?? '';

    const handleClick = (key) => dispatch(handleActiveItem({ slot, key }))
    const handleAward = (item) => dispatch(handleAwards(item.srcs))

    return (
        <div>
            <ul className={classes.ul}>
                {items.map(item => (
                    <li
                        key={item.key}
                        onClick={() => {
                            handleClick(item.key);
                            handleAward(item);
                        }}
                        className={`${style} ${curKey === item.key ? classes.active : ''}`}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div >
    )
}