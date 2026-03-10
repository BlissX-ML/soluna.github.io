import { usePdfDataApis } from '../../api/usePdfDataApis';
import classes from './AboutProfileResume.module.scss';

import { PROFILE_IMAGE_ABOUT } from '../../_data/about-page/introduction.js';
import ImagesLoad from '../../components/image/ImagesLoad.jsx';

export default function AboutProfileResume() {
    const profile = PROFILE_IMAGE_ABOUT[0];

    const { handleDownload } = usePdfDataApis();

    return (
        <>
            <div className={classes.btns}>
                <ImagesLoad
                    lowquality={profile.src.medium}
                    highquality={profile.src.high}
                    alt={profile.alt}
                    className=""
                />

                <button onClick={handleDownload}>下载简历</button>
            </div>
        </>
    );
}
