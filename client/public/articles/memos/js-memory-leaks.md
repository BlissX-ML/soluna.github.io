---
titleEn: "What are the different types of memory leaks in JavaScript?"
titleCh: "JavaScript 中内存泄漏有哪几种情况"
tags: ["JavaScript"]
---

1. **内存泄漏的基本概念**
    1. **内存泄漏**：不再使用的内存没有被释放，长期占用内存空间
    2. JS 中主要发生在**堆内存**（对象、数组、函数、DOM 引用等）
    3. 泄漏严重会导致内存持续增长，最终页面卡顿或崩溃
2. **常见内存泄漏场景**
    1. **隐式全局变量**：未声明直接赋值的变量会挂到全局对象上
    2. **未清除的定时器**：`setInterval` / `setTimeout` 持续引用外部变量
    3. **游离 DOM 引用**：DOM 节点已从页面移除，但仍被 JS 变量引用
    4. **闭包**：长期持有外层作用域变量。
3. **各类泄漏的本质原因**
    - 对象**仍可达**（仍被引用），GC 无法回收
    - JS 引擎判断对象是否可回收的依据是是否还能被访问
4. **调试与排查方式**
    - Chrome DevTools：
        - Performance：观察内存随时间是否持续增长。
        - Memory：通过 Heap Snapshot 查找未释放对象。
    - 重点关注：
        - 全局对象引用
        - 定时器
        - DOM 节点数量是否异常增长
        - 闭包中的大对象