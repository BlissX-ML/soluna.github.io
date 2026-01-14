---
titleEn: "Error Handling in async/await"
titleCh: "async/await 的错误捕获方式"
tags: ["JavaScript"]
---


1. `try…catch` 捕获 `async/await` 的错误
    1. **原理**：
        - await 会等待 Promise
        - 如果 `Promise reject`，就会被外层的 `try…catch` 捕获
    2. 用法示例：
        
        ```jsx
        async function getData() {
        	 try {
        	   const res = await fetch('/api/user');
        	   const data = await res.json();
        	   return data;
        	 } catch (error) {
        	   console.log('捕获到错误：', error);
        	 }
        }
        ```
        
2. **使用 `Promise.catch` 捕获 async 函数错误**
    1. **原理**：
        - `async` 函数本质上返回 `Promise`
        - 所以可以用 `fn().catch()` 捕获它的 `reject`
        - 不需要 `try…catch`
    2. **用法示例**：
        
        ```jsx
        async function getData() {
           const res = await fetch('/api/user');
           return res.json();
         }
        
         getData()
           .then(data => console.log(data))
           .catch(err => console.log('错误：', err));
        ```
        
3. **错误优先原则（你必须知道的隐性规则）**
    1. 内容：
        - 哪个地方包的 `catch` 更近，就先捕获
        - `try…catch` 的优先级**高于**外层的 `.catch()`
    2. 示例：
        
        ```jsx
        async function fn() {
        	 try {
        	   await Promise.reject('错误A');
        	 } catch (error) {
        	   console.log('内部捕获：', error);
        	 }
        }
        
        fn().catch(err => console.log('外部捕获：', err));  
        
        // 内部捕获： 错误A （外部不会执行）
        ```
        

```jsx
// ① 创建一个 Promise，内部随机触发 resolve 或 reject
const test = new Promise((resolve, reject) => {
  const ok = Math.random() > 0.5;   // 随机成功或失败

  if (ok) {
    resolve('成功啦（resolve 被触发）');
  } else {
    reject('失败了（reject 被触发）');
  }
});

// ② 外部根据结果输出
test.then(res => console.log(res))
    .catch(err => console.log(err));
```