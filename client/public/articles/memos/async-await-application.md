---
titleEn: "async/await Application Review"
titleCh: "async / await 应用总结"
tags: ["JavaScript"]
---


1. `async/await` 的前提
    1. `async/await` 是 Promise 的语法糖
    2. `async` 保证函数一定返回 Promise
    3. 普通返回值也会被包装成已完成的 Promise
2. `async` 的要点
    1. `async function` 返回值等同于 `Promise.resolve(value)`
    2. 调用 `async` 函数得到的永远是 Promise
3. `await` 的要点
    1. `await` 会暂停，**直到 Promise 完成**， 再返回 Promise 的 `resolved` 值
    2. 不能在非 `async` 函数中使用。
    3. 只阻塞 async 函数本身，不会阻塞主线程
    4. **await 后面的代码** 进微任务
4. 错误处理
    1. `await` 遇到 `reject` 会抛错，用 `try/catch` 捕获异步错误
    2. 异步错误处理方式与同步一致。

```jsx
//  ---- async / await -----
async function f() {

    let promise = await new Promise((resolve, reject) => {
        setTimeout(() => resolve("Need 1000ms"), 1000);
        setTimeout(() => resolve("Just 100ms"), 100);
    });

    console.log(1);       // 第一步：1
    console.log(promise); // 第三步：Just 100ms
    console.log(2);       // 第二步：2
}

f();

// ----- 错误处理 -----
async function f() {
    try {
        let response = await new Promise((resolve, reject) => {
            throw new Error('test err')
        });
    } catch (err) {
        console.log(err);   // Error: test err
    }
}

f();

// ----- delay 代码示例 -----
async function delay(time, str) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => resolve(str), time)
    })
}
delay(3000, 'Hello world').then(res => console.log(res));   // 'Hello world'
```