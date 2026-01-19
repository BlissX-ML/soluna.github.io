---
titleEn: "Distinguishing between Map and WeakMap"
titleCh: "区分 Map 和 WeakMap"
tags: ["JavaScript"]
---

1. **定义差异**
    1. **原理**：
        - Map 的 key 可以是任意类型
        - WeakMap 的 key **必须是对象**且为弱引用。
    2. 示例：
        
        ```jsx
        new Map().set("x", 1);       // ✔
        new WeakMap().set({}, 1);    // ✔
        new WeakMap().set("x", 1);   // ✘ 不能用原始类型
        ```
        
2. **可枚举性差异**
    1. 原理：
        - Map 可枚举（可 `for…of` 遍历）
        - WeakMap 不可枚举（无法遍历、不暴露内部结构）。
    2. 示例：
        
        ```jsx
        for (const x of new Map([["a",1]])) {}   // ✔
        for (const x of new WeakMap()) {}        // ✘ 报错
        ```
        
3. **垃圾回收差异**
    1. 原理：
        - WeakMap 的 key 是弱引用，**若 key 对象没有其他引用，将自动被 GC 清除**
        - Map 不具备此能力。
    2. 示例：
        
        ```jsx
        let obj = {};
        const wm = new WeakMap();
        wm.set(obj, 123);
        obj = null;    // 下次 GC 时 WeakMap 的这条记录会自动消失
        ```
        
4. **size 属性差异**
    1. 原理：
        - Map 有 size
        - WeakMap 因为不可枚举，不提供 size
    2. 示例：
        
        ```jsx
        new Map([["a",1]]).size;   // 1
        new WeakMap().size;        // undefined
        ```
        
5. **WeakMap 的意义**：自动随对象一起被回收，用来**存跟对象绑定的临时数据**，不用手动清理。
    
    ```jsx
    const wm = new WeakMap();
    const obj1 = {};
    let obj2 = {};
    
    wm.set(obj1, 111);
    wm.set(obj2, 222);
    
    console.log(wm.has(obj2));    // true
    
    obj2 = null; 
    
    console.log(wm.has(obj2));    // false
    ```