// @ts-nocheck

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from './CategoryItem.module.css'

import { RECAP_Detailed_Nav } from "../../../data/repository-page/repository.js";


export default function CategoryItem() {
    const { curItem } = useSelector((state) => state.repository);
    const contents = RECAP_Detailed_Nav.filter(el => el.key === curItem)[0].content;

    return (
        <div className={classes.content}>
            <ul className={classes.ul}>
                {contents.map(els => (
                    <li key={els.key}>
                        <Link to={`${els.key}`}> {els.content} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}