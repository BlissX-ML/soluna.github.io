---
titleEn: "Modular development timeline"
titleCh: "模块化发展历程"
tags: ["JavaScript"]
---

1. **模块化的基本前提**
    1. 模块就是一个文件
    2. 用 `export` 暴露内容，用 `import` 引入内容
    3. 目的：解决**代码拆分**、**命名冲突**、依赖管理等问题
2. **模块化的发展阶段**
    1. 早期方案
        - 命名空间：用**对象存放变量**；缺点是所有属性可被外部修改。
        - IIFE：利用**闭包**实现私有变量；依赖可通过传参方式注入。
    2. 规范时代
        - CommonJS（Node.js）
            - **文件即模块**，独立作用域。
            - `module.exports` 暴露内容，`require` 加载模块
            - 加载结果会缓存，输出是值拷贝。
            
            ```jsx
            const express = require("express");
            module.exports = xxx;
            ```
            
        - AMD（浏览器异步加载）
            - 依赖前置：`define([...], fn)`
            - require.js 是主要实现
        - CMD（Sea.js）
            - 依赖就近：在代码使用前 `require`。
            - 同时支持同步 `require` 和异步 `require.async`
        - UMD（通用模块）
            - 兼容 AMD / CommonJS / CMD。
            - 检测当前环境，选择对应规范；否则挂载到全局对象。
    3. **标准方案**：ES6 模块（ESM）
        - 静态分析：`import` 在编译阶段处理。
        - `export` 可以导出多个绑定；`export default` 只能导出一个默认值。
        - `import` 会获得模块的引用，不是拷贝；模块内变化会**实时反映**。
        - 不做值缓存，保持动态绑定。
3. **全文核心总结**
    - 模块化演进目标：避免污染全局 → 管理依赖 → 支持异步 → 支持跨端 → 支持静态分析。
    - ESM 是最终标准：静态分析、实时引用、语法简洁。