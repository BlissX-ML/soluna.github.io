import classes from './Arrow.module.css'

export default function ArrowImages({ btnCN, spanCN, arrowHandle }) {
    return (
        <button className={btnCN} onClick={arrowHandle} >
            <span className={`${classes.arrow} ${spanCN}`} ></span>
        </button>
    )
}