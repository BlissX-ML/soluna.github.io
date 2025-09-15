import { useContext } from "react"
import { TodosContext } from "../../../../store/context/TodosManagaeContext.jsx"
import classes from './Content.module.css'


export default function Content({ items, slot, complete }) {
    const ctx = useContext(TodosContext)
    const section = slot === 'future' ? ctx.future : ctx.done;

    const activeKey = ctx.activeItem?.key ?? '';

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li
                        key={item.key}
                        onClick={() => section.click(item)}
                        className={`${classes.li} ${complete} ${activeKey === item.key ? classes.active : ''}`}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}