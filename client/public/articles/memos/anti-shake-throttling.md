---
titleEn: "Achieve anti-shake and throttling"
titleCh: "实现防抖和节流"
tags: ["JavaScript"]
---

1. **防抖（debounce）**
    1. 原理：**连续触发只执行最后一次**；每次触发都重置计时器。
    2. 适用：搜索输入框、窗口 resize、按钮多次点击。
    
    ```jsx
    function debounce(cb, delay = 250) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => cb(...args), delay);
      };
    }
    ```
    
2. **节流（throttle）**
    1. 原理：**固定时间内只执行一次**；无论触发多少次都按节奏执行。
    2. 适用：scroll 滚动、mousemove、拖拽。
    
    ```jsx
    // ----- **定时器版节流 (设定 shouldWait，执行一次后必须等 delay 才能执行下一次) -----**
    function throttle(cb, delay = 250) {
      let locked = false;
      return (...args) => {
        if (locked) return;                 // 已在冷却时间内 → 跳过触发
        cb(...args);                        // 立即执行回调
        locked = true;                      // 开启节流锁，禁止再次执行
        setTimeout(() => (locked = false), delay);   // delay 毫秒后解锁，下一个触发才能执行
      };
    }
    
    // ----- **时间戳版节流 (立即执行, 利用时间差判断是否超过 delay)**
    function throttle(cb, delay) {
     let previous = 0;                     // 上一次执行回调的时间
     return (...args) => {
       const now = Date.now();             // 当前触发的时间，或者用 new Date().getTime()
       if (now - previous > delay) {       // 若距离上一次执行已超过 delay，则可以执行
         cb(...args);                      // 执行回调
         previous = now;                   // 记录当前执行时间
       }
     };
    }
    ```
    
3. **总结**
    - **防抖：**不动了才执行一次（最后一次）
    - **节流：**固定频率执行（间隔执行）
    - **都需要事件触发，不会自动运行，不是计时器**