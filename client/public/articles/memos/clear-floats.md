---
titleEn: "Methods for Clearing Floats"
titleCh: "清除浮动的方法"
tags: ["CSS"]
---

1. **添加空标签**
    - **常见方式**：`<div style="clear: both;"></div>`
    - **优点**：简单直观，容易理解
    - **缺点**：增加无意义标签，违背语义化，**不利于维护**
2. **父元素设置 overflow**
    - **常见方式**：`.parent { overflow: auto; }`
    - **优点**：实现简洁
    - **缺点**：可能触发滚动条，**隐藏溢出**内容
3. **父元素设置浮动**
    - **常见方式**：`.parent { float: left; }`
    - **优点**：能清除浮动
    - **缺点**：会影响整体布局，如果父元素还有父元素，会层层浮动，**结构混乱**
4. **使用伪元素 `:after`**
    - **常见方式**：`.clearfix::after { content: ""; display: block; clear: both; }`
    - **优点**：结构与样式分离，**常用推荐做法（父元素上添加）**
    - **缺点**：需要额外写样式类
5. **触发 BFC (块级格式化上下文)**
    - **常见方式**：
        - `.parent { overflow: hidden; }`
        - `.parent { display: flow-root; }  /* CSS3 推荐 */`
    - **优点**：从根本上解决高度塌陷问题，是**目前最优方案**
    - **缺点**：需要理解 BFC 概念