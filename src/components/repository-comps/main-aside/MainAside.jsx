import { useEffect } from 'react';
import { resetOpen, toggleAside } from '../../../store/reducer/aside-toggle.js';
import { useAppDispatch, useAppSelector } from '../../../store/reducer/hooks.js';

import AsideNavigate from '../../aside-fixed-navigation/AsideNavigate.jsx'

// import classes from './MainAside.module.css'

import { Repository_Navigate } from '../../../data/repository-page/repository.js';

export default function MainAside() {
    const dispatch = useAppDispatch();
    const { isOpen } = useAppSelector(state => state?.asideToggle);   // 控制侧边栏的开关状态

    useEffect(() => { dispatch(resetOpen()) }, [])

    return (
        <AsideNavigate
            active={isOpen}
            control={() => dispatch(toggleAside())}
            categories={Repository_Navigate}
        />
    )
}