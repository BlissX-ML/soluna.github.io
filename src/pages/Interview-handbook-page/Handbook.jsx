import { useContext } from 'react';
import { HTML_HANDBOOK } from '../../data/articles/interview-handbook/front-end/basis/html.js'

import classes from './Handbook.module.css'
// import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/themes/prism-tomorrow.css'

import { HandbookContext } from '../../store/context/HandbookAsideContext.jsx';


export default function Handbook() {
    const ctx = useContext(HandbookContext)

    const Content = HTML_HANDBOOK[0].content;

    return (
        <main className={`${classes.container} ${ctx.active ? '' : classes.close}`}>
            <h2>{HTML_HANDBOOK[0].titleCh}</h2>
            <Content />
        </main>
    )
}