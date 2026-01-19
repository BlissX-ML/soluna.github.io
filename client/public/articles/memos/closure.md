---
titleEn: "Closure"
titleCh: "闭包"
tags: ["JavaScript"]
---

1. **定义**
    - 闭包通过内嵌函数实现内部函数对外部函数变量的引用
    - 本质：**闭包 = 内部函数 + 外部函数的词法作用域**
    - 内部函数始终能访问外层的局部变量（即使外层函数已执行完）
2. **闭包的核心能力**
    1. **原理**：闭包的本质是**记住外层变量**，因此可用于：
        - 读取外部变量（作用域访问）
        - 保护外部变量（模拟私有变量）
        - 持久化外层状态（缓存）
        - 在循环中保存独立变量（解决 var 闭包问题）
    2. 必须把 **返回的函数** 存下来并重用，否则不会触发外层变量的更新
3. **闭包形成条件**
    - 函数嵌套
    - 内部函数引用外部函数的局部变量
4. **闭包缺点**： 闭包让变量不会被垃圾回收，**过度使用可能导致内存泄漏**
5. **闭包应用场景**
    - **事件/回调函数**（点击、Ajax、setTimeout）
    - 返回函数（工厂函数、柯里化）
    - 模拟私有变量（封装状态）
6. **示例（计数器）**

    ```jsx
    // ----- 闭包模拟私有变量 -----
    const counter = (function(){
      let n = 0;
      return { 
        inc: () => n++, 
        value: () => n,
      };
    })();
    
    console.log(counter.inc());    // 0
    console.log(counter.value());  // 1
    
    console.log(counter.inc());    // 1
    console.log(counter.value());  // 2
    
    // ----- 持久化变量 -----
    function createInc(v){
      let idx = 0;
      return (step) => [idx++, v += step];
    }
    
    const inc = createInc(0);   // 先保存返回的函数，再进行调用
    
    console.log(inc(5));    // [0, 5]
    console.log(inc(5));    // [1, 10]
    console.log(inc(5));    // [2, 15]
    
    // ----- 解决 var 闭包的问题 -----
    for (var i = 1; i <= 3; i++){
      ((x) => setTimeout(() => console.log(x), x * 1000))(i);
    }
    ```
