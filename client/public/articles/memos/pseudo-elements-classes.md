---
titleEn: "Pseudo-elements and Pseudo-classes"
titleCh: "伪元素与伪类"
tags: ["CSS"]
---


1. **伪类（Pseudo-class）**
    - 本质：用于表示元素**处于某种状态**时的样式，不创建新元素。
    - 常见示例：
        - `:hover`（鼠标移入）
        - `:active`（按下）
        - `:focus`（获得焦点）
        - `:visited`（访问过）
2. **伪元素（Pseudo-element）**
    - 本质：用于**创建一个不在 DOM 文档树中的虚拟元素**，会生成一个可见的虚拟节点。
    - 常见示例：
        - `::before`（在元素前生成虚拟内容）
        - `::after`（在元素后生成虚拟内容）
        - `::first-line`（元素的第一行文本）
        - `::first-letter`（第一行的第一个文字，通常是一个字母或字符）
3. **核心区别**
    - 伪类：改变**状态**，不产生新节点
    - 伪元素：**创建虚拟元素**，可加内容