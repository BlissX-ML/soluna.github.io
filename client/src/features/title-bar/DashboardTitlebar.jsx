import { useEffect } from 'react';
import classes from './DashboardTitlebar.module.scss';
import { useDateStates } from '../../store/zustand/dateZustand';
import Timer from '../../components/icons/Time';
import DashboardCountdownCard from '../../components/card/DashboardCountdownCard';
import { COUNTDOWN_ITEMS } from '../../_data/dashboard/countdown-items';

export default function DashboardTitlebar() {
    const {
        wholeDate,
        target,
        diffTime,
        setWholeDate,
        setLocaleDate,
        setBirthDate,
        setFinalYearDate
    } = useDateStates();

    useEffect(() => {
        const timer = setInterval(() => {
            setWholeDate();
            setLocaleDate();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className={classes['heading-container']} id="dashboard-heading">
            {/* 显示日期 */}
            <div className={classes.date}>
                <Timer />
                <span>{wholeDate}</span>
            </div>

            {/* 左侧的标题 */}
            <div className={classes.heading}>
                <h1>生活仪表盘</h1>
                <p>
                    集中展示个人计划进度与生活数据的综合仪表盘, 实时更新并维护
                </p>
            </div>

            {/* 倒计时日 */}
            <div className={classes['countdown']}>
                {/* ⭕ 性质相同,是可以 .map 创建的组件 */}
                {COUNTDOWN_ITEMS.map(el => {
                    const isBirth = el?.keyWord === 'birth';
                    const targetDate = isBirth
                        ? target.birthDate
                        : target.finalYearDate;
                    const countdown = isBirth
                        ? diffTime.countdownBirth
                        : diffTime.countdownFinalYear;
                    const hasCountdown =
                        Array.isArray(countdown) && countdown.length !== 0;
                    const handleInputChange = isBirth
                        ? setBirthDate
                        : setFinalYearDate;

                    return (
                        <DashboardCountdownCard
                            el={el}
                            targetDate={targetDate}
                            hasCountdown={hasCountdown}
                            countdown={countdown}
                            handleInputChange={handleInputChange}
                            key={el?.key}
                        />
                    );
                })}
            </div>
        </main>
    );
}
