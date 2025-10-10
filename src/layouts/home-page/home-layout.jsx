import { useRef } from 'react';
import classes from './home-layout.module.scss'

import CanvasLines from './CanvasLines.jsx';
import Select from '../../features/home-page/Select.jsx';

export default function HomeLayout() {
    const container = useRef(null);

    return (
        <div className={classes.welcome} ref={container}>
            <CanvasLines containerRef={container} />

            <div className={classes.recommend}>
                <h2>Hi, 我是 BlissXML 👋</h2>

                <p>
                    <span>在这里，你会看到我的前端学习过程、个人项目和生活点滴。</span>
                    <span>学习与热爱，都在这里留下痕迹。</span>
                </p>

                <div className={classes.btns}>
                    <Select src='/plans'>
                        计划表查阅
                    </Select>

                    <Select src='/memo'>
                        面试手册查阅
                    </Select>

                    <Select src='/repository'>
                        知识库查阅
                    </Select>

                    <Select src='/footprint'>
                        足迹查阅
                    </Select>
                </div>
            </div>
        </div>
    )
}