import { useMemo } from 'react';
import PDFViewer from './PDFViewer.jsx';

import resumeUrl from '@/_documents/resume/resume.pdf?url';

export default function ResumeViewer() {
    const file = useMemo(() => resumeUrl, []);

    return (
        <PDFViewer
            src={file}
            loading='Loading...'
            page={1}
            scale={1.6}
        />
    )
}