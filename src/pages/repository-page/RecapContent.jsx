import { useParams } from 'react-router-dom';

import classes from './RecapContent.module.scss'

import { useAppSelector } from '../../store/reducer/hooks.js';

export default function RecapContent() {
    const { isOpen } = useAppSelector(state => state?.asideToggle)
    const { recapId } = useParams();

    return (
        <main className={`${classes.content} ${isOpen ? '' : classes.close}`}>

            <p>这里是 {recapId} 的正文</p>

        </main>
    )
}