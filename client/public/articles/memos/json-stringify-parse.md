---
titleEn: "`JSON.stringify` and `JSON.parse`"
titleCh: "`JSON.stringify` 和 `JSON.parse` 区别"
tags: ["JavaScript"]
---

1. **`JSON.stringify()`**
    - **作用**：**把 JS 值/对象 → JSON 字符串**。
    - **输入**：
        - 基本类型（number, string, boolean, null）
        - 对象、数组
    - **输出**：JSON 格式的字符串
    - 特点：
        - **undefined / Symbol / 函数** → **被忽略**（对象属性会丢失；数组元素会变 null）。
        - 不能处理 **循环引用**（会报错）。
    - **示例**：`JSON.stringify({ a: 1 })` → `'{"a":1}'`
2. **`JSON.parse()`**
    - 作用：**把 JSON 字符串 → JS 值/对象**。
    - 输入：合法的 JSON 字符串（注意必须是**双引号**）。
    - 输出：对应的 JS 值/对象。
    - 示例：`JSON.parse('{"a":1}')` → `{ a: 1 }`
3. **常见用途**
    - 两者搭配：`JSON.parse(JSON.stringify(obj))` 实现深拷贝
    - 但有缺陷：丢失函数/undefined/Symbol、循环引用报错。