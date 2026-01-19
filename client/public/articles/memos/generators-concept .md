---
titleEn: "The concept of Generators"
titleCh: "生成器的概念"
tags: ["JavaScript"]
---

1. **对 Generator 的核心理解**
    - Generator 是一种**可暂停、可继续**执行的函数，由 `function*` 定义
    - 调用时不会立即执行，而是**返回一个迭代器对象（Generator 对象）**
    - 执行要靠 `.next()`，每次执行到下一个 `yield` 就暂停，并返回 `{ value, done }`
    - `yield` 用来**产出值 + 暂停执行**
    - `yield*` 用来委托**另一个可迭代对象**（让它的值按顺序产出）
    - Generator **本身是可迭代对象**（支持 `for…of`）

```jsx
function* gen() {
  console.log("step 1");
  yield 10;

  console.log("step 2");
  yield* [20, 30];      // 依次产出 20、30 (委托另一个迭代器对象)

  console.log("step 3");
  yield 40;
}

const g = gen();

console.log(g.next()); // { value: 10, done: false }
console.log(g.next()); // { value: 20, done: false }
console.log(g.next()); // { value: 30, done: false }
console.log(g.next()); // { value: 40, done: false }
console.log(g.next()); // { value: undefined, done: true }

// for...of 遍历
for (const val of gen()) {
  console.log("for-of:", val);
}
```