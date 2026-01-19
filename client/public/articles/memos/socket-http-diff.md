---
titleEn: "Distinguishing Between Socket and HTTP"
titleCh: "区分 Socket 和 HTTP"
tags: ["engineering"]
---

- **HTTP**：**应用层协议**，基于请求-响应模式。
- **Socket**：底层**通信接口**，可以支撑 HTTP，也能支撑 WebSocket、FTP、SMTP 等。
- 举例：
    - 浏览器访问网页 → 走 HTTP 协议，底层通过 Socket 传输。
    - 聊天室实时通信 → 走 WebSocket 协议，底层同样依赖 Socket。