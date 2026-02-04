---
titleEn: "D3.js Date Formatting and Data Updates"
titleCh: "D3.js 时间格式化与数据更新"
tags: ["d3.js"]
---

1. **d3-time-format**
    1. **`d3.timeFormat(specifier)`** → 日期对象转换成字符串（本地时区）
    2. **`d3.timeParse(specifier)`** → 字符串转换成日期对象（本地时区）
    3. **`d3.utcFormat(specifier)`** → 日期对象转换成字符串（UTC时区）
    4. **`d3.utcParse(specifier)`** → 字符串转换成日期（UTC时区）
    5. **解释：**
        - **`format`** → 输入日期
        - **`parse`** → 输入**字符串**
        - **`specifier`**  → 决定字符串格式，**解析与格式化必须严格匹配**
    6. **常见的指定符：**
        
        
        | 指示符 | 含义 | 指示符 | 含义 |
        | --- | --- | --- | --- |
        | `%Y` | 年（2025） | `%a` | 周（缩写） |
        | `%m` | 月（01 - 12） | `%A` | 周（全称） |
        | `%d` | 日（01 - 31） | `%w` | 周（0 - 6，星期日起） |
        | `%H` | 时（00 - 23） | `%b` | 缩写月份名称 |
        | `%M` | 分（00 - 59） | `%B` | 完整月份名称 |
    
    ```jsx
    import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
    
    const localFormat = d3.timeFormat("%Y-%m-%d %a");
    console.log(localFormat(new Date())); // 2025-12-31 Wed
    
    const localParse = d3.timeParse("%Y-%m-%d %w");
    console.log(localParse("2026 1 1 4")); // Thu Jan 01 2026 00:00:00 GMT+0800 (中国标准时间)
    
    const utcFormat = d3.utcFormat("%Y-%m-%d %a");
    console.log(utcFormat(new Date())); // 2025-12-31 Wed
    
    const utcParse = d3.utcParse("%Y-%m-%d %w");
    console.log(utcParse("2026-1-1 4")); // Thu Jan 01 2026 08:00:00 GMT+0800 (中国标准时间)
    
    // ----- 中国时间 -----
    const zhLocale = d3.timeFormatLocale({
        dateTime: "%Y-%m-%d %H:%M:%S",
        date: "%Y-%m-%d",
        time: "%H:%M:%S",
        periods: ["上午", "下午"],
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",],
        shortDays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月",],
        shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月",],
    });
    
    const localZHFormat = zhLocale.format("%Y-%m-%d %A");
    console.log(localZHFormat(new Date())); // 2025-12-31 星期三
    ```
    
    ---
    
2. **如何间隔一段时间就更新一次数据**
    1. `setInterval()`
        - 包含 `svg.call(operation)` 实现间隔更新
        - **缺点**：若 `operation` 中包含 `append` 操作，那么会造成元素之间的重叠，DOM 会拉长
    2. **优化数据自动更新**
        - **operation** 会在内部存储数据。
        - 除非**显式更新数据**，否则多次调用会使用相同的存储数据。
        - 也就是说：**不手动更新，不会自己搜素更新**
    3. **优化 DOM 不断添加的行为**
        - 将 `append` 更新为 `selectAll` 相关，如此可以避免添加新的元素
        - 添加 `class` 类名避免重复设置