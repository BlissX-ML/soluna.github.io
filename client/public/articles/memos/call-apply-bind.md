---
titleEn: "Distinguishing call, apply, and bind"
titleCh: "区分 call, apply, bind"
tags: ["JavaScript"]
---

1. **`call`**
    1. 原理：**修改 this，并以“参数列表”方式立即调用函数。**
    2. 机制：把函数临时挂到对象 → 执行 → 删除。
2. **`apply`**
    1. 原理：**修改 this，并以“参数数组”方式立即调用函数。**
    2. 与 call 唯一差异：第二个参数必须是数组。
3. **`bind`**
    1. 原理：**修改 this，但不会立即执行，返回一个新的函数。**
    2. 特性：
        - 绑定时可预先注入参数（柯里化效果）
        - 使用 new 调用时，**this 指向实例对象，忽略绑定的 this**
4. 三者最简对比总结
    - call：修改 this → 立即执行 → 参数列表
    - apply：修改 this → 立即执行 → 参数数组
    - bind：修改 this → **返回新函数，不执行** → new 时 this 优先指向实例

```jsx
var val = 15;  // 用 var 才会进入 window 全局中

let obj = {
  val: 1,
  sum: function(val1, val2) { return this.val + val1 + val2; }
}

console.log(obj.sum.call(this, 3, 6));  // 24
console.log(obj.sum.call(obj, 3, 6));   // 10

console.log(obj.sum.apply(this, [3, 6]));  // 24
console.log(obj.sum.apply(obj, [3, 6]));   // 10

const fn1 = obj.sum.bind(this, 3, 6);
const fn2 = obj.sum.bind(obj, 3, 6);
console.log(fn1());   // 24
console.log(fn2());   // 10
```