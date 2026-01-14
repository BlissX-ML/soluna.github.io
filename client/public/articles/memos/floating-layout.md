---
titleEn: "Floating Layout"
titleCh: "浮动布局（Float）"
tags: ["CSS"]
---


1. **原理**：
    1. 元素浮动后**脱离标准文档流**，向左/右移动，直到碰到**父容器边界**或**其他浮动元素**。
    2. `float` 的移动范围 = 父元素（包含块）的内容区域 + 前一个浮动的边界。
2. **优点**
    - **图文混排**：文字可环绕图片
    - **具备块级特性**：可设置宽高
    - **横向排列灵活**：可指定 `left/right`，避免 inline-block 空白间隙
3. **缺点**
    - **父元素高度塌陷**（因浮动不再撑开父容器）
    - 布局受限，难以应对复杂场景
4. **解决塌陷方法**
    - **BFC**：`overflow: hidden/auto`、`display: flow-root`
    - **Clearfix**：`::after { content: ""; display: block; clear: both; }`
5. **现代替代方案**
    - **Flex**：一维布局，常用于水平/垂直居中、分布
    - **Grid**：二维布局，更强大