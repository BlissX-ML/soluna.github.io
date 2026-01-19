---
titleEn: "Traffic light effect"
titleCh: "红绿灯效果"
tags: ["JavaScript"]
---

1. **红绿灯题目的核心前提**
    - 目标：按顺序输出 red→green→yellow
    - 三种灯各自持续：红 3s、绿 2s、黄 1s。
    - 使用 Promise + async/await 实现周期性循环。
2. `delay` 的作用
    - 返回一个 Promise。
    - 在指定时间后执行回调 `fn`
    - `await delay(...)` 可以暂停代码一段时间。

```jsx
function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

async function light() {
    console.log("red");
    await delay(3000);

    console.log("green");
    await delay(2000);

    console.log("yellow");
    await delay(1000);
}

// 用循环保持无限执行
async function run() {
    while (true) {
        await light();
    }
}

run();
```