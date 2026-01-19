---
titleEn: "Methods for Converting Object Arrays"
titleCh: "类数组的转化方式"
tags: ["JavaScript"]
---

1. **什么是类数组**
    1. **原理**：类数组是**像数组但不是真数组**的对象，必须同时满足：
        - 拥有 **`length`** 属性
        - 可通过**索引**访问元素（如 `arguments[0]`）
        - 但**不具备数组的方法**（如 `push`、`forEach`）
    2. `arguments` 是函数内部的类数组对象，可读取所有传入参数。
    
    ```jsx
    function sum() {
      let res = 0;
      for(let i = 0; i < arguments.length; i++) res += arguments[i];
      return res
    }
    const res = sum(2, 5, 8);
    console.log(res);      // 15 (arguments 对应的就是函数调用传入的实参)
    ```
    
2. **将类数组转化为数组的集中方法**
    1. **扩展运算符（最简洁）**
        - 原理：用 `...` 展开类数组，再组成真正的数组。
        - 语法：`[...arguments]`
        
        ```jsx
        function sum() {
          return [...arguments]
        }
        const res = sum(2, 5, 8);
        console.log(res);      // [2, 5, 8]
        ```
        
    2. **`Array.from`（专用于类数组/可迭代对象）**
        - 原理：`Array.from` 能直接把具有 length 的对象转换为数组。
        - 语法：`Array.from(arguments)`
        
        ```jsx
        function sum() {
          return Array.from(arguments)
        }
        const res = sum(2, 5, 8);
        console.log(res);      // [2, 5, 8]
        ```
        
    3. **slice（经典写法，利用数组原型）**
        - 原理：借用数组的 slice，让类数组以 `this` 方式被处理。
        - 语法：
            - `Array.prototype.slice.call(arguments)`
            - `[].slice.call(arguments)`
        
        ```jsx
        function sum() {
          return [].slice.call(arguments)
        }
        const res = sum(2, 5, 8);
        console.log(res);      // [2, 5, 8]
        ```