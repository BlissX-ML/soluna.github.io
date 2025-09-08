import { Outlet } from 'react-router-dom'

import HandbookNav from '../../components/Interview-handbook/AsideNav/HandbookNav.jsx'
import classes from './HandbookMainNav.module.css'

export default function HandbookMainNav() {
    return (
        <section className={classes.container}>
            {/* 实际导航栏设置 */}
            <HandbookNav />

            <Outlet />
        </section>
    )
}