---
titleEn: "Performing deep and shallow copies"
titleCh: "实现深拷贝和浅拷贝"
tags: ["JavaScript"]
---


1. **浅拷贝（Shallow Copy）**
    1. 原理：只复制第一层；若内部仍是引用类型，则新旧对象共享引用。
    2. **示例**：
        
        ```jsx
        const a = { x: { y: 1 } };
        const b = { ...a };
        a.x.y = 2;
        console.log(b.x.y);    // 2（共享引用 → 浅拷贝）
        ```
        
    3. **常见浅拷贝方法**
        - 原理：赋值、展开、`slice`、`Object.assign`、`Array.from` 都只能复制一层
        - **示例**：
            
            ```clojure
            const a = [1, 2, [3, 4]];
            
            const b = [...a];
            const c = a.slice();  
            const d = Object.assign([], a);
            const e = Array.from(a);
            
            console.log(d);    // [1, 2, [3, 4]]
            d[2][0] = 6;
            console.log(a);    // [1, 2, [6, 4]]
            console.log(c);    // [1, 2, [6, 4]]  <- 虽然修改的是d，但是 c 也跟着变了
            
            d[0] = 5;
            console.log(a);    // [1, 2, [6, 4]]
            console.log(d);    // [5, 2, [6, 4]]  <- 只有 d 变了，因为这里是浅拷贝下来的数据，不是引用类型
            ```
            
2. **深拷贝（Deep Copy）**
    1. **原理**：递归复制所有层级；每一层都生成全新对象，不共享引用。
    2. **示例**：
        
        ```jsx
        const a = [[1]];
        const b = structuredClone(a);
        a[0][0] = 9;
        console.log(b[0][0]); // 1（深拷贝）
        ```
        
    3. **常见深拷贝方法**
        - `JSON.parse(JSON.stringify(object))`
            - 会丢失类型，如`NaN`, `Undefined`, `RegExp`, `Infinity` 等等
        - `structuredClone`（现代标准）
        - `_.cloneDeep（lodash）`
        - 自定义递归（可处理循环引用、Date、RegExp）
3. **自定义深拷贝的核心逻辑**
    - 原理：递归复制 + 用 WeakMap 记录已拷贝对象以处理循环引用。
    - 示例：
        
        ```jsx
        function deepCopy(obj, cache = new WeakMap()) {
          if (typeof obj !== "object" || obj === null) return obj;
          if (cache.has(obj)) return cache.get(obj);
        
          const res = Array.isArray(obj) ? [] : {};
          cache.set(obj, res);
        
          for (const k in obj) res[k] = deepCopy(obj[k], cache);
          return res;
        }
        ```