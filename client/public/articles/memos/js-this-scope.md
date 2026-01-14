---
titleEn: "The Scope of this in JavaScript"
titleCh: "JavaScript 中 this 的指向"
tags: ["JavaScript"]
---


1. **全局上下文**
    1. 原理：在全局作用域中，this 指向全局对象（浏览器是 `window`，Node 是 `global`）
    2. 示例： `console.log(this === window);  // true`
2. **普通函数调用**
    1. 非严格模式：`this` → 全局对象
    2. 严格模式：`this` → `undefined`
    
    ```jsx
    function f(){ return this; }
    f();  // window（浏览器）
    ```
    
3. **作为对象方法调用**
    1. 原理：谁调用方法，`this` 就指向谁。
    
    ```jsx
    const obj = { 
    	x: 1, 
    	f(){ return this.x; } 
    };
    
    obj.f();   // this → obj
    ```
    
4. **`call / apply / bind` 显式绑定**
    1. 原理：`this` 被强制绑定到指定对象。
    2. 不传参数时，this 默认指向全局对象（window）
    
    ```jsx
    function add(c){ 
    	return this.a + c; 
    }
    
    add.call({a: 1}, 5);   // this → {a:1}
    ```
    
5. **构造函数 / `class` 调用**
    1. 原理：`this` 指向 `new` 创建的实例对象
    
    ```jsx
    function Person(name){ 
    	this.name = name; 
    }
    
    new Person("John");    // this → 新对象
    ```
    
6. **箭头函数**
    1. 原理：箭头函数**没有自己的 this**，它继承外层作用域的 `this`（词法绑定）。
    
    ```jsx
    const obj = {
      f: () => this
    };
    ```
    
7. **原型链调用**
    1. 原理：方法在原型上，但 this 指向实际调用的对象。
    
    ```jsx
    const p = Object.create({ f(){ return this.x } });
    p.x = 10;
    p.f();    // 10 (this → p)
    ```
    
8. **DOM 事件回调**
    1. 原理：this 指向触发事件的 DOM 元素。
    
    ```jsx
    btn.onclick = function(){ console.log(this); };
    ```
    
9. **`getter / setter`**
    1. 原理：this 指向访问该属性的对象。
    
    ```jsx
    const o = {
      a: 1, 
      b: 2,
      get sum(){ return this.a + this.b; }
    };
    
    console.log(o.sum);   // 3
    
    ```
    

---

```jsx
var length = 10;

function fn() { return this.length + 1; }

var obj = {
  length: 5,
  test1: function() { return fn(); },
  test3: () => fn(),
  test4: function() { length: 1; return () => this.length + 2; }
};

// 相当于把函数 `fn` 赋值给 `obj`，变成 `obj.test2` 方法
obj.test2 = fn;

console.log(obj.test1.call());   // 11 → this = window，fn() 使用 window.length = 10
console.log(obj.test1());        // 11 → test1 的 this = obj，但内部 fn() 是普通调用 → this = window → 10+1

console.log(obj.test2.call());   // 11 → this = window
console.log(obj.test2());        // 6 → this = obj，obj.length = 5 → 5+1 = 6

console.log(obj.test3.call());   // 11 → 箭头函数继承定义位置（全局）this = window
console.log(obj.test3());        // 11 → 同上 this = window

console.log(obj.test4.call()());  // 12 → test4.call() 的 this = window，箭头函数继承 window.length = 10 → 10+2=12
console.log(obj.test4()());       // 7 → test4() 的 this = obj，箭头函数继承 obj.length = 5 → 5+2=7
```