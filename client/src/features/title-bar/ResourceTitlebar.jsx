import classes from './ResourceTitlebar.module.scss';

import SearchMagnifiers from '../../components/icons/SearchMagnifiers.jsx';
import { useResourceStates } from '../../store/zustand/resourcezustand';

// 资源搜索框
export default function ResourceTitlebar({ categories }) {
    const { inputItem, selectedCategory, setInputItem, setSelectedCategory } =
        useResourceStates();

    return (
        <main className={classes['container']}>
            <div className={classes['desc-container']}>
                <h1>学习资源分享</h1>
                <p>集中整理常用的学习网站，实现快速访问与高效跳转</p>
            </div>

            <div className={classes['search-container']}>
                <SearchMagnifiers />

                <input
                    className={classes['search-input']}
                    type="text"
                    placeholder="搜索关键字，获取对应资源 . . ."
                    value={inputItem}
                    onChange={setInputItem}
                />
            </div>

            <div className={classes['btns-container']}>
                {categories.map(el => (
                    <button
                        key={el}
                        className={
                            selectedCategory === el ? classes['active'] : ''
                        }
                        onClick={() => setSelectedCategory(el)}
                    >
                        {el === 'all' ? '全部' : el}
                    </button>
                ))}
            </div>
        </main>
    );
}
