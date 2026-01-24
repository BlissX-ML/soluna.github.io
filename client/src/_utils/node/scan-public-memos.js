import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

// 通过 import.meta.url 转换得到当前文件所在目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 确定搜索的 `/public` 公共目录下文件的 URL
const publicDir = path.resolve(__dirname, "../../../public/articles/memos");

/***********************
 * 递归扫描目录，返回相对 publicDir 的文件路径列表
 * @param {string} dir - 当前要扫描的目录（绝对路径）
 * @param {string} baseUrl - 相对 publicDir 的路径前缀（用于拼接输出路径）
 * @returns {string[]} - 例如：["a.md", "foo/bar.md"]
 **********************/

function scanDirectory(dir, baseUrl = "/articles/memos") {
    const files = [];

    // 读取目录内容，`readdirSync`返回该目录下所有文件和文件夹的名称数组
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item); // 文件的绝对路径
        const stat = fs.statSync(fullPath); // `statSync`同步获取某个文件或目录的文件信息

        // 子目录：继续递归
        if (stat.isDirectory()) {
            const nextBase = baseUrl ? `${baseUrl}/${item}` : item;
            files.push(...scanDirectory(fullPath, nextBase));
            continue;
        }

        // ✅ 普通文件：记录相对路径
        if (stat.isFile()) {
            const fileContent = fs.readFileSync(fullPath, "utf-8"); // 读取文件内容
            const { data: frontmatter } = matter(fileContent); // 解析 frontmatter
            const filePath = baseUrl ? `${baseUrl}/${item}` : item; // 检查当前递归层有无父路径

            const titleEn = frontmatter?.titleEn;
            const titleCh = frontmatter?.titleCh;
            const tags = frontmatter?.tags;

            files.push({
                key: filePath,
                path: filePath,
                fileName: item.split(".")[0],
                category: tags?.[0] || "Uncategorized",
                titleEn,
                titleCh,
                tags
            });
        }
    }

    return files;
}

// 扫描得到所有文件相对路径
const files = scanDirectory(publicDir);


// 生成到 src 下的 JS 文件内容
// 使用 JSON.stringify 将数组转换为可写入的格式，因为 `writeFileSync` 写入字符串或者Buff

const content = `// Auto-generated file (DO NOT EDIT MANUALLY)
export const MEMOS = ${JSON.stringify(files, null, 2)};
`;

// 确保目录存在
const configDir = path.resolve(__dirname, "../../_data/memo-page");
if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
}

// 写入目标文件
fs.writeFileSync(path.resolve(configDir, "./memo-raw.js"), content, "utf-8");

console.log(
    `✅ Generated ${files.length} file paths.`,
);
