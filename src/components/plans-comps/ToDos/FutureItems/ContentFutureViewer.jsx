import { useContext } from "react";

import classes from './ContentFutureViewer.module.css'

import ContentPlaceholder from "./ContentPlaceholder";
import { TodosContext } from "../../../../store/context/TodosManagaeContext.jsx";

export default function ContentFutureViewer({ slot }) {
    const ctx = useContext(TodosContext);
    const section = slot === 'future' ? ctx.future : ctx.done;
    // console.log(ctx.activeContent)

    return (
        <div className={classes.todoContent}>
            {section.active ? section.content : <ContentPlaceholder />}
        </div>
    )
}