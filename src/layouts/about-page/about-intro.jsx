import { INTRODUCTION } from '../../_data/about-page/about.js';
import classes from './about-intro.module.scss';

export default function AboutIntro() {
    return (
        <main className={classes.intro}>
            {INTRODUCTION.map(items => (
                <div key={items.key}>
                    <h3>{items.title}</h3>
                    <p>
                        {
                            Array.isArray(items.content) ?
                                items.content.map(item => (
                                    <li key={item}>{item}</li>
                                )) :
                                items.content
                        }
                    </p>
                </div>
            ))}
        </main>
    )
}