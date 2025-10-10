import classes from './index-layout.module.scss'

import { INDEX_IMAGES } from '../../_data/index-page/indexPage.js'
import Select from '../../features/index-page/Select.jsx';
import Table from '../../features/index-page/Table.jsx'

const imageURL = INDEX_IMAGES[0].webp;

export default function IndexLayout() {
    return (
        <div className={classes.indexPage} style={{ backgroundImage: `url(${imageURL})`, }}>
            <main className={classes.intro}>
                <h1>欢迎访问我的网站💕</h1>
                <table className={classes.table}>
                    <tbody>
                        <Table th='学位' td='硕士学位' />
                        <Table th='到岗时间' td='月内到岗' />
                        <Table th='当前求职岗位' td='前端工程师' />
                        <Table th='当前就业状态' td='离职待就业' />
                    </tbody>
                </table>
                <p className={classes.para}>
                    <span>✨不骄不躁戒熬夜，破界跨界闯世界。</span>
                    <span>✨我不相信我无法完成，我知道只是时间的问题。</span>
                </p>

                <div className={classes.btns}>
                    <Select src='/home'>进入首页</Select>
                    <Select src='/about'>联系邮箱</Select>
                </div>
            </main>
        </div>
    )
}


// {/* <Table th='Degree' td='Master&apos;s degree' /> */ }
// {/* <Table th='Start date' td='Start date within this month' /> */ }
// {/* <Table th='Current Job Position' td='Front-end Engineer' /> */ }
// {/* <Table th='Current Employment Status' td='Out-of-work but seeking employment' /> */ }