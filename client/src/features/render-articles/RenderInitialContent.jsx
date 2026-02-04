import { useMemo } from 'react';
import classes from './RenderInitialContent.module.scss';

import { useAppSelector } from '../../store/reducer/hooks.js';
import NoContent from '../../components/icons/NoContent';

// 这里的 files 是要能够返回文件数量的数据
export default function RenderInitialContent() {
    const { sidebarActive } = useAppSelector(state => state.dropdownSidebar);

    return (
        <main
            className={`${classes.container} ${sidebarActive ? '' : classes.close}`}
        >
            <div className={classes.content}>
                <NoContent />
                <p>点击左侧对应目录，以获取相应的内容</p>
            </div>
        </main>
    );
}
