import classes from "./AboutPage.module.scss";

import AboutIntro from "../../layouts/about/AboutIntro.jsx";
import AboutResumeLayout from "../../layouts/about/AboutResumeLayout.jsx";

export default function About() {
    return (
        <section id="main-content" className={classes.about}>
            <AboutIntro />
            <AboutResumeLayout />
        </section>
    );
}
