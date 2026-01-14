---
titleEn: "The meaning of `||=`, `&&=`, and `??=`"
titleCh: "`||=`, `&&=` 和 `??=` 的含义"
tags: ["JavaScript"]
---


1. `x ||= y`（逻辑或赋值）
    1. 原理：如果 x 是假值（`false / 0 / '' / NaN / Null / undefined`），则把 y 赋给 x。
    2. 等价写法：`if (!x) x = y;`
    3. **示例**：
        
        ```jsx
        let title = '';
        title ||= 'default';
        console.log(title); // 'default'
        ```
        
2. `x &&= y`（逻辑与赋值）
    1. 原理：如果 x 是真值，则把 y 赋给 x。
    2. 等价写法：`if (x) x = y;`
    3. 示例：
        
        ```jsx
        let count = 10;
        count &&= 5;
        console.log(count); // 5
        ```
        
3. `x ??= y`（空值赋值）
    1. 原理：如果 x 是 `null` 或 `undefined`，则把 y 赋给 x
    2. 等价写法：`if (x === null || x === undefined) x = y;`
    3. 示例：
        
        ```jsx
        let name = null;
        name ??= 'anonymous';
        console.log(name); // 'anonymous'
        ```
        
4. 一句话总结
    - `||=`：假了才改
    - `&&=`：真了才改
    - `??=`：空了才改（null / undefined）