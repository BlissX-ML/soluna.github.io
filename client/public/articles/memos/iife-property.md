---
titleEn: "Characteristics of IIFE"
titleCh: "立即调用函数表达式（IIFE）的特点"
tags: ["JavaScript"]
---

1. **定义与作用**
    1. 原理：IIFE = **定义后立即执行的函数表达式**，不会留下函数名，不会污染全局。
    2. 作用：创建**独立作用域**，隔离变量。
2. **主要特点**
    1. 原理：函数被包在 `( )` 内，强制视为表达式；随后再用 `( )` 立即执行。
    2. 示例：`(function(){ console.log("run"); })();`
3. **特点总结**
    1. 原理：独立作用域；不污染全局；立即执行
    2. IIFE 返回值：给变量赋值时，变量保存的是**执行结果**，不是函数本身。
    
    ```jsx
    (function(){ let a = 1; })();
    console.log(a);   // ReferenceError (外部不能获得内部的变量)
    
    const x = (function(){ return 10; })();
    console.log(x);   // 10 (x 变量包裹的是执行的结果)
    ```
    
4. IIFE 的典型应用：**模块化封装**
    1. 原理：把数据变成私有变量，外部只能使用返回的 API。
    
    ```jsx
    const counter = (function(){
      let i = 0;
      return { get: () => i, inc: () => ++i };
    })();
    
    console.log(counter.inc());  // 1
    console.log(counter.inc());  // 2
    console.log(counter.get());  // 2
    
    console.log(counter.i);      // undefined
    ```
    

---

```jsx
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);     // 3 3 3 （var是函数作用域，所有回调共享一个 i）
}

for(var i = 0; i < 3; i++) {
  (function(el) {
    setTimeout(() => console.log(el), 1000);  // 0 1 2（将当前的 i 作为此时 setTimeout 回调的参数）
  })(i)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);     // 0 1 2 （let 是块级作用域，for 每次循环都会为 i 创建一个新的独立副本）
}
```