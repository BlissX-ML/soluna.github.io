import { getOssClient } from '../../modules/oss/oss.service.js';

export async function getOssPdfFiles(prefix) {
    const client = await getOssClient();

    try {
        const result = await client.list({ prefix, delimiter: '/' });
        const objects = result.objects || [];

        if (!objects.length) {
            throw new Error('No PDF found in OSS');
        }

        // 获取最新修改的文件
        const latest = objects.sort(
            (a, b) => +new Date(b.lastModified) - +new Date(a.lastModified)
        )[0];

        const pdf = await client.get(latest.name); // 返回 Buffer

        return {
            fileName: latest.name.split('/').pop(),
            content: pdf.content
        };
    } catch (error) {
        throw new Error(`Failed to get PDF from OSS: ${error.message}`);
    }
}
