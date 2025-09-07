import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// ① 让 Vite 把 worker 当作静态资源处理，并返回真实 URL
// ② 告诉 pdf.js 使用上面的 worker
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ src, loading, page, scale }) {
    return (
        <>
            <Document
                file={src}
                loading={loading}
            >
                <Page
                    pageNumber={page}
                    scale={scale}
                    renderAnnotationLayer={false}
                />
            </Document>
        </>
    )

}