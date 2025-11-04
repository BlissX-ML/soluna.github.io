import { useEffect, useRef, useState } from 'react';
import PlanPage from '../../layouts/plans-page/plan-page.jsx';
import classes from './plan-page.module.scss';
import { formatToday, startDateWatcher } from '../../_data/plans-page/lib/plan-page.js';
import AddNewTodos from './add-todos.jsx';

export default function Plan() {
    const [displayLabels, setDisplayLabels] = useState(false);  // 【显示标签】的按钮
    const [justDisplayTodos, setJustDisplayTodos] = useState(false);  // 【显示已完成】的按钮

    const [addNewTodos, setAddNewTodos] = useState(false);

    // 获取当日日期并实时监测是否到下一天
    const [today, setToday] = useState(formatToday());

    //控制标签的显示与否
    function handleLabelChange() { setDisplayLabels(prev => !prev) }

    // 控制是否要关闭已完成的todos
    function handleJustDisplayTodos() { setJustDisplayTodos(prev => !prev) }

    function handleAddNewTodos() { setAddNewTodos(true) }

    useEffect(() => {
        const stop = startDateWatcher(setToday);
        return stop; // 组件卸载时清理
    }, []);

    return (
        <section id='main-content' className={classes['plan-page']}>
            {/* <PlanPage /> */}

            {/* 当日计划部分 */}
            <main className={classes['current-todos']}>
                <div className={classes['todos']}>
                    <div className={classes['date-check']}>
                        <p className={classes['year-month-day']}>
                            {today}
                        </p>

                        <div className={classes['checkbox-select']}>
                            <p>
                                <input type='checkbox' id="labels" name="labels" onChange={handleLabelChange} />
                                <label htmlFor='labels'>显示标签</label>
                            </p>

                            <p>
                                <input type='checkbox' id="todos" name="todos" onChange={handleJustDisplayTodos} />
                                <label htmlFor='todos'>仅显示未完成</label>
                            </p>
                        </div>
                    </div>

                    <div className={classes['plans-todos']}>
                        <p className={`${classes['plan']} ${justDisplayTodos ? classes['just-mode'] : ''}`}>
                            <input type='checkbox' id="words" name="words" />
                            <label htmlFor='words'>墨墨背单词</label>
                        </p>

                        {/* 选择显示标签的时候才会显示 */}
                        {
                            displayLabels &&
                            <p className={classes['tags']}>
                                <span>语言</span>
                                <span>英语</span>
                            </p>
                        }
                    </div>

                    <button className={classes['add-todos']} onClick={handleAddNewTodos}>
                        <span>+</span>
                    </button>
                </div>

                <div className={classes['chart']}>
                    <span>显示计划的完成度</span>
                </div>
            </main>

            {/* 只有在添加todos的时候才会展示出来 */}
            {
                addNewTodos
                &&
                <AddNewTodos />
            }

            {/* 未来计划目标 + 已完成内容部分 */}
            <main className={classes['past-future']}>
                <div className={classes['todos-list']}>
                    <div className={classes.select}>
                        <label htmlFor='state-types'>显示状态：</label>
                        <select name='states' id='state-types'>
                            <option value=''>--请选择显示的范围--</option>
                            <option value='all'>显示全部</option>
                            <option value='done'>显示已完成</option>
                            <option value='todo'>显示未完成</option>
                        </select>

                    </div>

                    <div className={classes.content}>
                        cd
                    </div>
                </div>

                <div className={classes['todos-display']}>
                    2
                </div>
            </main>

            {/* 完成计划的可视化 */}
            <main className={classes['visilize']}>
                2
            </main>
        </section >
    )
}