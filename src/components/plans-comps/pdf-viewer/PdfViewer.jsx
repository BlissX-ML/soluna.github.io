import { useState } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
import classes from './PdfViewer.module.scss'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { ContentPlaceholder } from '../ToDos/complete-items/ContentPlaceholder.jsx';
import PageControl from './PageControl.jsx';

import { useAppSelector } from '../../../store/reducer/hooks.js';

import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;


export default function PdfViewer({ src, slot }) {
    const { isActive } = useAppSelector(state => state?.plans[slot])


    const [numPages, setNumPages] = useState(null);    // 控制 PDF 的总页数
    const [pageNumber, setPageNumber] = useState(1);   // 当前显示的页码
    const [progress, setProgress] = useState(0);       // 当前加载的进度


    // 参数结构 { numPages } 是 react-pdf 固定传过来的
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setProgress(100);   // 加载完成，设为100%
    }

    function onLoadProgress({ loaded, total }) {
        const percent = Math.round((loaded / total) * 100);
        setProgress(percent);
    }

    function nextPage() { setPageNumber(prev => Math.min(prev + 1, numPages || 1)) }
    function prevPage() { setPageNumber(prev => Math.max(prev - 1, 1)) }

    return (
        <>
            <div className={classes.fileContainer}>
                <Document
                    file={src}
                    loading={<ContentPlaceholder progress={progress} state={isActive} />}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadProgress={onLoadProgress}
                >
                    <Page
                        pageNumber={pageNumber}
                        scale={0.85}
                        renderAnnotationLayer={false}
                    />
                </Document>
            </div>
            {
                isActive &&
                <PageControl
                    pageNumber={pageNumber}
                    numPages={numPages}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />

            }
        </>
    )
}