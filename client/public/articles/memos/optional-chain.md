---
titleEn: "Optional chain ?."
titleCh: "可选链 ?."
tags: ["JavaScript"]
---

1. 可选链 `?.` 的作用
    1. **原理**：当访问的对象为 `null` 或 `undefined` 时，**不报错**，直接返回 `undefined`
    2. 功能：用于**安全地访问深层属性**，不需要写一堆 `a && a.b && a.b.c` 的判断。
2. 属性访问中的使用
    1. 原理：`obj?.prop` 如果 `obj` 是 `null/undefined` → 返回 `undefined`
    2. 示例：
        
        ```jsx
        let person = { name: 'Tom' };
        console.log(person.details?.age);   // undefined（不报错）
        ```
        
3. 函数调用中的使用
    1. 原理：`obj.func?.()` 如果 `func` 不存在 → 不调用，返回 undefined。
    2. 示例：
        
        ```jsx
        let person = { name: 'Tom' };
        person.getGender?.();   // 安全，不报错
        ```
        
4. 可选链 + 空值合并（设置默认值）
    1. 原理：使用 `??` 给 `undefined` 的情况提供默认值。
    2. 示例：
        
        ```jsx
        let person = { name: 'Tom' };
        let city = person.address?.city ?? '默认值';
        console.log(city);   // '默认值'
        ```
        
5. 一句话总结
    - `?.` 用来安全访问属性或方法，遇到 `null/undefined` 不报错，返回 `undefined`