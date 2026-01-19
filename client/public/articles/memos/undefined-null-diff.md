---
titleEn: "Distinguishing undefined and null"
titleCh: "区分 undefined 和 null"
tags: ["JavaScript"]
---

1. **`undefined` 与 `null` 的含义**
    1. `undefined`：变量声明但未赋值，或某些值不存在时的默认结果
    2. `null`：人为**清空**一个值，用作对象的初始值或占位符
    3. `undefined` 是系统给的默认值，`null` 必须人为赋值。
2. **`undefined` 不是 `undeclared`**
    1. `undefined`：变量声明过，只是没有值。
    2. `undeclared`：变量从未声明，使用会报错（`ReferenceError`）
3. **`undefined` 的安全获取方法**
    1. 由于 undefined 是可写的标识符，理论上可能被改写。
    2. 使用 `void 0` 始终得到真正的 `undefined`，`console.log(void 0);  // undefined`