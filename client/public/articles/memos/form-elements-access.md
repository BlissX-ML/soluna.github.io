---
titleEn: "Methods for obtaining form elements"
titleCh: "获取表单元素的方式"
tags: ["JavaScript"]
---

1. **根据 id**
    - 示例：`document.getElementById("id值")`
    - 返回：单个元素或 `null`
    - 特点：对单个 DOM 节点的**直接引用**（单体，非集合，不会自动更新指向其他节点）。若节点删除，变量会指向之前的引用，变成无效对象
2. **根据标签名**
    - 示例：`document.getElementsByTagName("标签名")`
    - 返回：HTMLCollection（活集合，随 DOM **动态**更新）
3. **根据类名**
    - 示例：`document.getElementsByClassName("类名")`
    - 返回：HTMLCollection（活集合，随 DOM **动态**更新）
4. **根据 name 属性**
    - 示例：`document.getElementsByName("name值")`
    - 返回：NodeList（**动态**，随 DOM 动态更新）
5. **根据选择器**
    - 示例：`document.querySelector("选择器")` → 返回第一个匹配元素
    - 示例：`document.querySelectorAll("选择器")` → 返回 NodeList（**静态**集合）
