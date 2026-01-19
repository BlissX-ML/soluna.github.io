---
titleEn: "Form Event Listener"
titleCh: "事件监听表单"
tags: ["JavaScript"]
---


1. **单个元素**
    - 如通过 `getElementById / querySelector` 获取的表单元素
    - 可以直接使用 `.addEventListener()`
2. **集合**
    - 如获得的表单元素为 NodeList 或 HTMLCollection 集合
    - 需要遍历集合，逐个绑定事件
    - HTMLCollection 需转数组
        
        ```jsx
        document.querySelectorAll("input").forEach(el => {
          el.addEventListener("input", e => console.log(e.target.value));
        });
        ```