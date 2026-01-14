import fs from "fs";
import matter from "gray-matter";

const raw = fs.readFileSync("#/Plans/Todos/Basis408.mdx", "utf8");
const { data, content } = matter(raw);

console.log(data.title);   // "Computer Basis 408"
console.log(data.route);   // "/plans"
console.log(data.tags);    // ["computer", "basis", "408"]
console.log(content);      // 纯正文（Markdown 文本）
