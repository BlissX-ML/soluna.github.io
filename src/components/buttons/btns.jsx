import classes from './btns.module.scss'


// 1. ui是调用该组件时的自定义 UI 设计
// 2. handleClick 是控制按钮点击操作的
// 3. ...props 是控制按钮的其他动态操作的，比如 hover 等等 ⭕

export default function Btns({ ui, handleClick, children, ...props }) {
    return (
        <button
            className={`${classes.default} ${ui}`}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    )
}