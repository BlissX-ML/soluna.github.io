---
titleEn: "How browsers render the UI"
titleCh: "浏览器如何渲染 UI"
tags: ["engineering"]
---


1. **浏览器如何渲染UI？**
    - **解析 HTML**：构建 **DOM Tree**
    - **解析 CSS**：构建 **CSSOM Tree（Style Rules）**
    - **合并**：DOM + CSSOM → **Render Tree**（只包含可见节点）
    - **布局（Layout）**：计算各节点的大小和位置（盒模型尺寸 + 坐标）
    - **绘制（Paint）**：将 Render Tree 转换成绘制指令（颜色、文字、边框等）
    - **合成（Composite）**：多层图层交给 GPU，最终渲染到屏幕
2. **展示引擎（Rendering Engine）** 负责 UI 渲染流程
3. **DOM Tree 是如何构建的？**
    - **转码**：二进制数据转为 HTML 字符串
    - **分词（Tokenizer）**：将字符串解析为 Token（**词法单元**，标签、属性、文本等）
    - **构建 Node**：根据 Token 生成 Node（DOM 节点对象，包含属性、父子/兄弟指针）
    - **生成 DOM Tree**：通过 Node 的关系拼接成完整 DOM 树
    - **总结：二进制数据 → 字符串 → Token → Node → DOM 树**