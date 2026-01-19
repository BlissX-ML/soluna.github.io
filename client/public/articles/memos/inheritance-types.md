---
titleEn: "Types of inheritance"
titleCh: "继承的类型"
tags: ["JavaScript"]
---

1. **原型继承**
    - **原理**：让 `子构造函数.prototype` 指向**父构造函数的实例**，从而共享父级原型上的方法。
    - **缺点**
        - 引用类型的属性**被所有实例共享**
        - 不能向 `Parent` 传参
    
    ```jsx
    function Parent(){ this.name = "kevin"; }
    Parent.prototype.getName = function(){ return this.name; }
    
    function Child(){}
    **Child.prototype = new Parent();    // ✅**
    
    const c = new Child();
    c.getName();      // 继承自 Parent.prototype
    ```
    
2. **借用构造函数继承**
    - **原理**：在**子构造函数内部**调用 `Parent.call(this)`，让每个实例拥有独立的父级属性。
    - **优点**：
        - 避免了引用类型的属性被所有实例共享
        - 能向 Parent 传参
    - **缺点**：方法都在构造函数中定义，每次创建实例都会创建一遍方法。
    
    ```jsx
    function Parent(){ this.list = ["a"]; }
    function Child(){ **Parent.call(this);** }    **// ✅**
    
    const c1 = new Child(); 
    c1.list.push("x");
    const c2 = new Child(); // 不受 c1 影响
    ```
    
3. **组合继承**
    - **原理**：构造函数继承父属性 + 原型继承父方法（最常用）
    
    ```jsx
    function Parent(name){ this.name = name; }
    Parent.prototype.say = function(){ return this.name; }
    
    function Child(name){ **Parent.call(this, name);** }    **// ✅**
    **Child.prototype = new Parent();                     // ✅**
    Child.prototype.constructor = Child;
    ```
    
4. **寄生式继承**
    - 原理：基于某个对象创建新对象（`Object.create`），再做二次增强。
    - **缺点**：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
    
    ```jsx
    function clone(o){
      const obj = **Object.create(o);    // ✅**
      obj.hi = function(){ return "hi"; }
      return obj;
    }
    ```
    
5. **寄生组合式继承（最优）**
    - **原理**：父构造函数只执行**一次**；子原型通过`父.prototype` 的浅克隆获得方法，避免冗余属性
    - **区分方法继承的两种方法**：
        - `Child.prototype = new Parent()` 会 **执行一次 Parent 构造函数**，可能产生多余属性。
        - `Child.prototype = Object.create(Parent.prototype)` **不会执行构造函数**，只创建一个干净的原型链
    
    ```jsx
    function Parent(name){ this.name = name; }
    Parent.prototype.say = function(){ return this.name; }
    
    function Child(name){ **Parent.call(this, name);** }        **// ✅**
    
    function inherit(child, parent){
      **child.prototype = Object.create(parent.prototype);    // ✅**
      child.prototype.constructor = child;    // 让 `instance.constructor` 能正确显示为 Child，方便调试与类型识别
    }
    
    inherit(Child, Parent);
    ```