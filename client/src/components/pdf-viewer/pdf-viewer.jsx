// 就是这里面放置的是，需要页码控制的 PDF 页面

import { useState } from 'react';

import { Document, Page } from 'react-pdf';
import classes from './pdf-viewer.module.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import PdfLoading from './pdf-loading.jsx';
import PageControl from './pdf-page-control';

// 为了具有复用性，直接使用 isActive 去控制开关与否，中间涉及 props drilling
export default function PdfViewer({ isActive, src, scale }) {

    const [totalPages, setTotalPages] = useState(null);    // 控制 PDF 的总页数
    const [curPage, setCurPage] = useState(1);   // 当前显示的页码
    const [progress, setProgress] = useState(0);       // 当前加载的进度


    // 参数结构 { numPages } 是 react-pdf 固定传过来的
    function onDocumentLoadSuccess({ numPages }) {
        setTotalPages(numPages);
        setProgress(100);   // 加载完成，设为100%
    }

    function onLoadProgress({ loaded, total }) {
        const percent = Math.round((loaded / total) * 100);
        setProgress(percent);
    }

    function nextPage() { setCurPage(prev => Math.min(prev + 1, totalPages || 1)) }
    function prevPage() { setCurPage(prev => Math.max(prev - 1, 1)) }

    // PDF显示的高度，需要自定义
    return (
        <>
            <div className={classes.fileContainer} >
                <Document
                    file={src}
                    loading={<PdfLoading progress={progress} state={isActive} />}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadProgress={onLoadProgress}
                >
                    <Page
                        pageNumber={curPage}
                        scale={scale}
                        renderAnnotationLayer={false}
                    />
                </Document>
            </div>
            {
                isActive &&
                <PageControl
                    curPage={curPage}
                    totalPages={totalPages}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />

            }
        </>
    )
}