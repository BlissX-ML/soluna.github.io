---
titleEn: "D3.js Timed Updates and Animation Transitions"
titleCh: "D3.js 定时更新与动画过渡"
tags: ["d3.js"]
---

1. **`setInterval`**
    1. 原生 JS 定时器，不感知 D3 的 selection / 数据绑定
    2. 容易和 D3 的更新流程打架，只适合非常简单的场景
2. **`.timer`**
    1. D3 提供的时间驱动工具，底层基于 `requestAnimationFrame`
    2. 会持续回调一个函数，并传入 `elapsed`（不能改原始数值，只能通过运算改变数值）
    3. 适合 **连续、无限、平滑** 的动画（如波浪、呼吸、背景动效）
    4. 特点总结：
        - 不需要递归
        - 不会堆积动画队列
        - 动画是实时计算的，而不是分段过渡
3. **`.transition`**
    1. D3 的过渡动画机制，用于从 A 状态平滑过渡到 B 状态
    2. **定义方法**：
        - 创建一个包含 `.transition` 定义的对象 `t`
        - 在需要过渡效果的 chain 上，添加 `.transition(t)`
    3. **调用位置：**
        - 会创建一个将整个**选择项作为整体**进行操作的过渡对象，而非单独修改各个元素
        - 调用 `.transition` 之前：操作的是 DOM 元素，可以添加元素
        - 调用 `.transition` 之后：操作的是过渡对象，**不可修改 DOM 结构**