import matter from 'gray-matter';
import { getOssClient } from '../../modules/oss/oss.service.js';

// GET获取 markdown 文件内容
export async function getOssMdFiles(prefix) {
    const client = await getOssClient();

    try {
        const result = await client.list({ prefix, delimiter: '/' });
        const objects = result.objects || [];

        const files = await Promise.all(
            objects.map(async obj => {
                const res = await client.get(obj.name);

                const fullFileName = obj.name.split('/').pop(); // "myDocument.pdf"

                const fileContent = res.content.toString('utf-8');
                const { data: frontmatter } = matter(fileContent);

                const dataInfo = {
                    key: obj.name,
                    path: obj.name,
                    fileName: fullFileName.replace('.md', ''),
                    category: frontmatter?.tags?.[0] || 'Uncategorized',
                    titleEn: frontmatter?.titleEn,
                    titleCh: frontmatter?.titleCh,
                    tags: frontmatter?.tags
                };

                return { dataInfo, content: fileContent };
            })
        );

        return (
            files.filter(f => f.dataInfo.fileName !== '' && f.content !== '') ||
            []
        );
    } catch (error) {
        throw new Error('Cannot get the whole files from oss');
    }
}
