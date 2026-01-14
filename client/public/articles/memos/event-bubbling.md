---
titleEn: "Event Bubbling"
titleCh: "事件冒泡"
tags: ["JavaScript"]
---


1. **定义**
    - 当一个事件在某个元素上触发时，它会 **从目标元素开始，逐层上传递到祖先元素**，直到 `document` / `window`
    - **事件传播分为三个阶段**：
        - **捕获**阶段（事件从 `window` → `document` → 父元素 → 子元素传递）
        - **目标**阶段（事件在目标元素上触发）
        - **冒泡**阶段（事件从目标元素向上传递回 `document` / `window`）
2. **为什么需要冒泡**
    - 方便实现 **事件委托 (Event Delegation)**
    - 给父元素绑定事件，就能**统一处理子元素**的事件，减少事件监听器数量，提高性能。
3. **如何阻止冒泡**
    - `event.stopPropagation()`：阻止事件继续冒泡到父元素。
    - `event.stopImmediatePropagation()`：阻止冒泡，并且阻止当前元素上的其他监听器执行。
    - 在捕获阶段监听：
        - `addEventListener('click', handler, true)`，`true` 表示在捕获阶段触发。