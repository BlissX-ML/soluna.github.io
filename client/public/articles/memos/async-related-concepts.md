---
titleEn: "Async-related concepts"
titleCh: "async 相关概念"
tags: ["JavaScript"]
---


1. **async 的定义**
    - `async` 用来声明一个**异步函数**。
    - **特点**：
        - 返回值会被自动封装成 `Promise` 对象。
            - 如果显式返回一个普通值，会被 `Promise.resolve()` 包装。
            - 如果抛出异常，会变成 `Promise.reject()`。
            - 结果通过 `.then()` 和 `.catch()` 方法获取。
            - 在构造函数中通过 `resolve()` 和 `reject()` 来改变状态。
        - async 函数里可以使用 `await`。
    - **示例**：
        
        ```jsx
        // 等效写法
        async function f1() { return "TEST"; }
        function f2() { return Promise.resolve("TEST"); }
        
        f1().then(console.log);   // TEST
        f2().then(console.log);   // TEST
        ```
        
2. **await 的执行方式**
    - `await` 用来 **等待一个 Promise 的结果**：
        - 如果是 `Promise`，等待其状态变为 resolved/rejected，再返回结果/抛出异常。
        - 如果是普通值，则直接返回，不会等待。
    - **示例 1（普通值）**：
        
        ```jsx
        async function f() {
          return await 123;      // 等同于 return 123;
        }
        f().then(console.log);   // 123
        ```
        
    - **示例 2（Promise）**：
        
        ```jsx
        async function f() {
          const p = Promise.resolve(100);
          const result = await p;
          console.log(result);  
        }
        f();   // 100
        ```
        
3. **执行顺序（关键点）**
    - **规则**：
        - 遇到 `await` 时，函数会 **暂停执行**，把后面的代码放入 **微任务队列**。
        - JavaScript 会**先执行**当前上下文里的所有**同步代码**。
        - 等同步任务清空后，再从微任务队列里取出 `await` 后面的代码继续执行。
    - **示例**：
        - 输出 `1`。
        - 执行 `fn2()` → 输出 `"fn2"`
        - 遇到 `await`，暂停，`console.log(2)` 放到微任务。
        - 执行同步代码 `console.log(3)` → 输出 `3`
        - 微任务执行 → 输出 `2`
        - **最终结果**：`1, "fn2", 3, 2`
        
        ```jsx
        async function fn1() {
          console.log(1);
          await fn2();
          console.log(2);
        }
        async function fn2() {
          console.log("fn2");
        }
        
        fn1();
        console.log(3);
        ```
        
4. **错误处理**
    - 在 async 函数里，`await` 出错会抛异常，需要用 `try...catch` 捕获。
    - **示例**：
        
        ```jsx
        async function f() {
          try {
            const result = await Promise.reject("出错了");
            console.log(result);
          } catch (e) {
            console.log("捕获异常:", e);    // 捕获异常: 出错了
          }
        }
        f();
        ```
        

5. 在函数前加 `async` 会让函数返回一个 Promise，`await` 会暂停函数执行，把 `await` 之后的代码放入微任务队列，等当前同步代码和已有微任务执行完毕后再继续执行，从而实现异步流程的同步写法。