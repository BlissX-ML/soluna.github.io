import { useState } from 'react'

import classes from './TodosItems.module.css'
import ContentFutureViewer from '../FutureItems/ContentFutureViewer.jsx'
import ContentDoneViewer from '../CompleteItems/ContentDoneViewer.jsx'
import TitlesComp from '../TitlesComp/TitlesComp.jsx'
import ContentComp from '../ContentComp/ContentComp.jsx'

export default function TodosItems() {
    const [selectTitle, setSelectTitle] = useState('future');
    const width = selectTitle === 'future' ? '42.0625rem' : 'auto';

    return (

        <main className={classes.container}>
            <div className={classes.itemsSelect}>
                <TitlesComp state={selectTitle} changeState={setSelectTitle} />
                <ContentComp state={selectTitle} />
            </div>

            <div className={classes.results} style={{ width: `${width}` }}>
                {
                    selectTitle === 'future' ?
                        <ContentFutureViewer slot='future' /> :
                        <ContentDoneViewer slot='done' />
                }
            </div>
        </main>
    )
}