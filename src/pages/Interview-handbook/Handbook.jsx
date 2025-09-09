import { FRONT_END_HANDBOOK } from '../../data/articles_/interview-handbook/front-end/front-end'
import classes from './Handbook.module.css'
// import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/themes/prism-tomorrow.css'


export default function Handbook() {
    const Content = FRONT_END_HANDBOOK[0].content;

    return (
        <main className={classes.container}>
            <h2>{FRONT_END_HANDBOOK[0].titleCh}</h2>
            <div>
                <Content />
            </div>

        </main>
    )
}