import classes from './about-page.module.scss'

import AboutIntro from '../../layouts/about-page/about-intro.jsx';
import AboutBtnResume from '../../layouts/about-page/about-btn-resume.jsx';

export default function About() {


    return (
        <section id='main-content' className={classes.about} >
            <AboutIntro />
            <AboutBtnResume />
        </section >
    )
}