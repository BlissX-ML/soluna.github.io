---
titleEn: "AJAX Principles"
titleCh: "AJAX 原理"
tags: ["JavaScript"]
---


1. **定义**
    1. AJAX (Asynchronous JavaScript and XML)
    2. 在 **不刷新整个页面** 的情况下，与服务器交换数据，更新网页局部内容
    3. 最初依赖 **XMLHttpRequest (XHR)**，现在 **XHR / Fetch** 都可实现
2. **核心对象**
    1. 原始：`XMLHttpRequest`
    2. 现代：`XHR` 或 `Fetch`
    3. 二者都是 **Web API**（不是 JS 内置类）
3. **优点**
    1. 异步更新，用户**体验好**
    2. 节省带宽，提高响应**速度**
4. **缺点**
    1. **不利于 SEO**（搜索引擎难抓取动态内容）
    2. 前进/后退、缓存功能可能受影响
    3. 跨域需服务端设置 **CORS**
