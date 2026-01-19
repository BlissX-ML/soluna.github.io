---
titleEn: "Socket Connection Steps"
titleCh: "Socket 连接的步骤"
tags: ["engineering"]
---

1. **服务器监听**
    - ServerSocket 绑定 IP + 端口，处于等待状态。
    - 实时监听客户端发来的连接请求。
2. **客户端请求**
    - ClientSocket 知道服务器的 IP 和端口。
    - 主动向 ServerSocket 发起连接请求。
3. **连接确认**
    - ServerSocket 收到请求后，会建立一个新的连接通道，并返回确认信息。
    - 客户端确认后，双方正式建立 Socket 连接。
    - 注意：数据处理完毕后**本次 TCP 连接通常会断开**，但 ServerSocket **自身继续保持监听**状态。
4. **总结口诀**：
    - **监听 → 请求 → 确认 → 建立连接（Server 一直监听，Client 主动发起）。**
    - 通过 `bind` 绑定 IP 和端口，`listen` 开始监听，等待客户端通过 `connect` 发起连接。
