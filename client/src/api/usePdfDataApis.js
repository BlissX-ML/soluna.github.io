export function usePdfDataApis() {
    async function handleDownload() {
        const prefix = 'resume'; // 后端真实地址
        let fileName = 'download.pdf';

        try {
            const res = await fetch(`/api/data/pdf/${prefix}`);

            if (!res.ok) throw new Error('下载失败');

            // 从 Content-Disposition header 里获取文件名
            const disposition = res.headers.get('Content-Disposition');
            if (disposition && disposition.includes('filename*=')) {
                // RFC5987 编码
                fileName = decodeURIComponent(
                    disposition.split('filename*=')[1].trim()
                );
            }
            console.log(disposition);

            // 返回 blob
            const blob = await res.blob();

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            a.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
            alert('下载失败，请稍后重试');
        }
    }

    return { handleDownload };
}
