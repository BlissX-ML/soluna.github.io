---
titleEn: "Distinguishing Primitive Data Types from Reference Data Types"
titleCh: "区分原始数据类型与引用数据类型"
tags: ["JavaScript"]
---

1. **内存存储位置不同**
    1. 原理：
        - **原始类型（Primitive）**：值存储在 **栈（Stack）**，大小固定
        - **引用类型（Object）**：实际对象存储在 **堆（Heap）**，栈中只放对象引用
    2. **示例：**
        
        ```jsx
        let age = 25;           // 栈中直接存 25
        let person = { name: "John" };    // person 在栈中存储对象引用
        
        ```
        
2. **是否可修改（可变性）不同**
    1. 原理：
        - **原始类型不可变**：不能增删改属性
        - **引用类型可变**：对象本身可以增删改属性
    2. **示例：**
        
        ```jsx
        let name = "John";
        name.alias = "Knight";
        console.log(name.alias); // undefined（原始值不支持扩展）
        
        let user = { name: "John" };
        user.age = 20;           // ✔ 可扩展
        
        ```
        
3. **复制行为不同**
    1. 原始类型，**值复制（互不影响）**
        
        ```jsx
        let a = 10;
        let b = a;   // b 得到独立的 10
        b = 20;
        console.log(a, b); // 10 20
        
        ```
        
    2. 引用类型，**引用复制（指向同一个对象）**
        
        ```jsx
        let obj1 = { age: 25 };
        let obj2 = obj1;   // obj2 与 obj1 指向同一个对象
        obj2.age = 30;
        console.log(obj1.age); // 30（被一起修改）
        
        ```
        
4. **动态属性 & 可变性**
    1. 原始类型：变量的值可变，但**值本身不可扩展**
    2. 引用类型：对象内部可增删改属性
5. **总结**
    - 原始值：存栈 → 不可变 → 复制值 → 修改互不影响
    - 引用值：存堆 → 可变 → 复制引用 → 修改彼此影响
    - 原始类型不能扩展属性；对象能
    - 两个变量的对象赋值操作本质是“指向同一个堆地址”

![image.png](JavaScript%20-%20%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E5%BC%95%E7%94%A8%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/image.png)