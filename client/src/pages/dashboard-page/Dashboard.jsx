import { useEffect, useMemo, useRef, useState } from 'react';
import { getCurDate } from '../../_utils/browser/date/getCurDate';
import classes from './Dashboard.module.scss';
import Timer from '../../components/icons/Time';
import { diff } from '../../_utils/browser/date/diffDate';

export default function Dashboard() {
    const initialDate = getCurDate(new Date());
    const [date, setDate] = useState(initialDate);
    const [localeDate, setLocaleDate] = useState(new Date());

    const birthRef = useRef(null);
    const finalYearRef = useRef(null);

    const [birthDate, setBirthDate] = useState('');
    const [finalYearDate, setFinalYearDate] = useState('');

    const [countdownBirth, setCountdownBirth] = useState([]); // 不能保存 Object
    const [countdownFinalYear, setCountdownFinalYear] = useState([]);

    // 更新当前时间
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(getCurDate(new Date()));
            setLocaleDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // 计算生日倒计时
    useEffect(() => {
        if (!birthDate) return;
        const res = diff(localeDate, new Date(birthDate));
        setCountdownBirth(res);
    }, [birthDate, localeDate]);

    // 计算年末倒计时
    useEffect(() => {
        if (!finalYearDate) return;

        const res = diff(localeDate, new Date(finalYearDate));
        setCountdownFinalYear(res);
    }, [finalYearDate, localeDate]);

    return (
        <section id="main-content" className={classes['dashboard-container']}>
            <main
                className={classes['heading-container']}
                id="dashboard-heading"
            >
                {/* 显示日期 */}
                <div className={classes.date}>
                    <Timer />
                    <span>{date}</span>
                </div>

                {/* 左侧的标题 */}
                <div className={classes['heading']}>
                    <h1>生活仪表盘</h1>
                    <p>集中展示个人计划进度与生活数据的综合仪表盘。</p>
                </div>

                {/* 倒计时日 */}
                <div className={classes['countdown']}>
                    {/* 性质相同,是可以 .map 创建的组件 */}
                    <div className={classes.deadlineCard}>
                        {/* 倒计时的标题 */}
                        <div className={classes.title}>
                            <span>距离</span>
                            <span className={classes.year}>
                                {new Date(birthDate).getFullYear() ||
                                    localeDate.getFullYear()}
                            </span>
                            <span>年的生日</span>
                        </div>

                        {/* 包含日-时-分的倒计时 */}
                        <div className={classes.wholeCountdown}>
                            {Array.isArray(countdownBirth) &&
                            countdownBirth.length !== 0 ? (
                                <>
                                    <p>
                                        <span>{countdownBirth[1]?.days}</span>
                                        <span>天</span>
                                    </p>
                                    <p>
                                        <span>{countdownBirth[1]?.hours}</span>
                                        <span>时</span>
                                    </p>
                                    <p>
                                        <span>
                                            {countdownBirth[1]?.minutes}
                                        </span>
                                        <span>分</span>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p>
                                        <span>0</span>
                                        <span>天</span>
                                    </p>
                                    <p>
                                        <span>0</span>
                                        <span>时</span>
                                    </p>
                                    <p>
                                        <span>0</span>
                                        <span>分</span>
                                    </p>
                                </>
                            )}
                        </div>

                        {/* 日期选择 + 日倒计时 */}
                        <div className={classes.dateInput}>
                            <input
                                type="dateTime-local"
                                ref={birthRef}
                                onChange={e => setBirthDate(e.target.value)}
                            />

                            {Array.isArray(countdownBirth) &&
                            countdownBirth.length !== 0 ? (
                                <p>
                                    <span>目标日:</span>
                                    <span>{birthDate.split('T')[0]}</span>
                                </p>
                            ) : (
                                <p>请选择日期</p>
                            )}
                        </div>
                    </div>

                    <div className={classes.deadlineCard}>
                        <div>
                            <span>
                                {new Date(birthDate).getFullYear() ||
                                    localeDate.getFullYear()}
                            </span>
                            年剩余天数
                        </div>

                        {/* 包含日-时-分的倒计时 */}
                        <div>
                            {Array.isArray(countdownFinalYear) &&
                            countdownFinalYear.length !== 0 ? (
                                <>
                                    <p>
                                        <span>
                                            {countdownFinalYear[1]?.days}
                                        </span>
                                        <span>天</span>
                                    </p>
                                    <p>
                                        <span>
                                            {countdownFinalYear[1]?.hours}
                                        </span>
                                        <span>时</span>
                                    </p>
                                    <p>
                                        <span>
                                            {countdownFinalYear[1]?.minutes}
                                        </span>
                                        <span>分</span>
                                    </p>
                                </>
                            ) : (
                                <p>请选择日期</p>
                            )}
                        </div>

                        {/* 日期选择 + 日倒计时 */}
                        <div>
                            <input
                                type="dateTime-local"
                                ref={finalYearRef}
                                onChange={e => setFinalYearDate(e.target.value)}
                            />
                            <span>{countdownFinalYear[0]?.days || ''}</span>
                        </div>
                    </div>
                </div>
            </main>

            <main className={classes['content-container']}></main>
        </section>
    );
}
