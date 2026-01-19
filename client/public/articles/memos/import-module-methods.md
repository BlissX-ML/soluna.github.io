---
titleEn: "Different module import methods"
titleCh: "不同的模块导入方式"
tags: ["engineering"]
---

1. **`import`（静态）**
    - 属于 ESModule
    - **编译阶段**执行，必须写在文件顶部
    - **同步**、提升到最上方（`import` 的语法是静态同步的，但模块的加载和解析是异步完成的）
    - 会缓存模块
    - 支持 default、也支持解构导入（引用的是活的绑定，值不可修改）
2. **`import()`（动态）**
    - 属于 ESModule
    - **执行阶段**才运行
    - **异步**，返回 Promise
    - 会缓存模块
    - 在 then 里拿到 default / 解构值（值同样是只读绑定）
3. **`require`（CommonJS）**
    - 属于 CommonJS 规范
    - **执行阶段**运行
    - **同步**
    - 会缓存模块
    - 导入的是直接赋值（基础类型复制，引用类型浅拷贝）
4. **进一步总结**
    - `ESModule`：能用 → 不能直接改 → 会随原文件变化自动更新。
    - `CommonJS`：能用 → 能改（但改的是你这份，不一定影响原模块）。
    - `import`：静态导入（编译期），只能放最顶层，导入的是**只读引用**，会随源文件同步更新
    - `import()`：动态导入（运行时），返回 Promise，用于按需加载。
    - `require`：CommonJS 的动态导入（运行时），可写在 if/for 中，导入的是**拷贝**。

```jsx
**// ----- import（静态导入）示例：✔ 静态、同步、可被打包工具优化（tree-shaking） -----**
// math.js
export const sum = (a, b) => a + b;
export default 3.14;

// main.js（静态导入）
import pi, { sum } from './math.js';

console.log(pi);        // 3.14
console.log(sum(1, 2)); // 3

**// ----- import()（动态导入）示例：✔ 异步、可按需加载、适合减少首屏体积 -----**
// math.js
export const sum = (a, b) => a + b;
export default 3.14;

// main.js（动态导入）
function loadMath() {
  import('./math.js').then(module => {
    console.log(module.default);      // 3.14
    console.log(module.sum(1, 2));    // 3
  });
}

loadMath();

**// ----- require（CommonJS）示例：✔ 同步调用，导入的是值拷贝（基础类型拷贝，引用类型浅拷贝） -----**
// math.cjs
const sum = (a, b) => a + b;
module.exports = { pi: 3.14, sum };

// main.cjs（CommonJS 导入）
const { pi, sum } = require('./math.cjs');

console.log(pi);        // 3.14
console.log(sum(1, 2)); // 3

```