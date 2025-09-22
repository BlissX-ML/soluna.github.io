import classes from './ContentPlaceholder.module.scss'

export default function ContentPlaceholder() {
    return (
        <div className={classes.intro}>
            <h3>此处显示详细信息</h3>
            <p>请点击左侧选项查看：</p>
            <ul>
                <li><b>未来计划</b>：展示学习路径与规划方案</li>
                <li><b>已完成计划</b>：展示证书、勋章等成果</li>
            </ul>
        </div>
    )
}