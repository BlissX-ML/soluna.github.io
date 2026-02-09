import { useState } from 'react';
import classes from './AboutResumeLayout.module.scss';

import { PROFILE_IMAGE_ABOUT } from '../../_data/about-page/introduction.js';
import Cancel from '../../components/icons/Cancel';
import ImagesLoad from '../../components/image/ImagesLoad';

export default function AboutResumeLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const profile = PROFILE_IMAGE_ABOUT[0];

    function handleClick() {
        setIsOpen(prev => !prev);
    }

    return (
        <>
            <div className={classes.btns}>
                <ImagesLoad
                    lowquality={profile.src.medium}
                    highquality={profile.src.high}
                    alt={profile.alt}
                    className=""
                />

                <button onClick={handleClick}>
                    <span>预览我的简历</span>
                </button>
            </div>

            <dialog className={classes.resume} open={isOpen}>
                <main>
                    <div className={classes.pdf}>
                        {/* <ResumeViewer isActive={isOpen} /> */}
                    </div>
                    <button onClick={handleClick}>
                        <Cancel />
                    </button>
                </main>
            </dialog>
        </>
    );
}
