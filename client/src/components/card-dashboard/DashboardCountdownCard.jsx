import classes from './DashboardCountdownCard.module.scss';

export default function DashboardCountdownCard({
    el,
    targetDate,
    hasCountdown,
    countdown,
    handleInputChange
}) {
    return (
        <div className={classes.deadlineCard} key={el?.key}>
            {/* 标题 */}
            <div className={classes.title}>
                <span>{el?.desc?.before}</span>
                <span className={classes.year}>
                    {new Date(targetDate).getFullYear()}
                </span>
                <span>{el?.desc?.after}</span>
            </div>

            {/* 倒计时 */}
            <div className={classes.wholeCountdown}>
                {hasCountdown ? (
                    <>
                        <p>
                            <span>{countdown[1]?.days}</span>
                            <span>天</span>
                        </p>
                        <p>
                            <span>{countdown[1]?.hours}</span>
                            <span>时</span>
                        </p>
                        <p>
                            <span>{countdown[1]?.minutes}</span>
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

            {/* 输入 */}
            <div className={classes.dateInput}>
                <input type="dateTime-local" onChange={handleInputChange} />
                {hasCountdown ? (
                    <p>
                        <span>目标日:</span>
                        <span>{targetDate.split('T')[0]}</span>
                    </p>
                ) : (
                    <p>请选择日期</p>
                )}
            </div>
        </div>
    );
}
