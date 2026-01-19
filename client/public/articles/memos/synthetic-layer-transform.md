---
titleEn: "What is a Synthetic Layer Transformation?"
titleCh: "什么是合成层变换？"
tags: ["engineering"]
---

- 浏览器渲染一般分三步：**回流（Reflow） → 重绘（Repaint） → 合成（Composite）**。
- 有些 CSS 属性（比如 `transform`、`opacity`、`will-change`）不会触发回流或重绘，而是交给 **GPU 合成层** 去处理。
- GPU 擅长做几何变换和透明度计算，所以这类操作性能开销最低。
- GPU 是硬件，浏览器里的 GPU 加速指的是把 transform、opacity 这类不影响布局的操作交给 GPU 的合成层处理，不需要回流和重绘，所以性能最好。
