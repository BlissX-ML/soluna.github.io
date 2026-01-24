import classes from "./PlanLayout.module.scss";

import KnowledgeCard from "../../features/plans-page/KnowledgeCard/KnowledgeCard.jsx";
import TodosItems from "../../features/plans-page/plans-mixComps/TodosItems.jsx";
// import { KnowledgeCardContext } from '../../store/context/knowledgeCardContext.jsx'

export default function PlanLayout() {
    return (
        <main className={classes.plans}>
            <TodosItems />

            {/* <KnowledgeCardContext>
                <KnowledgeCard />
            </KnowledgeCardContext> */}
        </main>
    );
}
