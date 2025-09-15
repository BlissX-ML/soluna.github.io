import classes from './Plan.module.css';

import { KnowledgeCardContext } from "../../store/context/knowledgeCardContext.jsx";

import KnowledgeCard from "../../components/plans-comps/KnowledgeCard/KnowledgeCard.jsx";
import MemoGlobe from "../../components/plans-comps/KnowledgeSphere/MemoGlobe.jsx";

import { TodosManagaeContext } from '../../store/context/TodosManagaeContext.jsx';
import TodosItems from '../../components/plans-comps/ToDos/ToDos/TodosItems.jsx';

export default function Plan() {
    return (
        <section className={classes.plans}>
            <TodosManagaeContext>
                <TodosItems />
            </TodosManagaeContext>


            <KnowledgeCardContext>
                <KnowledgeCard />
            </KnowledgeCardContext>

            <MemoGlobe />
            {/* <CarouselImages /> */}
        </section >
    )
}