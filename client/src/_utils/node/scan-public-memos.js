import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const getRandom = () => {
    return (Math.random() * 2 - 1).toFixed(2);
};

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
            files.push({
                key: filePath,
                path: filePath,
                fileName: item.split(".")[0],
                frontmatter,
            });
        }
    }

    return files;
}

// 扫描得到所有文件相对路径
const files = scanDirectory(publicDir);

function sortFiles() {
    const fileTypes = new Set(); // 收集 memo 页文件中 Tags 类型的，即侧边栏大标题
    const nestedFile = new Map(); // 收集每一个 Tags 对应的文章，即侧边栏小标题
    const sortFile = new Map(); // 收集侧边主体文件内容

    files.forEach((file) => {
        const tag = file?.frontmatter?.tags?.[0];
        const tagSm = tag.toLowerCase(); // 都转换成小写的

        if (!fileTypes.has(tagSm)) fileTypes.add(tag);
        if (!sortFile.has(tagSm)) {
            sortFile.set(tagSm, []);
            nestedFile.set(tagSm, []);
        }

        sortFile.get(tagSm).push(file);
        nestedFile.get(tagSm).push({
            key: file?.key,
            title: file?.frontmatter?.titleCh,
            src: file?.path,
            fileName: file?.fileName,
        });
    });

    const MEMOS_SORTED = Array.from(sortFile.values()).flat(1);

    // 直接生成需要的类似于 repository_navigate 的文件样式
    const MEMOS_TYPES = [...fileTypes].map((type) => ({
        key: type,
        title: type,
        level: 1,
        delayTime: getRandom(),
        detail: {
            level: 2,
            data: nestedFile.get(type.toLowerCase()),
        },
    }));

    return [MEMOS_TYPES, MEMOS_SORTED];
}

const [types, filesList] = sortFiles();

// 生成到 src 下的 JS 文件内容
// 使用 JSON.stringify 将数组转换为可写入的格式，因为 `writeFileSync` 写入字符串或者Buff
const content = `// Auto-generated file (DO NOT EDIT MANUALLY)
export const MEMOS_TYPES = ${JSON.stringify(types, null, 2)};

export const MEMOS = ${JSON.stringify(filesList, null, 2)};
`;

// 确保目录存在
const configDir = path.resolve(__dirname, "../../_data/memo-page");
if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
}

// 写入目标文件
fs.writeFileSync(path.resolve(configDir, "./memo.js"), content, "utf-8");

console.log(
    `✅ Generated ${filesList.length} file paths and ${types.length} categories.`,
);
