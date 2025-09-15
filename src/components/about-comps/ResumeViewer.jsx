import { RESUME_LATEST } from '../../data/about-page/resume.js';
import PDFViewer from './PDFViewer.jsx';

export default function ResumeViewer() {
    const file = RESUME_LATEST[0].src;

    return (
        <PDFViewer
            src={file}
            loading='Loading...'
            page={1}
            scale={1.6}
        />
    )
}