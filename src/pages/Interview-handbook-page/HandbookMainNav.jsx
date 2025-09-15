import { Outlet } from 'react-router-dom'
import classes from './HandbookMainNav.module.css'

import HandbookAsideContext from '../../store/context/HandbookAsideContext.jsx'
import HandbookNav from '../../components/Interview-handbook-comps/AsideNav/HandbookNav.jsx'


export default function HandbookMainNav() {
    return (
        <HandbookAsideContext>
            <section className={classes.container}>
                {/* 实际导航栏设置 */}
                <HandbookNav />
                <Outlet />
            </section>
        </HandbookAsideContext>

    )
}