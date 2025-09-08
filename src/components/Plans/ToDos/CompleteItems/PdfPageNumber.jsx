import { ICONS } from '../../../../data/icons/icons.js'
import classes from './PdfPageNumber.module.css'

export default function PdfPageNumber({ pageNumber, numPages, prevPage, nextPage }) {

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