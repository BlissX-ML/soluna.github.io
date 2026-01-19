---
titleEn: "Distinguishing Socket and WebSocket"
titleCh: "区别 Socket 和 WebSocket"
tags: ["engineering"]
---

- **Socket**：
    - **通信抽象层接口**，基于 TCP/UDP。
    - 提供编程 API，本质是**编程模型**，不限具体协议。
- **WebSocket**：
    - **应用层协议**，专为浏览器与服务器的**全双工通信**设计。
    - 握手阶段用 HTTP，之后走 TCP 通道。
    - 本质上是基于 Socket 封装的具体协议。
- **面试速答**：
    - **Socket 是接口，WebSocket 是协议**。
    - WebSocket 底层基于 TCP，通过 Socket 实现。