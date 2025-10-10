import classes from './main-navigation.module.scss';

import { useDispatch } from 'react-redux';
import { close, open } from '../../store/reducer/repository';
import DropItems from '../repository-page/drop-items';
import NavItems from './nav-items';

export default function MainNavigation() {
    const dispatch = useDispatch();

    return (
        <ul className={classes.ul}>
            <li>
                <NavItems path='/home'>首页</NavItems>
            </li>

            <li>
                <NavItems path='/plans'>未来目标</NavItems>
            </li>

            <li className={classes['drop-navigation']}>
                <NavItems path='/memo'>面试手册</NavItems>
            </li>

            <li
                className={classes['drop-navigation']}
                onMouseEnter={() => dispatch(open())}
                onMouseLeave={() => dispatch(close())}
            >
                <NavItems path='/repository'>知识库</NavItems>
                <DropItems />
            </li>

            <li>
                <NavItems path='footprint'>我的旅程</NavItems>
            </li>

            <li>
                <NavItems path='resources'>资源共享</NavItems>
            </li>

            <li>
                <NavItems path='about'>自我介绍</NavItems>
            </li>
        </ul>
    )
}