import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';



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