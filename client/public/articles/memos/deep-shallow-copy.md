---
titleEn: "Deep Copy and Shallow Copy"
titleCh: "深拷贝与浅拷贝"
tags: ["JavaScript"]
---


1. **浅拷贝**
    - **只复制第一层**，深层的引用类型还是指向同一个地址
    - **基本类型**：直接拷贝值。
    - **引用类型**：拷贝的是地址，修改会相互影响。
    - **常见实现方式**：
        - `Object.assign(target, source)`，如`Object.assign({}, obj)`
        - **扩展运算符** `{...obj}`
        - 数组的 `slice()`、`concat()`
2. **深拷贝**
    - **完全拷贝一份数据**，开辟新的内存空间。
    - 修改一个对象不会影响另一个。
    - **常见实现方式**：
        - `JSON.stringify()` / `JSON.parse()` （**有缺陷**：丢失**函数、undefined、Symbol**）
        - **第三方库**：lodash 的 `_.cloneDeep()`，`jQuery.extend(true, …)`
        - **结构化克隆**：`structuredClone`，如 `const newObj = structuredClone(obj);`
3. 面试速答口诀
    - **浅拷贝：拷贝第一层，深层共享引用。**
    - **深拷贝：层层复制，互不影响。**
