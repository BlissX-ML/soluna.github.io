export default function ImagesLoopContent({ img, content, des }) {
    return (
        <div className={content}>
            <div className={des}>
                <h2>{img.title}</h2>
                <p><i>{img.description}</i></p>
            </div>
        </div>
    )
}