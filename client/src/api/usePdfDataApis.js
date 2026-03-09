import { useGetResumeFilesQuery } from '../store/reducer/data.pdfApiSlice.js';

export function usePdfDataApis() {
    const { data: resume, isLoading: resumeLoading } = useGetResumeFilesQuery();

    function handleDownload() {
        if (!resume?.content) return;

        // base64 → Blob → 下载
        const binary = atob(resume.content);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: 'application/pdf' });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${resume.fileName}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
    }

    const d = {
        resume: { data: resume, isLoad: resumeLoading },
        handleDownload
    };

    return d;
}
