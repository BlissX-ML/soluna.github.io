---
titleEn: "The purpose of Reflect"
titleCh: "Reflect 的用处"
tags: ["JavaScript"]
---

1. **Reflect 的核心作用**
    1. 提供一套更**统一、可控**的对象操作 API，如 `get/set/delete`
    2. 与 Proxy 的拦截方法一一对应，是 Proxy 的理想**默认实现**。
    3. 所有方法都是**静态**的，语法风格更标准化。
2. **Reflect 提供的主要能力**
    1. 读写：`Reflect.get`、`Reflect.set`、`Reflect.deleteProperty`、`Reflect.defineProperty`
    2. 元编程操作：`Reflect.has`、`Reflect.ownKeys`、`Reflect.getPrototypeOf`
    3. 函数/构造调用：`Reflect.apply`、`Reflect.construct`
    4. 返回值为 `true/false`，可用于判断操作是否成功。
3. **Reflect 的优势（比传统写法更好）**
    1. **不会抛异常**，用返回值表示操作是否成功（更安全）。
    2. 与 Proxy 配合时能保证 `this` 正确，通过 receiver 处理继承场景。
    3. API 集中在同一对象上，语义更清晰。
4. Proxy 中使用 Reflect 的最典型例子
    1. 代理 `getter` 时使用 `Reflect.get(target, prop, receiver)`，保持 getter 内 `this` 的正确性
    2. 代理 `setter` 时使用 `Reflect.set(target, prop, value, receiver)`，遵循正确的赋值规则。
        - **target**：真正被操作的**目标对象**。
        - **prop**：被读 / 写的**属性名**。
        - **value**：要写入该属性的**值**。
        - **receiver**：调用这个操作的**主体对象**，通常用于决定 getter/setter 里 `this` 的指向

```jsx
const cat = {
  _name: "中华田园猫",
  get name() { return this._name; }
};

const proxy = new Proxy(cat, {
  get(t, p, receiver) {
    return Reflect.get(t, p, receiver);    // 关键点
  }
});

const xiaobai = { __proto__: proxy, _name: "小白" };
console.log(xiaobai.name); // 小白
```