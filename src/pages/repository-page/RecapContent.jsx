import { useParams } from 'react-router-dom';

import classes from './RecapContent.module.css'
import RecapSubNav from '../../components/repository-comps/Category-Navigation/CategoryItem.jsx';
import { RECAP_MAIN_KEYS } from '../../data/repository-page/repository';

export default function RecapContent() {
    const { recapId } = useParams();

    return (
        <div className={classes.content}>
            {RECAP_MAIN_KEYS.includes(recapId) && <RecapSubNav />}

            {!RECAP_MAIN_KEYS.includes(recapId) && <p>这里是 {recapId} 的正文</p>}
        </div>
    )
}