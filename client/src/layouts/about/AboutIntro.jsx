import { ABOUT_ME_INTRODUCTION } from '../../_data/about-page/introduction.js';
import classes from './AboutIntro.module.scss';

export default function AboutIntro() {
    return (
        <section className={classes.intro}>
            {ABOUT_ME_INTRODUCTION.map(items => (
                <div key={items.key}>
                    <h3>{items.title}</h3>
                    <p>
                        {Array.isArray(items.content)
                            ? items.content.map(item => (
                                  <li key={item}>{item}</li>
                              ))
                            : items.content}
                    </p>
                </div>
            ))}
        </section>
    );
}
