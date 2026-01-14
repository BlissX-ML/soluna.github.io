---
titleEn: "Methods for Checking Data Types in JavaScript"
titleCh: "JavaScript 判断数据类型的方法"
tags: ["JavaScript"]
---

1. `typeof`
    1. **原理**：返回一个**字符串**，表示基本类型或 object。
    2. **优点**：可判断基本类型（`string/number/boolean/undefined/symbol/bigint/**function**`）
    3. **缺点**：
        - `null` 会被判断为 `"object"`（历史 bug）
        - `object` 细分不出来（Array、Date 等分不清）
    4. **示例**：
        
        ```jsx
        typeof 123    // 'number'
        typeof null   // 'object'  ← bug
        typeof []     // 'object'
        ```
        
2. `instanceof`
    1. **原理**：判断某个构造函数的 `prototype` 是否在**对象的原型链**上。
    2. **优点**：可判断具体的**引用类型**（Array、Date 等）。
    3. **缺点**：
        - **不**能判断基本类型
        - 跨 iframe 会失效（不同全局环境）
    4. **示例**：
        
        ```jsx
        [] instanceof Array   // true
        new Date() instanceof Date // true
        ```
        
3. `constructor`
    1. **原理**：每个对象都有 constructor 属性，指向其**构造函数**。
    2. **优点**：能判断对象**来自哪个构造函数**
    3. **缺点**：
        - `constructor` 可被修改
        - `Object.create(null)` 没有 `constructor`
    4. **示例**：
        
        ```jsx
        ({}).constructor === Object   // true
        ([]).constructor === Array    // true
        
        function Person(name) { this.name = name; }
        const p = new Person('Tom');
        console.log(p.constructor === Person);     // true
        console.log(p.constructor === Object);     // false
        
        const o = {};
        o.constructor = Array;
        console.log(o.constructor === Array);   // true
        ```
        
4. `Object.prototype.toString`（最准确）
    1. **原理**：返回标准格式 `[object Type]`
    2. **优点**：所有类型都能准确判断（包括 `null`、`undefined`）
    3. **缺点**：写法稍微繁琐
    4. 示例：
        
        ```jsx
        Object.prototype.toString.call([])         // "[object Array]"
        Object.prototype.toString.call(null)       // "[object Null]"
        Object.prototype.toString.call(undefined)  // "[object Undefined]"
        
        console.log(Object.prototype.toString.call([]) === 'Array');           // false
        console.log(Object.prototype.toString.call([]) === '[object Array]');  // true
        ```
        
5. **一句话总结**
    - typeof：判断基本类型（但 null 有 bug，object 不细分）
    - instanceof：判断引用类型（跨作用域不可靠）
    - constructor：能判断构造函数，但可被改写
    - Object.prototype.toString：**最准确、最推荐**