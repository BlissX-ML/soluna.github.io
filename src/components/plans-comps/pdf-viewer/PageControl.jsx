import { ICONS } from '../../../_data/icons/icons'
import classes from './PageControl.module.scss'

export default function PageControl({ pageNumber, numPages, prevPage, nextPage }) {

    // 用来控制页面转换的按钮和当前页码显示
    return (
        <div className={classes.btns}>
            <button
                onClick={prevPage}
                disabled={pageNumber <= 1}
            >
                <ICONS.PrevPage />
            </button>

            <span>
                {pageNumber}&nbsp;&nbsp;/&nbsp;&nbsp;{numPages || 0}
            </span>

            <button
                onClick={nextPage}
                disabled={pageNumber >= (numPages || 1)}
            >
                <ICONS.NextPage />
            </button>
        </div>
    )
}