---
titleEn: "Differences Between Cookies, sessionStorage, and localStorage"
titleCh: "区别 Cookie, sessionStorage, localStorage"
tags: ["engineering"]
---

1. **相同点：**都是存储在 **客户端** 的数据方案
2. **不同点**
    - **Cookie**
        - **大小**：≤ 4KB
        - **生命周期**：可设置过期时间
        - **特点**：会**随请求**自动**发送到服务器**（只有 Cookie 会随请求发送）
        - **场景**：**登录状态保持**，记录用户偏好
        - 示例：`document.cookie = 'username=Tom'`
    - **localStorage**
        - **大小**：≈ 5MB
        - **生命周期**：永久存储（除非手动删除）
        - **特点**：**仅保存在本地**，不会随请求发送
        - **场景**：保存用户的主题/皮肤选择，保存**购物车状态**
        - **示例**：`localStorage.setItem("name", "Tom");`
    - **sessionStorage**
        - **大小**：≈ 5MB
        - **生命周期**：窗口/标签页**关闭即清空**
        - **特点**：同源不同 tab **不共享**；新 tab 打开会复制一份，之后不再同步
        - **场景**：**临时表单数据**，分步骤操作的状态保持
    - **IndexedDB**
        - **大小**：远超 5MB，可存储大量数据
        - **特点**：**键值对数据库**，支持事务、索引，可存对象/文件
        - **场景**：离线笔记应用、大型数据缓存（如富文本编辑器的草稿、历史版本）
        - **示例**：`indexedDB.open("MyDB", 1)`
3. **数据格式**
    - Cookie本质上存储的是 **字符串**
    - localStorage / sessionStorage 只能存字符串
        - 存：`JSON.stringify(obj)`
        - 取：`JSON.parse(str)`
4. **面试总结答法**
    - 容量：Cookie < local/session ≪ IndexedDB
    - 生命周期：Cookie(可设) / localStorage(永久) / sessionStorage(临时)
    - 网络：只有 Cookie 会随请求发送
    - 场景：Cookie(身份) / localStorage(长期) / sessionStorage(临时) / IndexedDB(大量数据)

![image.png](The-Difference-Between-Cookies_%20sessionStorage_and/image.png)