---
titleEn: "Difference Between var, let, and const"
titleCh: "var, let, const 的区别"
tags: ["JavaScript"]
---


1. **变量提升**
    - `var`：存在变量提升，声明会被提升到作用域顶部，值为 `undefined`
    - `let` / `const`：不存在变量提升，存在 **暂时性死区（TDZ）**
2. **重复定义**
    - `var`：允许重复定义
    - `let` / `const`：不允许重复定义
3. **作用域**
    - `var`：**函数**作用域（function scope）
    - `let` / `const`：**块级**作用域（block scope）
4. **值的修改**
    - `var`：可以修改
    - `let`：可以修改
    - `const`：不可重新赋值，但如果是对象/数组，可以修改其内部属性或元素