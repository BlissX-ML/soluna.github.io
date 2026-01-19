---
titleEn: "CSS Length Units"
titleCh: "CSS长度单位"
tags: ["CSS"]
---

1. `px`（像素）
    - 绝对单位，不会响应式
    - 各设备内部像素密度不同，但 CSS px 始终是逻辑像素
2. `em`
    - 相对于当前元素的 font-size
    - 若自身未设置 font-size，则继承父元素
    - 会层层累计，可能导致 **em 嵌套放大**问题
3. `rem`
    - 相对于 html 元素的 font-size（root em）
    - 不会受父元素层级影响
    - 适合做响应式布局（常结合媒体查询）
4. 百分比 `%`
    - `width: %` → 相对于父元素的宽度
    - `height: %` → 需要父元素有确定高度才生效
    - `padding/margin:`
        - 上下左右全部相对于父元素的宽度（容易误解）
    - **绝不会相对于自身尺寸**
5. `vw / vh`
    - 相对于 viewport（视口）
    - 1vw = 视口宽度的 1%
    - 100vh = 全屏视口高度