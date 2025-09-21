import classes from './AsideNavigate.module.scss'
import Category from './Category'

// 1. active 检查当前侧边栏开不开的
// 2. toggle 控制当前侧边栏开关的
// 3. content 是完整的目录内容

export default function AsideNavigate({ active, control, categories }) {
    return (
        <aside
            className={`${classes.aside} ${active ? classes.open : classes.close}`}
        >
            {
                active &&
                <ul className={classes.category}>
                    <Category categories={categories} />
                </ul>
            }

            <button onClick={control}>
                {active
                    ?
                    <svg className="arrow" width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="black" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 4, 8 12, 16 20" />
                    </svg>
                    :
                    <svg className="arrow" width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="black" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="8 4, 16 12, 8 20" />
                    </svg>}
            </button>
        </aside>
    )
}