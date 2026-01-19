---
titleEn: "CSS position property"
titleCh: "CSS position 属性"
tags: ["CSS"]
---


1. **static（默认值）**
    - **默认**定位方式，元素按文档流正常排布，不受 top / left / right / bottom 控制。
    - **是否脱离文档流**：否（占据空间）
    - 示例：`.box { position: static; }`
2. **relative（相对定位）**
    - 元素相对于 **自身原始位置** 定位，偏移后依然保留原来位置。
    - **是否脱离文档流**：否（占据空间）
    - 常用于：作为 absolute 子元素的参考点。
    - 示例：`.box { position: relative; top: 10px; left: 20px; }`
3. **absolute（绝对定位）**
    - 元素相对于 **最近已定位的父元素 / `<html>`** 定位。
    - **是否脱离文档流**：是 ✅（不占据空间），可与其他元素重叠。
    - 示例：`.box { position: absolute; top: 0; right: 0; }`
4. **fixed（固定定位）**
    - 元素相对于 **浏览器窗口（视口）** 固定，不随页面滚动。
    - **是否脱离文档流**：是 ✅（不占据空间）
    - 常用于：悬浮导航、返回顶部按钮。
    - 示例：`.box { position: fixed; bottom: 20px; right: 20px; }`
5. **sticky（粘性定位）**
    - 混合定位：
        - 一开始按 **relative** 排布（在文档流中），
        - 当**滚动到设定阈值**时，切换为 **fixed**（固定位置）。
    - **是否脱离文档流：**否 - relative ❎ / 是 - fixed ✅（占据空间）
    - 常用于：表头固定、吸顶效果。
    - 示例：`.header { position: sticky; top: 0; background: #fff; }`
6. **inherit（继承定位）**
    - 继承父元素的 position 值。
    - **是否脱离文档流：**与父元素相同
    - 示例：`.child { position: inherit; }`

7. **对比总结**
	| 值 | 是否脱离文档流 | 参照对象 | 是否占据空间 | 常见用途 |
	| --- | --- | --- | --- | --- |
	| static | 否 | 无（正常流） | 是 | 默认布局 |
	| relative | 否 | 元素自身原始位置 | 是 | 微调、作为参考点 |
	| absolute | 是 | 最近已定位的父元素 / html | 否 | 弹层、控件 |
	| fixed | 是 | 浏览器窗口（视口） | 否 | 悬浮导航、返回顶部 |
	| sticky | 否（初始）/是（吸附后） | 最近的块级祖先 + 滚动阈值 | 是 | 吸顶、表头固定 |
	| inherit | 跟父元素相同 | 跟父元素相同 | 跟父元素相同 | 特殊场景 |