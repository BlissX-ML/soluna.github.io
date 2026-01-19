---
titleEn: "The result of typeof null"
titleCh: "typeof null 的输出"
tags: ["JavaScript"]
---

1. `typeof null` 的结果为什么是 object？
    1. 原因：这是 **JavaScript 早期遗留下来的历史 bug**。
    2. 本质：在 JS 第一个版本里，值用 32 位存储，其中底部几位用来表示“类型标签”。
    3. `null` 的二进制类型标签是 **000**，正好和**对象**的标签一样，因此 `typeof null === "object"`
2. 为什么不修？
    - 因为修复会导致无数旧代码报错，所以只能一直保留这个 bug。