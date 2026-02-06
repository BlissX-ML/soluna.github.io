import { useState } from 'react';
import classes from './PlanListContent.module.scss';

export default function PlanListContent({ data }) {
    const [completeItems, setCompleteItems] = useState(new Set());

    const handlePlanClick = item => {
        setCompleteItems(prev => {
            const newSet = new Set(prev);
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
                {data?.details.map(el => (
                    <li
                        key={el?.key}
                        className={`${completeItems.has(el?.key) || el?.completionTime ? classes.listActive : ''}`}
                    >
                        <button onClick={() => handlePlanClick(el)}>
                            {el?.title}
                        </button>
                        {el?.completionTime && (
                            <span>{el?.completionTime}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
