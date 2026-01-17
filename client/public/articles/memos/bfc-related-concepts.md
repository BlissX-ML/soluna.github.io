---
titleEn: "BFC-related concepts"
titleCh: "BFC相关概念"
tags: ["CSS"]
---

1. **BFC 概念**
    - BFC（Block Formatting Context，**块级格式化上下文**）是浏览器渲染中的一块独立区域。
    - 这个区域里的元素会按照自己的规则布局，**内部布局与外部元素互不影响**。
    - 常用于解决**浮动、margin 重叠、父元素高度塌陷**等布局问题。
    - 多列子元素**可能超出容器宽度**
2. **BFC 的布局规则**
    - **BFC 内部的布局独立**，**浮动的子元素**也会被计算进来，**不会**影响外部元素。
    - 两个元素在**同一个 BFC 内会重叠**，但如果它们分别在**不同的 BFC 内，就不会重叠**。
3. **如何触发 BFC**
    - 根元素 `<html>` 自带 BFC
    - 设置 **`float: left / right`**
    - 设置 **`position: absolute / fixed`**
    - 设置 **`display: inline-block / table-cell / table-caption`**
    - 设置 **`overflow: hidden / auto / scroll`，不为 `visible`**
    - **触发 BFC 不需要同时写多个，只要满足一种条件即可**。实际项目里最常用的是 `overflow: hidden`
4. **常见使用场景**
    - **解决 margin 重叠**：相邻块级元素上下 margin 会合并，触发 BFC 可以避免。
    - **清除浮动（父元素高度塌陷）**：父容器触发 BFC 后，会把子元素的浮动高度计算进去。
    - **防止浮动覆盖内容**：BFC 容器会自动避开浮动的兄弟元素，不会被压住。
    - **多列布局**：利用 BFC 可以让列元素在同一行排列，避免因为宽度计算误差而自动换行。
5. **BFC的简化回答**
	1. **BFC 的作用**
		- BFC（块级格式化上下文）主要解决三个问题：**margin 重叠、浮动带来的父元素高度塌陷、避免浮动覆盖内容**。
		- 它的意义在于：**让当前块元素的布局和外部互不干扰**，内部浮动元素也会参与高度计算。
	2. **BFC 的触发条件**
		- 最常见的方式是：`overflow: hidden`。
		- 其他方式还有：设置 `float`、`position: absolute/fixed`、`display: inline-block / table-cell` 等。
		- 这些条件只要满足一个就能触发 BFC，不需要全部一起写。
	3. **BFC 的对比与限制**
		- 早期多列布局常用 float，但 float 会导致父元素塌陷，需要 BFC 来修复；而 **flex 更现代、直接解决布局问题**。
		- BFC 不能解决 **border 重叠**，因为它只管布局，不管边框绘制。
		- 如果要避免 border 叠加，可以用 `outline` 或 `box-shadow` 模拟分隔线；`border-collapse` 只对表格生效。
