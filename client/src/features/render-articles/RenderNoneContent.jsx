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

            setHasUpdated(new Set()); // 清空状态

            // 等数据准备好再处理
            if (repositories?.detail?.data) {
                const updatedSet = new Set();
                repositories.detail.data.forEach(el => {
                    if (el?.detail?.length !== 0) {
                        updatedSet.add(el?.title);
                    }
                });
                setHasUpdated(updatedSet);
            }
        }
    }, [routeId, startURL]);

    return (
        <div className={classes.content}>
            <NoContent />
            <div>
                <p>这个家伙还没有整理完，没戏了，看看别的吧...</p>
                <p>
                    {hasUpdated.size > 0 ? (
                        <span>
                            目前更新： <b>{[...hasUpdated].join(', ')}</b>
                        </span>
                    ) : (
                        <span>当前无更新</span>
                    )}
                </p>
            </div>
        </div>
    );
}
