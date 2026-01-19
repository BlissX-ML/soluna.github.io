---
titleEn: "Prototype and prototype chain"
titleCh: "原型与原型链"
tags: ["JavaScript"]
---

1. **JavaScript 是一种基于原型的语言**
2. **概念分类**
    - **函数对象**：本质是对象，自带显式原型 `prototype`
    - **构造函数**：任何被 `new` 调用的函数，它的 `prototype` 是实例的原型
    - **实例对象**：通过 `new` 创建，自带隐式原型 `__proto__`
    - **原型对象**：`构造函数.prototype`
        - 用于放共享的方法与属性
        - 有一个 `constructor` 指回构造函数本身
    - `Object.prototype`：所有对象的最终原型
    - `Function.prototype`：所有函数对象的原型
3. **属性说明**
    - **函数对象**：有 `prototype`，有 `__proto__`（指向 `Function.prototype`）
    - `构造函数.prototype`：有 `constructor` 指回构造函数本身。
    - **实例对象**：有 `__proto__` 指向`构造函数.prototype`
    - **原型对象**：有 `__proto__`，指向 `Object.prototype`
4. 原型链结构

```jsx
实例对象.__proto__                     
      → 构造函数.prototype               
          → 构造函数.prototype.__proto__    
                → Object.prototype          
                    → Object.prototype.__proto__
                          → null
```

```jsx
class Animal {
  constructor() {
    this.value = 1;
  }
}

const dog = new Animal();

console.log(dog.__proto__ === Animal.prototype);                 // true
console.log(Animal.__proto__ === Function.prototype);            // true
console.log(Function.__proto__ === Function.prototype);          // true
console.log(Function.prototype.__proto__ === Object.prototype);  // true
console.log(Animal.prototype.__proto__ === Object.prototype);    // true

// dog                         // Animal
//   ↓ __proto__               //   ↓ __proto__
// Animal.prototype            // Function.prototype
//   ↓ __proto__               //   ↓ __proto__
// Object.prototype            // Object.prototype
//   ↓ __proto__               //   ↓ __proto__
// null                        // null
```

```jsx
// 函数对象
function sum(a, b) {
  return a + b;
}

// 实例对象
function Divide(a, b) {
  this.a = a;
  this.b = b;
  this.calc = function () { return this.a / this.b; }
}

const divide = new Divide(5, 25);
```