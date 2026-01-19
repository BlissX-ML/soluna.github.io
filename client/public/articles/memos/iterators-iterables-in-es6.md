---
titleEn: "Iterators and iterables in ES6"
titleCh: "ES6 中的 Iterator 和 Iterable"
tags: ["JavaScript"]
---

1. **核心概念总结**
    - **Iterable（可迭代对象）**：
        - 满足**可迭代协议**的对象，即实现了 **`Symbol.iterator`** 方法
        - 该方法必须**返回一个迭代器对象**（iterator）
        - 可用于 `for...of`、`...展开运算符` 等场景。
        - 内置可迭代对象包括：`String`、`Array`、`Map`、`arguments`、`NodeList` 等。
    - **Iterator（迭代器对象）**：
        - 满足**迭代器协议**的对象，即具有一个 `next()` 方法
        - `next()` 必须返回 `{ value, done }`
            - `value`：当前值
            - `done`：是否迭代结束（`true` 表示结束）
2. **它们之间的关系**
    - **Iterable** 提供 `Symbol.iterator`，返回一个 Iterator
    - **Iterator** 通过 `next()` 不断返回下一个值。
    - 简单理解：
        - Iterable = 能被迭代的东西
        - Iterator = 告诉你现在迭代到哪了
3. **对象为什么不是可迭代的？**
    - 普通 Object 默认没有实现 `Symbol.iterator`，不能被 `for...of` 使用。
    - 处理方式：
        - 使用 **`Object.entries(obj)`** 转为可迭代数组
        - 或使用 `Map` 来管理键值对
4. **手动实现一个可迭代对象需要做的事**
    - 实现 iterable 协议：定义 `Symbol.iterator` 返回 this
    - 实现 iterator 协议：定义 `next()` 返回 `{value, done}`

---

```jsx
const itzy = {
  name: 'itzy',
  year: 2019
};

const iterable = Object.entries(itzy);
console.log(iterable);   // [["name", "itzy"], ["year", 2019]]

console.log(typeof iterable[Symbol.iterator]);  // "function"

const iterate = iterable[Symbol.iterator]();
console.log(iterate.next());    // [object Object] { done: false, value: ["name", "itzy"] }
console.log(iterate.next());    // [object Object] { done: false, value: ["year", 2019] }
console.log(iterate.next());    // [object Object] { done: true, value: undefined }
```