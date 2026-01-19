---
titleEn: "Distinguish between ??, ||, and ??=."
titleCh: "区分 ??，||, ??="
tags: ["JavaScript"]
---

1. **空值合并运算符 `??`**
    1. **原理**：只把 `null` 和 `undefined` 视为空值。
    2. **表达式**：`a ?? b`
        - a 是空值则返回 b，否则返回 a
    3. **示例**：
        
        ```jsx
        let first = null;
        let fullName = first ?? 'Sun';    // 'Sun'
        ```
        
2. **`??` 与 `||` 的区别**
    1. **相同点**：都能给空值变量提供默认值
    2. **不同点**：
        - `??` 只判断：`null / undefined`
        - `||` 会判断所有假值：`0`、`""`、`NaN`、`null`、`undefined`
    3. **示例**：
        
        ```jsx
        '' ?? 'Sun'    // ''
        '' || 'Sun'    // 'Sun'
        ```
        
3. **逻辑空赋值运算符 `??=`**
    1. **原理**：`A ??=` 表示如果 A 是 `null` 或 `undefined`，则 A = B
    2. **示例**：
        
        ```jsx
        let name = null;
        name ??= 'yangyang';
        console.log(name); // 'yangyang'
        ```