---
titleEn: "Promise object"
titleCh: "Promise对象"
tags: ["JavaScript"]
---

1. **Promise 的核心目的**
    1. 原理：**解决回调地狱**（回调嵌套层级过深、不好维护）
    2. 示例：
        - 回调版需要不断嵌套函数
        - Promise 版通过 `.then()` 链式调用，**结构更直观**
2. **Promise 有且仅有三种状态**（不可逆）
    1. `pending`
    2. `fulfilled`  →  调用 `resolve()`
    3. `rejected`  →  调用 `reject()`
3. **Promise 的内部结构**
    1. `state`（状态）
    2. `result`（`resolve/reject` 的值）
    3. 任务队列：`_fulfillmentTasks`、`_rejectionTasks`
    
    ```jsx
    this._promiseState = "pending";
    this._promiseResult = undefined;
    this._fulfillmentTasks = [];
    this._rejectionTasks = [];
    ```
    
4. **Promise 的核心运行机制总结**
    1. 状态只会从 `pending → fulfilled/rejected`，且**只能改变一次**
    2. `resolve/reject` 只负责改状态，并把回调加入异步队列执行。
    3. `then` 的作用是注册回调：
        - `pending`：把回调存起来
        - `fulfilled/rejected`：把回调丢进异步队列
    4. `then` 必须返回一个新 Promise，用于链式调用；其返回值决定下一个 Promise 的状态和结果
    5. `then` 回调抛出异常会自动进入下一个 Promise 的 `reject`，因此必须用 `try/catch` 包装
5. **最终能实现的功能**
    1. 支持 `.then()`
    2. 支持 `.catch()`（基于 then 实现）
    3. 支持状态锁定
    4. 支持异步执行任务
    5. 支持链式调用
    6. 支持 thenable 展开
6. **总结**
    1. Promise = 状态机，`pending → fulfilled/rejected`
    2. `resolve/reject` = 改变状态 + 异步执行队列
    3. `then` = 封装回调 + 返回新的 Promise（链式调用）
    4. thenable = 继续往下展开直到变成普通值
    5. `throw` = 进入 reject 流程
7. Promise 是用于表示异步操作结果的对象，具有 `pending`、`fulfilled` 和 `rejected` 三种状态，状态一旦确定不可再改变。成功时通过 `resolve` 传递结果，失败时通过 `reject` 传递错误。可以使用 `then` 获取成功结果，使用 `catch` 捕获错误。在同一条 Promise 链中，一旦发生错误，后续 `then` 会被跳过，直接进入最近的 `catch`


```jsx
// 正常示例
new Promise((resolve, reject) => {
  resolve("success");
})
.then(result => { console.log(result); })
.catch(err => { console.error(err); });

// 带 try...catch 的示例（在 then 回调中抛出错误）
new Promise((resolve, reject) => {
  resolve(100);
})
.then(value => {
  try {
    console.log("接收到：", value);
    throw new Error("手动抛出的错误");   // 在 then 内部抛异常
  } catch (e) {
    // 手动捕获异常（可选）
    console.log("try...catch 捕获到错误：", e.message);
    throw e;    // 再次抛出，让 Promise 链进入 catch
  }
})
.catch(err => {
  console.log("Promise 捕获到错误：", err.message);
});
```