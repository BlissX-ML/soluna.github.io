import { useSelector } from "react-redux";
import ImagesLoopContent from "./ImagesLoopContent";

const selectHomeImages = state => state.homeImages;

export default function ImagesLoop({ screen, content, des }) {
    const { images } = useSelector(selectHomeImages);

    return (
        <>
            {
                images.map((img, i) => (
                    <div
                        key={i}
                        style={{ backgroundImage: `url(${img.src})` }}  // 图片作为块背景，而不是单纯的 <img />
                        className={screen}
                    >
                        <ImagesLoopContent img={img} content={content} des={des} />
                    </div>
                ))
            }
        </>
    )
}