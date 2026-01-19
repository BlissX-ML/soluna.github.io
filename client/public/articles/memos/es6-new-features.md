---
titleEn: "New features in ES6"
titleCh: "ES6 的新特性"
tags: ["JavaScript"]
---

1. **变量与作用域相关**
    1. `let / const`（块级作用域、禁止重复声明）
    2. 暂时性死区（TDZ）
2. **函数相关增强**
    1. 箭头函数（更简洁、不绑定 this）
        - `const sum = (a, b) => a + b`
    2. 函数参数默认值（参数可直接给默认值）
        - `function sum(a = 1, b = 2) { console.log(a + b) }`
    3. 函数简写（对象方法可省略 function）
        - `sum(a, b) { console.log(a + b); }`
3. **字符串与模板相关**
    1. 模板字符串（支持变量插值和多行字符串）
        - `const res = `${name} is great!``
4. **结构化赋值**
    1. 解构赋值（数组、对象快速取值）
        - `const [a, b] = [1, 5, 6];  // a = 1, b = 5`
        - `const {name, age} = {name: 'Liu', age: 25 }`
5. **扩展语法（Spread / Rest）**
    1. 展开语法 `...`（展开数组、对象、字符串）
    2. 剩余参数 `...`（收集函数剩余参数）
    3. 调用函数时可展开数组 / 字符串（如 `fn(...arr)`）
6. **对象增强语法**
    1. 对象属性缩写（key 与变量名相同时可简写）
        - `const obj = { name };`
    2. 对象方法简写，如省略 `function`
        - `const obj = { add(x) { return x+1 } };`
    3. 计算属性名，即将定义的变量作为属性传递
        - `const obj = { [key]: 25 };  // key = 'age'`
7. **异步处理能力升级**
    1. `Promise`（更好的异步流程控制）
    
    ```jsx
    const p = new Promise((resolve, reject) => {
      const ok = true;
      if (ok) resolve('成功了');
      else reject('失败了');
    });
    
    p.then(res => {
      console.log(res);   // 成功了
    }).catch(err => {
      console.log(err);   // 失败了
    });
    ```
    
8. **面向对象增强**
    1. `Class`（类的语法糖）
    2. `constructor` / `extends` / `super`
    
    ```jsx
    class Animal {
      constructor(name) { this.name = name; }
      speak() { console.log(this.name + ' 发出声音'); }
    }
    
    class Dog extends Animal {
      constructor(name) { super(name); }  // 调用父类构造器 
      speak() { console.log(this.name + ' 汪汪！'); }
    }
    
    const d = new Dog('小黑');
    d.speak();  // 小黑 汪汪！
    ```
    
9. **模块化能力**
    - `import` / `export`（官方模块系统）
    - 直接在浏览器里用 ES6 的 import/export，需要加一个属性：`type="module"`
        - `<script type="module" src="main.js"></script>`