---
titleEn: "What is a socket?"
titleCh: "Socket是什么"
tags: ["engineering"]
---

- **定义**：Socket 套接字是操作系统提供的 API，可以让应用层程序使用传输层协议（TCP/UDP）。
- **作用**：
    - 给应用程序**提供统一的 API**，让程序像操作文件一样进行网络读写。
    - 应用层通过调用 Socket API 来使用传输层协议（TCP/UDP）
- **Socket 在网络分层中的位置**
    - Socket 本身**不是协议**，而是操作系统提供的 **API**。
    - 它夹在 **应用层和传输层**之间：
        - 向上：应用程序通过 Socket 读写数据。
        - 向下：Socket 调用 TCP/UDP，把数据交给 IP 层去传输。
- **直观理解**：
    - IP → 找到哪台机器
    - Port → 找到机器上的服务
    - Socket → 把 IP + Port 组合成一个可编程的通信端口