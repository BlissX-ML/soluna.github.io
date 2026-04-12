import classes from './ResourcesPage.module.scss';

import { CATEGORIES } from '../../_data/resources-page/resources.js';

import Nothing from '../../components/feedback/Nothing.jsx';

import ResourceTitlebar from '../../features/title-bar/ResourceTitlebar.jsx';
import { useResourceStates } from '../../store/zustand/resourcezustand';
import ResourceCard from '../../components/card/ResourceCard';

export default function ResourcesPage() {
    // const { filteredResources } = useContext(ResourcesContext);
    const { setResources } = useResourceStates();
    const filteredResources = setResources();

    return (
        <>
            {/* 上面的搜索栏部分 */}
            <ResourceTitlebar categories={CATEGORIES} />

            {/* 下面放具体的链接的位置 */}
            <section className={classes['resource-container']}>
                {filteredResources.length === 0 ? (
                    <Nothing />
                ) : (
                    filteredResources.map(resources => (
                        <ResourceCard
                            resources={resources}
                            key={resources?.id}
                        />
                    ))
                )}
            </section>
        </>
    );
}
