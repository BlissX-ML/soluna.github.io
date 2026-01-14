---
titleEn: "The Basic Process of XMR"
titleCh: "XMR 的基本流程"
tags: ["JavaScript"]
---


1. **创建 XHR 对象**：`var xhr = new XMLHttpRequest();`
2. **调用 `open()` 方法**
    1. 配置**请求方法** / URL / 是否异步
    2. 方法支持：获取 `GET`，提交 `POST`，更新 `PUT`，删除 `DELETE`
    3. **示例**：`xhr.open("GET", "/api/data", true);`
3. **调用 `send()` 方法**
    1. 发送请求数据
    2. **GET 无参数**：`xhr.send();`
    3. **POST 可附带请求体**：
        - `xhr.**setRequestHeader**("Content-Type", "application/json");`
        - `xhr.send(JSON.stringify({ username: "Tom", password: "123456" }));`
4. **监听 `onreadystatechange`**
    1. 根据 `xhr.readyState (0-4)` 和 `xhr.status` 判断是否成功
        - UNSENT `0` → 已创建 XHR 对象，但还没有调用 `open()`
        - OPENED `1` → 已调用 `open()`，但还没调用 `send()`
        - HEADERS_RECEIVED `2` → 已调用 `send()`，接收到响应头
        - LOADING `3` → **正在接收**响应体数据（部分数据可用）
        - DONE `4` → 响应接收**完成**，可以使用 `responseText` 或 `responseXML`
    2. `xhr.status` 即 HTTP 状态码
        
        ```jsx
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) { console.log(xhr.responseText); }
        };
        ```
        
5. **更新页面**
    - 浏览器不会自动显示结果
    - 通过 JS 操作 DOM，把返回数据渲染到页面
