import classes from './Plan.module.css';

import { KnowledgeCardContext } from "../../store/context/knowledgeCardContext.jsx";

import KnowledgeCard from "../../components/plans-comps/KnowledgeCard/KnowledgeCard.jsx";
import MemoGlobe from "../../unuseful/Glob/MemoGlobe.jsx";

import TodosItems from '../../components/plans-comps/ToDos/plans-mixComps/TodosItems.jsx';

export default function Plan() {
    return (
        <section className={classes.plans}>
            <TodosItems />

            <KnowledgeCardContext>
                <KnowledgeCard />
            </KnowledgeCardContext>

            {/* <MemoGlobe /> */}
            {/* <CarouselImages /> */}
        </section >
    )
}