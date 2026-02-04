---
titleEn: "D3.js Event Handling"
titleCh: "D3.js 响应事件处理"
tags: ["d3.js"]
---

1. **`.on()`** 
    1. **用途**：用于 DOM 事件，适用于 DOM 元素上的标准浏览器事件
    2. **`.on()` 具有两种模式**
        - `dispatch.on("change", (d) => {...});` → 设置器模式，返回 dispatch，**用于链式调用**
        - `const handler = dispatch.on("change");`  → 获取器模式，**返回处理函数**
2. `d3.dispatch()` 
    1. **用途**：用于自定义事件，可以让可复用组件**向外部代码通知**事件（不管是不是标准事件）
    2. **调用**：在可复用组件中，通过 `.on()` 调用 dispatch 对象
    3. **示例语法**：`dispatch.apply(eventName, thisArg, argumentsArray);`
        - `eventName` → 触发哪个事件
        - `thisArg` →  事件处理程序的 `this` 上下文，`this` 或 `null`
        - `argumentsArray` → 传递给处理程序的参数，根据参数，选择使用 `.call()` 或 `.apply()`
    4. **导出**：务必要在可复用组件中导出定义的 event 事件名称