import { useRef } from 'react';
import classes from './HomeLayout.module.scss';

import CanvasLines from './CanvasLines.jsx';
import HomePageRedirectBtn from '../../features/redirect-page-btns/HomePageRedirectBtn.jsx';

const redirctHomePageBtns = [
    {
        id: 'schedule-viewing-lookup-btn',
        title: '计划表查阅',
        url: '/dashboard'
    },
    {
        id: 'interview-handbook-reference-btn',
        title: '面试手册查阅',
        url: '/memo'
    },
    {
        id: 'knowledge-base-lookup-btn',
        title: '知识库查阅',
        url: '/repository'
    },
    {
        id: 'travel-footprints-lookup-btn',
        title: '旅行足迹查阅',
        url: '/footprint'
    }
];

export default function HomeLayout() {
    const container = useRef(null);

    return (
        <div className={classes.welcome} ref={container}>
            <CanvasLines containerRef={container} />

            <div className={classes.recommend}>
                <h2>Hi, 我是 BlissXML 👋</h2>

                <p>
                    <span>
                        在这里，你会看到我的前端学习过程、个人项目和生活点滴。
                    </span>
                    <span>学习与热爱，都在这里留下痕迹。</span>
                </p>

                <div className={classes.btns}>
                    {redirctHomePageBtns.map(el => (
                        <HomePageRedirectBtn src={el.url} key={el.id}>
                            {el.title}
                        </HomePageRedirectBtn>
                    ))}
                </div>
            </div>
        </div>
    );
}
