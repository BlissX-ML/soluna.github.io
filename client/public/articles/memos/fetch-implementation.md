---
titleEn: "Fetch Implementation Flow"
titleCh: "Fetch的实现流程"
tags: ["JavaScript"]
---


1. **创建请求**
    1. 直接调用 `fetch(url, options)` 返回一个 Promise
    2. **语法**：`fetch("/api/data", { method: "GET" })`
2. **配置请求**（`options` 里配置）
    
    ```jsx
    fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "Tom", password: "123456" })
    })
    ```
    
3. **发送请求**（自动发送，无需额外请求）
4. **监听响应**
    1. 基于 Promise：`.then() / .catch()`
    2. 失败只在 **网络错误** 时 reject
    3. HTTP 4xx/5xx 不会 reject，需检查 `response.ok`
        
        ```jsx
        fetch("/api/data")
          .then(response => {
            if (!response.ok) throw new Error("请求失败：" + response.status);
            return response.json();   // 解析 JSON
          })
          .then(data => console.log(data))
          .catch(err => console.error(err));
        
        // ---- Update: async/await ----
        try {
          const res = await fetch("/api/data");
          if (!res.ok) throw new Error(res.status);
          const data = await res.json();
        } catch (err) { console.error(err); }
        ```
        
5. **更新页面**
    1. 浏览器不会自动显示结果
    2. 通过 JS 操作 DOM，把返回数据渲染到页面
6. **若要取消请求**：
	```jsx
	const controller = new AbortController();
	fetch("/api/data", { signal: controller.signal });
	controller.abort();
	```