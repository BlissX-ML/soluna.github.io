import Content from './Content.jsx'
import classes from './ContentComp.module.scss'

import { COMPLETE_ITEMS } from '../../../../_data/plans-page/done-awards/done-items.js'
import { TODO_ITEMS } from '../../../../_data/plans-page/future-todos/future-items.js'


export default function ContentComp({ state }) {
    return (
        <div className={classes.content}>
            {
                state === 'future' ?
                    <Content
                        items={TODO_ITEMS}
                        slot='future'
                        style={`${classes.future}`}
                    /> :
                    <Content
                        items={COMPLETE_ITEMS}
                        slot='done'
                        style={`${classes.complete}`}
                    />
            }
        </div>
    )
}