import classes from './AboutPage.module.scss';

import AboutIntro from '../../layouts/about/AboutIntro.jsx';
import AboutProfileResume from '../../layouts/about/AboutProfileResume.jsx';

export default function About() {
    return (
        <section id="main-content" className={classes.about}>
            <AboutIntro />
            <AboutProfileResume />
        </section>
    );
}
