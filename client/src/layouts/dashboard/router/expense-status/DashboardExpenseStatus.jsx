import { useEffect, useState } from 'react';
import PieExpenseChart from '../../../../components/charts/pie/PieExpenseChart';
import classes from './DashboardExpenseStatus.module.scss';
import fetchExpenseCsv from '../../../../_utils/browser/fetch-content/fetch-expends';
import { changeExpenseData } from '../../../../_utils/browser/data-transformer/modify-expense-data';

const url =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJNhppmQv3qIXUxg5m4OEVHPf2O_ubdw9H4pB1Gdw_7azEqiz6LMrq651CFA-nScB1Z7jGUL1gT8OQ/pub?output=csv';

export default function DashboardExpenseStatus() {
    // 存储费用数据的状态
    const [expenseData, setExpenseData] = useState(null);

    // 获取数据的副作用
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchExpenseCsv(url);
            if (!data) return;

            const renderData = changeExpenseData(data);
            console.log(renderData);
            setExpenseData(renderData);
        };

        fetchData(); // 首次加载

        const timer = setInterval(fetchData, 60000 * 60); // 每 1 小时刷新一次

        return () => clearInterval(timer); // 清理定时器
    }, []);

    return (
        <main className={classes.container}>
            {expenseData &&
                expenseData.map((data, ind) => (
                    <PieExpenseChart
                        className={classes.chart}
                        key={`花销饼图-${ind}`}
                        curMonthData={data}
                    />
                ))}
        </main>
    );
}
