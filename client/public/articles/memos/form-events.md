---
titleEn: "Common Form Events"
titleCh: "常见表单事件"
tags: ["JavaScript"]
---


- 提交：`form.addEventListener("submit", e => e.preventDefault())`
- 输入：`input.addEventListener("input", e => {...})`
- 值变更：`input.addEventListener("change", e => {...})`
- 聚焦/失焦：`focus` / `blur`
- 事件委托：`form.addEventListener("input", e => { if(e.target.name==="email"){...} })`