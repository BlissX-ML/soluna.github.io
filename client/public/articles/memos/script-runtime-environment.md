---
titleEn: "Determine the script runtime environment"
titleCh: "判断脚本运行环境"
tags: ["JavaScript"]
---

1. **核心思路**
    - 判断**全局对象是谁**，即可区分运行环境。
    - 浏览器的全局对象是 `window`，Node.js 的全局对象是 `global`
2. **顶级作用域差异（理解用）**
    - 浏览器中：`var` 声明会挂到 `window` 上。
    - Node 中：每个文件都是模块，**`var` 不会挂到 `global`**
3. **常用判断方式（推荐）**
    - 判断 `window` 是否存在 → 浏览器环境
    - 判断 `global` 是否存在 → Node 环境
4. **结合 `Object.prototype.toString` 的严谨写法**
    
    ```jsx
    const isBrowser =
      typeof window !== "undefined" &&
      Object.prototype.toString.call(window) === "[object Window]";
    
    const isNode =
      typeof global !== "undefined" &&
      Object.prototype.toString.call(global) === "[object global]";
    ```