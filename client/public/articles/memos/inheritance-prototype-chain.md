---
titleEn: "Inheritance and prototype chain"
titleCh: "继承和原型链"
tags: ["JavaScript"]
---

1. **原理**：继承基于**对象 → 原型对象 → 更上层原型对象**这一条原型链
    - 每个对象内部都有隐藏属性 `[[Prototype]]`，对外暴露为 `__proto__`
    - 构造函数的 `prototype` 是**实例对象的原型对象**（`实例.__proto__ → 构造函数.prototype`）
    - 原型对象本身也有原型，一直向上直到 `Object.prototype.__proto__ === null`
    - 查属性时：**先查自身 → 再查原型 → 再往上查原型… → 最终 null 为止**
2. **示例**：展示原型链结构
    - **原理**：实例指向`构造函数.prototype`，构造函数指向 `Function.prototype`，最顶层是 `null`
        
        ```jsx
        function Person(name){ this.name = name; }
        const p1 = new Person("John");
        
        p1.__proto__ === Person.prototype;                 // true
        Person.__proto__ === Function.prototype;           // true
        Function.prototype.__proto__ === Object.prototype; // true
        Object.prototype.__proto__ === null;               // true
        ```
        
3. **原理**：原型链允许**共享方法**（代码复用）
    - 所有实例共享`构造函数.prototype` 上的方法，不会重复占用内存
    - 查不到属性时，会沿原型链继续查直到 `null`
    - **性能注意点**
        - 原型链越长，查属性逐层向上越慢。
        - 访问不存在的属性会遍历完整链条，所以有额外开销。
    - **示例**：方法复用与 `hasOwnProperty` 判定
        - 原理：共享方法来自原型；区分**自身属性**和**继承属性**用 `hasOwnProperty`
        
        ```jsx
        Person.prototype.greet = function(){ return "Hi " + this.name; }
        
        const p1 = new Person("John");
        
        p1.greet();                     // 来自原型
        p1.hasOwnProperty("name");      // true  → 自身属性
        p1.hasOwnProperty("greet");     // false → 来自原型链
        ```