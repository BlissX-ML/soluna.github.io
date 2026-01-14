---
titleEn: "The Difference Between XHR and the Fetch API"
titleCh: "XHR 和 Fetch API 的区别"
tags: ["JavaScript"]
---

1. **XHR**
    1. **优点**：出现早，兼容性好
    2. **缺点**：回调式 API，代码冗余，需要手动处理 Promise 化、超时、跨域等
	
2. **Fetch API**
    1. 优点：基于 Promise，写法简洁，可配合 `async/await`
    2. 更好支持 **流（Stream）**、跨域配置
    3. 缺点：不支持超时、上传进度监听，需要额外封装
	
3. XHR 和 fetch 都是 **Web API**，而不是 ECMAScript 内置类