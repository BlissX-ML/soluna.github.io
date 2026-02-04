import classes from './RenderNoneContent.module.scss';

import NoContent from '../../components/icons/NoContent';
import { useParams } from 'react-router-dom';
import { REPOSITORY_SIDEBAR } from '../../_data/repository/repository';
import { useEffect, useState } from 'react';

export default function RenderNoneContent({ startURL }) {
    const { routeId } = useParams();
    const [hasUpdated, setHasUpdated] = useState(new Set());

    useEffect(() => {
        if (startURL === '/repository') {
            const repositories = REPOSITORY_SIDEBAR.find(els => {
                return els?.key.toLowerCase() === routeId;
            });

            repositories?.detail?.data.forEach(el => {
                if (el?.detail.length !== 0) {
                    setHasUpdated(prev => prev.add(el?.title));
                }
            });
        }
    }, [routeId, startURL]);

    return (
        <div className={classes.content}>
            <NoContent />
            <div>
                <p>这个家伙还没有整理完，没戏了，看看别的吧...</p>
                <p>
                    目前只更新了 <b>{[...hasUpdated].join(', ')}</b>
                </p>
            </div>
        </div>
    );
}
