import { useState } from 'react';
import classes from './PlanListContent.module.scss';

export default function PlanListContent({ eachDdata }) {
    const [completeItems, setCompleteItems] = useState(new Set());

    const handlePlanClick = item => {
        setCompleteItems(prev => {
            const newSet = new Set(prev);
            console.log(item);
            if (newSet.has(item?.key)) {
                newSet.delete(item?.key); // 取消选中
            } else {
                newSet.add(item?.key); // 添加选中
            }
            return newSet;
        });
    };

    return (
        <div className={classes.lists}>
            <ul className={classes.text}>
                {eachDdata?.details.map(el => (
                    <li
                        key={el?.key}
                        className={`${
                            completeItems.has(el?.key) ||
                            el?.completionTime ||
                            el?.percent === 100
                                ? classes.listActive
                                : ''
                        }`}
                    >
                        {/* 每一个具体计划的列表的选中状态控制 */}
                        {/* title 对应 personal-plan，heading 对应 learn-grow 的遍历 */}
                        <button onClick={() => handlePlanClick(el)}>
                            {el?.title || el?.heading}
                        </button>

                        {/* 用于存放具体的计划内容,对应两个界面的选中属性 */}
                        <span>{el?.completionTime || el?.platform}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
