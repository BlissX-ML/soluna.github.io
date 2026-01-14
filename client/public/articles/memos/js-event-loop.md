---
titleEn: "JavaScript Event Loop"
titleCh: "JavaScript 事件循环"
tags: ["JavaScript"]
---

1. **事件循环的前提**
    - JavaScript 是**单线程**的，同一时间只能**执行一段代码**。
    - 同步代码会占用调用栈，执行时间过长会阻塞页面。
2. **为什么需要事件循环**
    - **避免长任务阻塞主线程**
    - 将耗时操作（定时器、请求、事件）交给 Web API 处理
    - 等合适时机再把回调交回 JS 执行
3. **核心组成**
    - **调用栈**（Call Stack）：执行同步代码
    - **Web API**：处理定时器、网络请求、DOM 事件
    - **宏任务队列**（Macro Task Queue）：`script`、`setTimeout`、`setInterval`、DOM 事件等。
    - **微任务队列**（Micro Task Queue）：`Promise.then`、queueMicrotask
4. **事件循环执行流程**
    - 先执行一个宏任务中的同步代码，执行完后立刻清空所有微任务，再进入下一个宏任务
5. **宏任务 vs 微任务**
    - 宏任务：一次事件循环只执行一个
    - 微任务：在当前宏任务结束后一次性执行完
    - **微任务优先级高于下一个宏任务**