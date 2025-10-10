import { useMemo } from 'react';


import resumeUrl from '@/_documents/resume/resume.pdf?url'; // 获取简历的文件
import PdfViewer from '../../components/pdf-viewer/pdf-viewer.jsx';

// isActive 是用来检查当前的 PDF 是否申请显示了，在父组件中定义了
export default function ResumeViewer({ isActive }) {
    const file = useMemo(() => resumeUrl, []);

    return (
        <PdfViewer
            isActive={isActive}
            src={file}
            scale='1.6'
        />
    )
}