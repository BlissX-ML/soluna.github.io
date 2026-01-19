---
titleEn: "Comparing Various Inheritance Methods"
titleCh: "对比各种继承"
tags: ["JavaScript"]
---

1. **原型链继承**（**`Child.prototype = new Parent()`**）
    - **概念**：子类原型指向父类实例。
    - **特点**：**能继承方法**，但不能传参。
    
    ```jsx
    function Parent(type) { this.type = type; }
    Parent.prototype.say = function () { console.log('hi from parent'); };
    
    function Child(type) { }
    Child.prototype = new Parent();  // ✅Important 
    
    const c = new Child('dog');
    c.say();              // hi from parent
    console.log(c.type);  // undefined（不存在 `Parent.call(this, type)`，无法传参）
    ```
    
2. **构造函数继承**（`Parent.call(this, ...args)`）
    - **概念**：在子类构造函数内部调用父类构造函数。
    - **特点**：**能传参**，但没有原型方法。
    
    ```jsx
    function Parent(name) { this.name = name; }
    
    function Child(name, age) {
        Parent.call(this, name);   // ✅Important 
        this.age = age;
    }
    
    const c = new Child('Liu', 18);
    console.log(c.name);   // Liu
    console.log(c.age);    // 18
    ```
    
3. **组合继承（构造函数继承 + 原型链继承）**
    - **概念**：构造函数内部继承属性，原型链继承方法。
    - **特点**：**属性 + 方法都继承**，就是调用两次。缺点在于父类构造函数被调用两次
    
    ```jsx
    function Parent(name) { this.name = name; }
    Parent.prototype.say = function () { console.log(this.name); };
    
    function Child(name, age) {
        Parent.call(this, name);     // ✅Important 
        this.age = age;
    }
    Child.prototype = new Parent();  // ✅Important 
    
    const c = new Child('Liu', 20);
    c.say();               // Liu
    console.log(c.age);    // 20
    ```
    
4. **对象继承（**`Object.create`**）**
    - 概念：以某对象为原型创建新对象。
    - **特点**：最简单，**但不能传参**，会**共享引用属性**。
    
    ```jsx
    const Parent = {
        kind: 'animal',
        speak() { console.log('I am an animal'); }
    };
    
    const Child = Object.create(Parent);   // ✅Important 
    Child.name = 'Dog';
    
    Child.speak();             // I am an animal
    console.log(Child.kind);   // animal
    ```
    
5. **寄生组合继承（最合理的 ES5 继承方式）**
    - 概念：构造函数继承属性 + 通过浅克隆父类原型实现继承。
    - **实现步骤**：
        - `Child.call(this)` 继承属性。
        - 创建父类原型的浅克隆作为子类原型。
    - **特点**：ES5 最强继承，只调用一次父构造函数。
    
    ```jsx
    function Parent(name) { this.name = name; }
    Parent.prototype.say = function () { console.log(this.name); };
    
    function Child(name, age) {
        Parent.call(this, name);   // 传参
        this.age = age;
    }
    
    function create(proto) {
        function F() {}
        F.prototype = proto;   // 传递方法
        return new F();
    }
    
    function extend(Child, Parent) {
        const clone = create(Parent.prototype);
        clone.constructor = Child;
        Child.prototype = clone;
    }
    
    extend(Child, Parent);
    
    const c = new Child('Liu', 22);
    c.say();               // Liu
    console.log(c.age);    // 22
    ```
    
6. **ES6 class 继承（extends + super）**
    - 概念：使用 `class`、`extends`、`super` 实现继承。
    - 特点：
        - `super()` 必须在子类构造函数中第一行调用。
        - 语法糖为寄生组合继承。
    
    ```jsx
    class Parent {
        constructor(name) { this.name = name; }
        say() { console.log(this.name); }
    }
    
    class Child extends Parent {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
    }
    
    const c = new Child('Liu', 25);
    c.say();               // Liu
    console.log(c.age);    // 25
    ```