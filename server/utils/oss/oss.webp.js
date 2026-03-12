import { getOssClient } from '../../modules/oss/oss.service.js';

export async function getOssWebpFiles(prefix, size) {
    const client = await getOssClient();

    try {
        const result = await client.list({ prefix, delimiter: '/' });

        const objects = result.objects || [];

        if (!objects.length) {
            throw new Error('No target images in OSS');
        }

        // 获取最新修改的文件
        const images = await Promise.all(
            objects.map(async obj => {
                const imageAlt = obj.name.split('/').pop();

                // // 直接传递 base64 数据 → 该方法传递的数据量较大
                // const image = await client.get(obj.name);
                // const base64 = image.content.toString('base64'); // Buffer 转 base64

                // return {
                //     alt: imageAlt.replace('.webp', ''),
                //     src: `data:image/webp;base64,${base64}`, // 直接可用的 src
                //     size: obj.size
                // };

                return {
                    alt: imageAlt.replace('.webp', ''),
                    src: `http://static.solunote.site/${obj.name}`, // 直接生成 OSS访问 URL
                    size: obj.size
                };
            })
        );

        // 合并同名文件，medium → low，无后缀 → high
        const merged = new Map();
        const filteredImg = images.filter(i => i.size !== 0);

        for (const img of filteredImg) {
            const fileName = img.alt;
            const isMedium = fileName.endsWith('-medium');
            const baseName = isMedium
                ? fileName.replace('-medium', '')
                : fileName;

            if (!merged.has(baseName)) {
                merged.set(baseName, {
                    title: baseName,
                    // src: { low: null, high: null }
                    src: null
                });
            }

            if (isMedium && size === 'low') {
                merged.get(baseName).src = img.src;
            } else if (!isMedium && size === 'high') {
                merged.get(baseName).src = img.src;
            }
        }

        return Array.from(merged.values());
    } catch (error) {
        throw new Error(`Failed to get Images from OSS: ${error.message}`);
    }
}

export async function getOssCertChartStats() {
    const client = await getOssClient();

    const outerLevel = await client.list({
        prefix: 'images/dashboard-certificates/',
        delimiter: '/'
    });

    const ImagesFiles = await Promise.all(
        outerLevel.prefixes.map(async prefix => {
            const files = await client.list({ prefix, delimiter: '/' });
            const count = files.objects?.length || 0;

            // language-english → ['language', 'english']
            const folder = prefix.split('/').filter(Boolean).pop();
            const [classification, ...rest] = folder.split('-');

            // english / japanese / learn-typescript
            const key = rest.join('-');

            const titleMap = {
                language: '语言证书',
                coursera: '线上网课证书',
                youtube: '线上网课证书',
                udemy: '线上网课证书'
            };

            return {
                category: titleMap[classification] || '其他',
                key,
                count: (count - 1) / 2 // medium + high 各一张，且有一个空白的数据
            };
        })
    );

    // 按 category 分组
    const groupMap = new Map();

    for (const file of ImagesFiles) {
        if (!groupMap.has(file.category)) {
            groupMap.set(file.category, {
                title: file.category,
                number: 0,
                details: []
            });
        }
        const group = groupMap.get(file.category);
        group.details.push({ title: file.key, number: file.count });
        group.number += file.count;
    }

    // 计算 percent
    const grouped = Array.from(groupMap.values()).map(group => ({
        ...group,
        details: group.details.map(item => ({
            ...item,
            percent: ((item.number / group.number) * 100).toFixed(1)
        }))
    }));

    return grouped;
}
