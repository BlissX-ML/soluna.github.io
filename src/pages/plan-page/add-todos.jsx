import classes from './add-todos.module.scss'

export default function AddNewTodos() {
    return (
        <main className={classes['add-todos-content']}>
            <form>
                <div>
                    <label htmlFor='tasks'>Todo名称</label>
                    <input type='text' id='tasks' name='tasks' />
                </div>

                <div>
                    <label htmlFor='target'>完成目标</label>
                    <input type='text' id='target' name='target' />
                </div>

            </form>
        </main>
    )
}