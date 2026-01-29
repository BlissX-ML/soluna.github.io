import { useState } from 'react';
import classes from './AboutResumeLayout.module.scss';

// import ResumeViewer from "../../features/resume-pdf-viewer/ResumeViewer.jsx";
import { PROFILE_IMAGE_ABOUT } from '../../_data/about-page/introduction.js';
import Cancel from '../../components/icons/Cancel';

export default function AboutResumeLayout() {
    const profile = PROFILE_IMAGE_ABOUT[0];
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(prev => !prev);
    }

    return (
        <>
            <div className={classes.btns}>
                <img src={profile.src} alt={profile.alt} />
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
