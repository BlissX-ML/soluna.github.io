import { Outlet } from 'react-router-dom'
import classes from './HandbookMainNav.module.scss'

import HandbookAsideContext from '../../store/context/HandbookAsideContext.jsx'
import MainAside from '../../components/Interview-handbook-comps/main-aside/MainAside'

export default function HandbookMainNav() {
    return (
        <section className={classes.container}>
            {/* 实际导航栏设置 */}
            <MainAside />
            <Outlet />
        </section>
    )
}