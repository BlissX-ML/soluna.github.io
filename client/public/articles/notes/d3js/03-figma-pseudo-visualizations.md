---
titleEn: "Pseudo Visualizations by Figma"
titleCh: "通过 Figma 实现伪可视化"
tags: ["d3.js", "svg", "figma"]
---

1. **通过 Figma 实现伪可视化**
    - 使用 Frame 作为画布承载所有图形元素
    - 在画布中直接拼装图形（矩形、圆、线、路径等）
    - 选中 Frame → 在右侧属性面板中通过 Export 导出 SVG
    - 多块元素间距调整：多选元素后，拖拽间距提示箭头统一设置
    - 连续线段使用 Pen 工具，拐角样式可在 Stroke 设置为直角或圆角
2. **Figma 导出的文字**
    - 文字导出为 SVG 后通常表现为 `<path>`
    - `<path>` 可显示但不具备文本语义，维护成本高
    - 实际开发中可手动改写为 `<text>`，更利于理解与控制
3. **Google Fonts 的接入流程**
    - 在 Google Fonts 官网选择字体
    - 点击 Get Font → Get Embedded Code
    - 复制生成的 `<link>` 并引入项目
    - 在 CSS 中通过 `font-family` 应用于文字或 SVG
4. **规范化 SVG 输出**
    1. 选中对象，注意并不是选中 Frame， 而是要选中实际对象
    2. 点击右键，选择Outline-stroke（描边转路径）
    3. 点击右键选择 Flatten（压平）
    4. 选择页面右上角的图标 Boolean Union（合并）
    5. **注意**：通过这个方式导出的 SVG 矢量图无法重新导入修改细节
5. **可参考的数据可视化资源**
    1. 用于理解数据可视化的分类与结构体系
    2. 可作为设计与实现阶段的参考索引
    3. [data-visualization-taxonomies](https://github.com/datavis-tech/awesome-dataviz-education#data-visualization-taxonomies)

![figma-pseudo-visualizations](/images/webp/notes/d3js/03-figma-pseudo-visualizations.webp)