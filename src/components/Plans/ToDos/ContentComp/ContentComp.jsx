import { COMPLETE_ITEMS } from '../../../../data/articles_/todos/completeItems.js'
import { TODO_ITEMS } from '../../../../data/articles_/todos/futureItems.js'
import Content from './Content.jsx'

import classes from './ContentComp.module.css'

export default function ContentComp({ state }) {
    return (
        <div className={classes.content}>
            {
                state === 'future' ?
                    <Content items={TODO_ITEMS} slot='future' complete={`${classes.future}`} /> :
                    <Content items={COMPLETE_ITEMS} slot='done' complete={`${classes.complete}`} />
            }
        </div>
    )
}