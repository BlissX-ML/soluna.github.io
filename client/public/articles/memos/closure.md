---
titleEn: "Closure"
titleCh: "闭包"
tags: ["JavaScript"]
---


1. **定义**
    - 闭包通过内嵌函数实现内部函数对外部函数变量的引用
    - 本质：**函数 + 其词法环境的组合**
    - 闭包会让**外部函数的作用域链保持在内存中**
    - **函数可以记住并访问其词法作用域中的变量，即使函数在外部被调用**。
2. **闭包特性**
    - 内部函数访问外部变量
    - 延长变量生命周期
    - 可隐藏变量，避免全局污染
3. **闭包形成条件**
    - 函数嵌套
    - 内部函数引用外部函数的局部变量
4. **闭包缺点：**闭包让变量不会被垃圾回收，**过度使用可能导致内存泄漏**
5. **闭包应用场景**
    - **事件/回调函数**（点击、Ajax、setTimeout）
    - 返回函数（工厂函数、柯里化）
    - 模拟私有变量（封装状态）
6. **示例（计数器）**
    
    ```jsx
    function createCounter() {
      let count = 0;   // 外部变量
    
      return function () {   // 内部函数形成闭包
        count++;
        return count;
      };
    }
    
    const counter = createCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2
    console.log(counter()); // 3
    ```
    

