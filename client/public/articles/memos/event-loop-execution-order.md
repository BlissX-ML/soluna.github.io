---
titleEn: "Event Loop Execution Order"
titleCh: "Event Loop 的执行顺序"
tags: ["JavaScript"]
---

1. **宏任务（Macro Task）**
    - 存放在 **Task Queue**
    - **常见宏任务**：`setTimeout`，`setInterval`，`setImmediate`（Node.js），`I/O`，整体 `script`，UI 渲染
2. **微任务（Micro Task）**
    - 存放在 **Job Queue**
    - **常见微任务**：
        - 浏览器：`Promise.then`，`MutationObserver`
        - Node.js：`process.nextTick`
3. **执行顺序**
    - 执行 **同步代码**（进入调用栈）
    - 调用栈清空后，检查微任务队列并执行 **所有微任务**
    - 微任务执行完进行 **页面渲染**
    - 开始下一轮 Event Loop ，即执行一个宏任务中的异步代码
    - 重复以上步骤
4. **面试速答口诀**
    - **同步 → 微任务 → 渲染 → 宏任务**

```jsx
console.log(1);       // 同步代码 → 立即执行

Promise.resolve().then(() => {
  console.log(2);     // 微任务(在宏任务前进入微任务)
});

setTimeout(() => {
  console.log(3);     // 宏任务 → 下一轮 Event Loop 执行
  
  Promise.resolve().then(() => {
    console.log(4);   // 微任务(在宏任务后进入微任务)
  });
}, 0);

Promise.resolve().then(() => {
  console.log(5);     // 微任务(在宏任务前进入微任务)
});

console.log(6);       // 同步代码 → 立即执行

***// 1 -> 6 -> 2 -> 5 -> 3 -> 4***
```

```jsx
console.log('1');       // (1) 同步代码

async function test() {
    console.log('2');       // (2-1) 函数内部的同步代码
    await delay();          // (2-2) await 暂停此函数；await 后面的 console.log(6) 进入微任务
    console.log('6');       // (4-2) 微任务开始执行
}

function delay() {
    console.log('3');          // (2-2-1) 函数内部的同步代码
    return new Promise((resolve) => {
        console.log('4');      // (2-2-2) 函数内部的同步代码 -> new Promise不是微任务，微任务是promise.then
        setTimeout(() => {
            console.log('7');  // (4-1) 宏任务（setTimeout 回调）；resolve 在回调内部执行，所以先打印 7，再生成 await 的微任务（6）
            resolve();         // resolve 后触发 await 的微任务（执行 6）
        }, 0);
    });
}

test();               // (2) 执行函数

console.log('5');     // (3) 同步代码

***// 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 6***
```