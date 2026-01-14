---
titleEn: "The Relationship Between the WebSocket Protocol and HTTP"
titleCh: "WebSocket协议和 HTTP 的关系"
tags: ["engineering"]
---


1. WebSocket **不是 HTTP**，它是一个独立的协议。
    - 为兼容浏览器，WebSocket **最开始** 会用 HTTP 发一次请求，请求头里带：`Upgrade: websocket`。
    - 服务器同意后返回 `101 Switching Protocols`，从此双方不再用 HTTP，而是切换成 WebSocket。
2. WebSocket 借了 HTTP 的门票进入，但进来之后它自己是一套新的规则。
3. **为什么要使用WebSocket**？
    - **HTTP 天生是单向的**：只能浏览器主动问，服务器被动回。
    - WebSocket 出现后，变成双向通信，服务器也能主动发