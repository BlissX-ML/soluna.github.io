import classes from './ImageViewer.module.css'

export default function ImageViewer({ src }) {
    return (
        <img src={src} className={classes.img} />
    )
}