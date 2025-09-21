import { useContext } from 'react';
import { HTML_HANDBOOK } from '../../data/articles/interview-handbook/front-end/basis/html.js'

import classes from './Handbook.module.scss'
import 'prismjs/themes/prism-tomorrow.css'

import { HandbookContext } from '../../store/context/HandbookAsideContext.jsx';
import { useAppSelector } from '../../store/reducer/hooks.js';


export default function Handbook() {
    const { isOpen } = useAppSelector(state => state?.asideToggle)

    const Content = HTML_HANDBOOK[0].content;

    return (
        <main className={`${classes.container} ${isOpen ? '' : classes.close}`}>
            <h2>{HTML_HANDBOOK[0].titleCh}</h2>

            <Content />
        </main>
    )
}