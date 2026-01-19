---
titleEn: "Distinguishing Between Object.defineProperty and Proxy"
titleCh: "区分 Object.defineProperty 与 Proxy"
tags: ["JavaScript"]
---

1. 总体前提：两者都是用于**拦截对象操作**的工具
    - `Object.defineProperty`：只能拦截**某个属性**
    - `Proxy`：可拦截**整个对象**的多种行为
    - 用途：数据监听、响应式、校验等
2. `Object.defineProperty` 的要点与局限
    - 语法：`Object.defineProperty(obj, prop, descriptor)`
    - 支持：value、writable、get、set、configurable、enumerable
    - 局限：
        - **不能**监听新增或删除属性。
        - 监听多个属性需**遍历**逐个 define。
        - 数组下标可监听，但 push/pop/length 等不会触发，需要额外重写数组方法
3. `Proxy` 的核心特点
    - 写法：**`new Proxy(target, handler)`**
    - 可拦截对象**所有常见操作**（get/set/delete/in/apply... 共 13 种）
    - 新增、删除属性都能监听。
    - 数组方法与 length 改变也能捕捉，无需额外补丁。
4. `this` 差异
    - `defineProperty：this` 指向目标对象。
    - `Proxy：this` 指向代理对象，**需要 Reflect 才能访问**目标对象。
5. 使用与兼容性对比
    - 范围：defineProperty 拦截属性，Proxy 拦截整个对象。
    - 新增/删除属性：defineProperty ❌，Proxy ✔
    - 数组变化：defineProperty 需要手动补丁，Proxy 原生支持。
    - 兼容性：defineProperty 兼容好，Proxy 不支持旧 IE。
    - 维护性：defineProperty 麻烦、零散；Proxy 统一、简单。
6. 面试一句话总结
    - defineProperty：只能拦截已有属性，不支持新增/删除，数组也不好处理（Vue2）。
    - Proxy：拦截能力完整，适用于现代响应式系统（Vue3）。

```jsx
const obj = {};
let value = 1;

// 只对属性 "a" 做 get/set 劫持
Object.defineProperty(obj, "a", {
    get() {
        console.log("get a =", value);
        return value;
    },
    set(v) {
        console.log("set a =", v);
        value = v;
    }
});

// Proxy：对整个对象的所有属性做统一劫持
const p = new Proxy({}, {
    set(target, key, val) {
        console.log("set:", key, val);
        target[key] = val;
        return true;
    }
});

// 读写 a —— defineProperty 能拦截
obj.a;        // get a = 1
obj.a = 10;   // set a = 10

// 新增属性 —— defineProperty 无法拦截
obj.b = 20;            // 没有任何输出（说明新属性未被劫持）
console.log(obj.b);    // 20
console.log(obj);      // { b: 20 }

// 通过 Proxy 增加属性 —— 能被统一拦截
p.a = 30;              // set: a 30   （Proxy 成功捕获）
console.log(p.a);      // 30
```