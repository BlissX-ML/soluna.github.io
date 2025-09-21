import { useEffect, useMemo, useState } from 'react';

import { useAppSelector } from '../../../../store/reducer/hooks.js';

import classes from './ContentDoneViewer.module.css'
import PdfViewer from '../../pdf-viewer/PdfViewer.jsx';


export default function ContentDoneViewer({ slot, items }) {
    const [isImage, setIsImage] = useState(false);    // 用来判断当前显示的是 pdf 文件还是 .webp 图片

    const { activeKey } = useAppSelector(state => state?.plans[slot]);    // 选择当前页面对应的切片(`future` / `done`)

    const routeMap = useMemo(
        () => Object.fromEntries(items.map(i => [i.key, i.srcs])),
        [items]
    );

    useEffect(() => {
        if (!activeKey || !routeMap[activeKey]) return;
        const ext = routeMap[activeKey].split('.').pop();
        setIsImage(ext === 'webp');
    }, [activeKey, routeMap]);

    const src = routeMap[activeKey];

    return (
        <>
            {isImage ? (
                <img src={src} className={classes.img} />
            ) : (
                <PdfViewer slot={slot} src={src} />
            )}
        </>
    );

}