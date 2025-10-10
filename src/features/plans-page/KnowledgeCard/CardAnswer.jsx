import classes from './KnowledgeCard.module.css'

export default function CardAnswer() {
    return (
        <div className={classes.ans}>
            <p>1. CSS: `display` 属性</p>
            <p>2. CSS: `visibility` 属性</p>
            <p>3. CSS: `opacity` 属性 + `pointer-events: none`</p>
            <p>4. position 移出视口</p>
            <p>5. clip-path 裁剪</p>
            <p>……</p>
        </div>
    )
}