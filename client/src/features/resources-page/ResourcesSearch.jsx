import classes from "./ResourcesSearch.module.scss";
import SearchMagnifiers from "../../components/icons/SearchMagnifiers";
import { useContext } from "react";
import { ResourcesContext } from "../../store/context/ResourcesContext";

export default function ResourcesSearch({ categories }) {
    const {
        inputItem,
        selectedCategory,
        updateInputItem,
        handleSelectCategory,
    } = useContext(ResourcesContext);

    return (
        <main className={classes["nav-container"]}>
            <div className={classes["desc-container"]}>
                <h1>学习资源分享</h1>
                <p>集中整理常用的学习网站，实现快速访问与高效跳转</p>
            </div>

            <div className={classes["search-container"]}>
                <SearchMagnifiers />

                <input
                    className={classes["search-input"]}
                    type="text"
                    placeholder="搜索关键字，获取对应资源 . . ."
                    value={inputItem}
                    onChange={updateInputItem}
                />
            </div>

            <div className={classes["btns-container"]}>
                {categories.map((el) => (
                    <button
                        key={el}
                        className={
                            selectedCategory === el ? classes["active"] : ""
                        }
                        onClick={() => handleSelectCategory(el)}
                    >
                        {el === "all" ? "全部" : el}
                    </button>
                ))}
            </div>
        </main>
    );
}
