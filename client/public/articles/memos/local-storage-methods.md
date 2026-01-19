---
titleEn: "Local storage methods"
titleCh: "本地存储的方法"
tags: ["engineering"]
---


1. **JavaScript 本地存储的主要方式**
    - `cookie`
    - `localStorage`
    - `sessionStorage`
    - `indexedDB`
2. **`cookie`**
    - 作用：解决 HTTP **无状态**问题，用于身份识别、行为跟踪。
    - 特点：
        - 数据量小（一般 ≤ 4KB）
        - 可设置过期时间、作用域、安全属性
        - 会随请求自动发送到服务器
    - 缺点：容量小、频繁携带影响性能
3. **`localStorage`**
    - 作用：持久化存储当前源的数据。
    - 特点：
        - 生命周期长期存在，除非手动清除。
        - 仅能存字符串（对象需序列化）。
        - 操作简单，同步 API。
    - 缺点：
        - **无法设置过期时间**。
        - 同步操作，大数据量下性能一般。
4. **`sessionStorage`**
    - 作用：临时存储**会话级数据**。
    - 特点：
        - 使用方式与 localStorage 相同。
        - 页面/标签页关闭即清除。
    - 适合：一次性、短生命周期数据。
5. **`indexedDB`**
    - 作用：在客户端存储**大量结构化数据**。
    - 特点：
        - 存储容量大，理论无上限。
        - 原生支持对象、二进制数据。
        - 异步操作，性能好。
    - 缺点：
        - API 复杂，学习和使用成本高。
6. 使用场景总结
    - cookie：用户标识、跟踪行为
    - localStorage：长期本地数据（如 token）
    - sessionStorage：临时、敏感、一次性数据
    - indexedDB：大量数据、本地数据库、离线或富文本历史记录。