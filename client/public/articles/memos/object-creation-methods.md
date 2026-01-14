---
titleEn: "Object Creation Method"
titleCh: "对象的创建方法"
tags: ["JavaScript"]
---

1. `Object 构造函数创建对象`
    1. 原理：使用 `new Object()` 创建空对象，再手动添加属性/方法。
    2. **示例**：
        
        ```jsx
        let person = new Object();
        person.name = 'Lucy';
        person.sayName = function () { console.log(this.name); }
        ```
        
2. **对象字面量创建对象（最常用）**
    1. 原理：直接使用 `{}` 创建对象，最简洁。
    2. 示例：
        
        ```jsx
        let person = {
          name: 'Lucy',
          sayName() { console.log(this.name); }
        }
        ```
        
3. **`Object.create()`（以某对象作为原型）**
    1. 原理：创建一个以指定对象为原型的新对象。
    2. **示例**：
        
        ```jsx
        const base = { name: 'Lucy', sayName(){ console.log(this.name); } };
        const person = Object.create(base);
        person.name; // 'Lucy'
        ```
        
4. **类 `class`（ES6，原型的语法糖）**
    1. 原理：基于原型的封装写法，更清晰。
    2. 示例：
        
        ```jsx
        class Person {
          constructor(name){ this.name = name; }
          sayName(){ console.log(this.name); }
        }
        const p = new Person('Lucy');
        ```
        
5. **工厂模式（函数返回一个对象）**
    1. **原理**：用函数封装创建对象的逻辑，每次调用**返回一个新对象**。
    2. **缺点**：无法识别对象类型（`instanceof` 无法判断）。
    3. **示例**：
        
        ```jsx
        function createPerson(name){
          return { name, sayName(){ console.log(this.name); } };
        }
        
        ```
        
6. **构造函数模式（早期最常用）**
    1. 原理：用函数 + `new` 实例化对象，属性写在 this 上。
    2. 缺点：方法每次都会创建一份（**浪费内存**）。
    3. 示例：
        
        ```jsx
        function Person(name){
          this.name = name;
          this.sayName = function(){ console.log(this.name); }
        }
        const p1 = new Person('Lucy');
        ```
        
    4. **`new` 的执行流程（核心记法）：**
        - 创建空对象
        - **绑定原型**：`新对象.__proto__ = 构造函数.prototype`
        - this 指向新对象
        - 执行构造函数
        - 返回新对象（除非 return 一个对象）
7. **原型模式**
    1. 原理：把共享方法放在 `prototype` 上，让所有实例共享。
    2. 示例：
        
        ```jsx
        function Person(){}
        Person.prototype.sayName = function(){ console.log(this.name); }
        ```
        
8. **组合模式（构造函数 + 原型最推荐的组合）**
    1. **原理**：构造函数定义实例属性；`prototyp`e 定义共享方法。
    2. **示例**：
        
        ```jsx
        function Person(name){ this.name = name; }
        Person.prototype.sayName = function(){ console.log(this.name); }
        
        const p1 = new Person('Lucy');
        ```
        
    3. **优点**：该共享的共享，该独立的独立；最常用写法。
9. **总结：**
    1. `new Object()`：通过内置构造函数生成对象。
    2. 对象字面量 `{}`：最简单、最快的方式，直接写属性和值。
    3. 构造函数 + `new`：用普通 function 写构造逻辑，在内部用 `this` 绑定属性。
    4. `class` 类：ES6 推荐方式，语法更清晰，本质仍是构造函数 + 原型继承。
    5. `Object.create(proto)`：以某个对象作为原型创建新对象，用于更灵活的原型链控制