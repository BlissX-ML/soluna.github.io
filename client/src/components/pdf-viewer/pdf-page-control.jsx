import ArrowNextPage from "../icons/ArrowNextPage";
import ArrowPrevPage from "../icons/ArrowPrevPage";
import classes from "./pdf-page-control.module.scss";

export default function PageControl({
    curPage,
    totalPages,
    prevPage,
    nextPage,
}) {
    // 用来控制页面转换的按钮和当前页码显示
    return (
        <div className={classes.btns}>
            <button onClick={prevPage} disabled={curPage <= 1}>
                <ArrowNextPage />
            </button>

            <span>
                {curPage}&nbsp;&nbsp;/&nbsp;&nbsp;{totalPages || 0}
            </span>

            <button onClick={nextPage} disabled={curPage >= (totalPages || 1)}>
                <ArrowPrevPage />
            </button>
        </div>
    );
}
