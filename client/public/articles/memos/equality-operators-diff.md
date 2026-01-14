---
titleEn: "What’s the Difference Between `==`, `===`, and `Object.is()`?"
titleCh: "`==`, `===` 和 `Object.is()` 的区别是什么？"
tags: ["JavaScript"]
---


1. `==`（抽象相等）
    1. 原理：会进行隐式类型转换，再比较值。
    2. 特点：
        - 会把不同类型先转成相同类型
        - 容易出现“奇怪的相等”
        - 示例：
            
            ```jsx
            1 == '1'     // true
            null == undefined // true
            
            ```
            
2. `===`（严格相等）
    1. 原理：不做类型转换，类型不同直接 false。
    2. 特点：
        - 最常用、最安全的比较方式
        - 示例：
            
            ```jsx
            1 === '1'   // false
            NaN === NaN // false
            
            ```
            
3. [`Object.is](http://object.is/)()`（ES6 新增的精确相等）
    1. 原理：大部分情况与 `===` 相同。
    2. 特点（只在两处与 `===`不同）：
        - `0` 和 `+0`：不相等
        - `NaN` 和 `NaN`：相等
            
            ```jsx
            Object.is(-0, +0); // false
            Object.is(NaN, NaN); // true
            ```
            
    3. 用法：在需要判断 `NaN` 或区分 `-0/+0` 时更准确。

4. 一句话总结
    - **== 会类型转换**，不推荐用于判断。
    - **=== 不转换，是日常最常用的比较方式。**
    - [**Object.is](http://object.is/) 更严格：区分 ±0，认 NaN 为相等。**