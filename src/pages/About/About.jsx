import { useState } from 'react';
import classes from './About.module.css'

import { INTRODUCTION } from '../../data/about/about.js';
import { ICONS } from '../../data/icons/icons.js';
import { PROFILE_ABOUT } from '../../data/about/profile.js';

import ResumeViewer from '../../components/About/ResumeViewer.jsx';


export default function About() {
    const profile = PROFILE_ABOUT[0]
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(prev => !prev)
    }

    return (
        <section className={classes.about}>
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

            <div className={classes.btns}>
                <img src={profile.src} alt={profile.alt} />
                <button onClick={handleClick}>
                    <span>预览我的简历</span>
                </button>
            </div>

            <dialog className={classes.resume} open={isOpen}>
                <main>
                    <div className={classes.pdf}>
                        <ResumeViewer />
                    </div>
                    <button onClick={handleClick}>
                        <ICONS.cancel />
                    </button>
                </main>
            </dialog>
        </section>
    )
}