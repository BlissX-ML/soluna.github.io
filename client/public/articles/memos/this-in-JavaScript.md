---
titleEn: "this in JavaScript"
titleCh: "JS 中 this 的用法"
tags: ["JavaScript"]
---


1. **普通函数调用**：`fn()`
    - **`this` 代表全局对象 `window`**
    - **注意**：
        - `let/const` 声明的变量不挂在 `window` 上
        - `let a = 1;` 不是 `window.a`
    
    ```jsx
    function fn() { 
    	console.log(this); 
    }
    
    fn();     // window（严格模式下 undefined）
    ```
    
2. **构造函数调用**：`new Person()`
    - `this` 代表新创建的实例对象
    
    ```jsx
    function Person() { this.name = "Tom"; }
    let a = new Person();
    let b = new Person();
    
    a.name = 'Chill';
    
    console.log(a.name);   // "Chill"
    console.log(b.name);   // "Tom"
    ```
    
3. **对象方法调用**：`obj.fn()`
    - `this` 代表当前对象 `obj`
    
    ```jsx
    let obj = { 
      name: "obj",
      fn() { console.log(this.name); }
    };
    
    obj.fn();     // "obj"
    ```
    
4. **函数作为数组元素调用**：`arr[0]()`
    - `this` 代表该数组 `arr`
    
    ```jsx
    let arr = [
      function() { console.log(this[1]); },
      'Mike',
      6
    ];
    
    arr[0]();   // "Mike"
    ```
    
5. **箭头函数**：
    - **没有自己的 this**
    - `this` 代表**外层作用域的 this**（定义时决定，**无法修改**）
    
    ```jsx
    var game = 'Magic'
    let obj = {
      fnAll: () => { console.log(this); },
      fnGame: () => { console.log(this.game); }
    };
    
    obj.fnAll();     // window
    obj.fnGame();    // "Magic", Because `game` is defined by `var`, similiar with `window.game`
    
    function Person() { 
      this.age = 25;
      this.name = 'George';
      
      this.fn = () => console.log(this.name);
      this.obj = {
        fn: () => console.log(this.age)
      }
    }
    
    let p = new Person();
    p.fn();       // "George"
    p.obj.fn();   // 25
    ```
    
6. **apply / call / bind 调用**：
    - `fn.call(thisArg, arg1, arg2, ...)`
        - **立即调用**函数，参数按顺序依次传入
        - **用法**：**临时改变**函数的 `this`
    - `fn.apply(thisArg, [argsArray])`
        - **立即调用**函数，第二个参数必须是数组/类数组
        - **用法**：和 call 几乎一样，只是传参方式不同
    - `fn.bind(thisArg, arg1, arg2, ...)`
        - **不会立即调用**，返回一个新的函数
        - **用法**：需要后面再调用时用（事件、回调），保证函数在执行时 this 永远指向某个对象
    - 第一个参数都是要绑定的对象
    - 若为 `null/undefined`，`this` 代表 `window`（严格模式下是 `undefined`）
7. **定时器回调函数**：
    - `setTimeout(fn)` / `setInterval(fn)`
    - **`this` 代表 `window`（严格模式下是 `undefined`）**
    
    ```jsx
    setTimeout(function() {
      console.log(this);
    }, 1000);     // window（严格模式下 undefined）
    ```
    
8. **总结**：普通 window，谁点谁就是谁；new 出新对象；定时器 window；箭头看外层；call/apply 改 this，bind 留到以后用。