import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 通过 import.meta.url 转换得到当前文件所在目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targetDir = 'images/webp/certificate';

// 确定搜索的 `/public` 公共目录下文件的 URL
const publicDir = path.resolve(__dirname, `../../../public/${targetDir}`);

function scanDirectory(dir, baseUrl = targetDir, category = '') {
    const files = [];

    // 读取目录内容，`readdirSync`返回该目录下所有文件和文件夹的名称数组
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item); // 文件的绝对路径
        const stat = fs.statSync(fullPath); //获取某个文件或目录的文件信息

        // 如果有嵌套的文件
        if (stat.isDirectory()) {
            const nextBaseUrl = baseUrl ? path.posix.join(baseUrl, item) : item;

            const nextCategory = item; // 简单化，只用当前层的文件夹名作为category

            files.push(...scanDirectory(fullPath, nextBaseUrl, nextCategory));

            continue;
        }

        // 普通文件：记录相对路径
        if (stat.isFile()) {
            // 只处理高画质文件（不带 -thumb 或 -medium 后缀的）
            const fileName = path.parse(item).name;
            const ext = path.parse(item).ext;

            // 跳过已经是缩略图或中等质量的文件
            if (fileName.endsWith('-thumb') || fileName.endsWith('-medium')) {
                continue;
            }

            const baseName = fileName; // 原始文件名（不带扩展名）
            const basePath = path.posix.join(baseUrl, baseName);

            files.push({
                category: category,
                detail: {
                    key: baseName,
                    title: baseName,
                    src: {
                        low: `/${basePath}-thumb${ext}`,
                        medium: `/${basePath}-medium${ext}`,
                        high: `/${basePath}${ext}`
                    }
                }
            });
        }
    }

    return files;
}

// 扫描得到所有文件相对路径
const files = scanDirectory(publicDir);

const files_sort = new Map();

files.forEach(f => {
    const { category, detail } = f;

    if (!files_sort.has(category)) files_sort.set(category, []);
    const details = files_sort.get(category);

    details.push(detail);
    details.sort((a, b) => a.key.localeCompare(b.key));
});

const res = Array.from(files_sort.entries()).map(([key, value]) => ({
    key,
    detail: value
}));

const content = `// Auto-generated file (DO NOT EDIT MANUALLY)
export const AWARDS_IMAGES = ${JSON.stringify(res, null, 2)};
`;

// 确保目录存在
const configDir = path.resolve(__dirname, '../../_data/dashboard/certificates');

if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
}

// 写入目标文件
fs.writeFileSync(
    path.resolve(configDir, './awards-images-urls.js'),
    content,
    'utf-8'
);

console.log(`✅ Generated Successfully.`);
