import { getOssClient } from '../../modules/oss/oss.service.js';

export async function getOssPdfFiles(prefix) {
    const client = await getOssClient();

    try {
        const result = await client.list({ prefix, delimiter: '/' });
        const objects = result.objects || [];

        // 排序拿最新
        const latest = [...objects].sort(
            (a, b) => +new Date(b.lastModified) - +new Date(a.lastModified)
        )[0];

        // 获取文件内容
        const res = await client.get(latest.name);

        return {
            fileName: latest.name.split('/').pop().replace('.pdf', ''),
            content: res.content.toString('base64')
        };
    } catch (error) {
        throw new Error('Cannot get the whole files from oss');
    }
}
