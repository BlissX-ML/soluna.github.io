// @ts-nocheck

// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { close, open } from "../../store/reducer/repository.js";

import classes from './Navigation.module.css';

import NavigationItems from "./NavigationItems.jsx";
import CategoryDropContent from "../repository-comps/Category-Navigation/CategoryDropContent.jsx";
import { ICONS } from "../../data/icons/icons.js";


const Logo = ICONS.logo;

export default function Navigation() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <header className='header'>
            <nav className={classes.nav}>
                <Logo className={classes.logo} />

                <ul className={classes.ul}>
                    <li>
                        <NavigationItems path='/home'>首页</NavigationItems>
                    </li>

                    <li>
                        <NavigationItems path='/plans'>未来目标</NavigationItems>
                    </li>

                    <li className={classes['drop-navigation']}>
                        <NavigationItems path='/interview-handbook'>面试手册</NavigationItems>
                    </li>

                    <li
                        className={classes['drop-navigation']}
                        onMouseEnter={() => dispatch(open())}
                        onMouseLeave={() => dispatch(close())}
                    >
                        <NavigationItems path='/repository'>知识库</NavigationItems>
                        <CategoryDropContent />
                    </li>

                    <li>
                        <NavigationItems path='footprint'>我的旅程</NavigationItems>
                    </li>

                    {/* <li>
                        <NavigationItems path='projects'>项目</NavigationItems>
                    </li> */}

                    <li>
                        <NavigationItems path='resources'>资源共享</NavigationItems>
                    </li>

                    <li>
                        <NavigationItems path='about'>自我介绍</NavigationItems>
                    </li>
                </ul>

                <div className={classes.goBack}>
                    <button onClick={() => navigate('/')}>返回介绍页</button>
                </div>
            </nav>
        </header >
    )
}