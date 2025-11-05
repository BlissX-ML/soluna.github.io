import { useState } from 'react';
import { todosDateScale } from '../../_data/plans-page/lib/plan-page'
import classes from './add-todos.module.scss'

export default function AddNewTodos({ onAddControl }) {
    const { today, max } = todosDateScale();
    const [date, setDate] = useState(today);

    return (
        <main className={classes['add-todos-content']}>
            <form>
                <input type='text' id='tasks' name='tasks' placeholder='任务名称，如背单词' />
                <input type='text' id='target' name='target' placeholder='完成目标， 如背诵50个单词' />
                <textarea id='memos' name='memos' placeholder='备注'></textarea>

                <input
                    type='date'
                    id='date'
                    name='date'
                    value={date}
                    min={today}
                    max={max}
                    onChange={e => setDate(e.target.value)}
                    placeholder='请选择日期'
                />

                <p>
                    <button onClick={() => onAddControl(false)}>取消添加</button>
                </p>

                <p>
                    <button>添加新任务</button>
                </p>
            </form>

        </main>
    )
}