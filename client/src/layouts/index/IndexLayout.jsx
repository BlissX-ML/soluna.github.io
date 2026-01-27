import classes from './IndexLayout.module.scss';

import {
    INDEX_IMAGES,
    INTENDED_WORK_INTRODUCTION
} from '../../_data/index/indexPage.js';

import Table from '../../components/tables/Table.jsx';
import IndexPageRedirectBtn from '../../features/redirect-page-btns/IndexPageRedirectBtn.jsx';

const imageURL = INDEX_IMAGES[0].webp;

export default function IndexLayout() {
    return (
        <div
            className={classes.indexPage}
            style={{ backgroundImage: `url(${imageURL})` }}
        >
            <main className={classes.intro}>
                <h1>欢迎访问我的网站💕</h1>
                <table className={classes.table}>
                    <tbody>
                        {INTENDED_WORK_INTRODUCTION.map(el => (
                            <Table th={el.title} td={el.content} key={el.id} />
                        ))}
                    </tbody>
                </table>
                <p className={classes.para}>
                    <span>✨不骄不躁戒熬夜，破界跨界闯世界。</span>
                    <span>✨我不相信我无法完成，我知道只是时间的问题。</span>
                </p>

                <div className={classes.btns}>
                    <IndexPageRedirectBtn src="/home">
                        进入首页
                    </IndexPageRedirectBtn>
                    <IndexPageRedirectBtn src="/about">
                        联系邮箱
                    </IndexPageRedirectBtn>
                </div>
            </main>
        </div>
    );
}

// {/* <Table th='Degree' td='Master&apos;s degree' /> */ }
// {/* <Table th='Start date' td='Start date within this month' /> */ }
// {/* <Table th='Current Job Position' td='Front-end Engineer' /> */ }
// {/* <Table th='Current Employment Status' td='Out-of-work but seeking employment' /> */ }
