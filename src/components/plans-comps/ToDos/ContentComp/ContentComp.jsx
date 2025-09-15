import { COMPLETE_ITEMS } from '../../../../data/plans-page/done-awards/done-items.js'
import { TODO_ITEMS } from '../../../../data/plans-page/future-todos/future-items.js'
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