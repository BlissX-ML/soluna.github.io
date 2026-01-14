---
titleEn: "JavaScript Type Conversion"
titleCh: "JavaScript 类型转换"
tags: ["JavaScript"]
---

1. **JavaScript 类型转换分两种**
    1. 隐式转换（`==`、`+`、模板字符串、`if` 等场景自动发生）
    2. 显式转换（`Number()`、`String()`、`Boolean()`、`toString()`等）

2. **`+` 运算符的隐式转换规则**
    1. **一元 `+`**：把值转换成数字
    2. **二元 `+`**
        - 任意一边**是字符串**，则两边都转成**字符串**
        - 两边都不是字符串，则**转成数字**再相加
        
3. **对象的隐式转换**
    1. 对象会先调用 **`toPrimitive` → `valueOf` → `toString`** 依次尝试转换
    2. 普通对象：`{}.toString() // "[object Object]"`
    3. 数组例外（特殊行为）： `[1,2,3].toString() // "1,2,3"` 
	
    4. **特殊例子（高频面试）：**
        
        ```jsx
        [] + []      // ""
        [] + {}      // "[object Object]"
        {} + []      // "[object Object]"
        ```
        
4. **显式类型转换（推荐写法）**
    1. 转数字：`Number()`、`parseInt()`
    2. 转字符串：`String()`、`value.toString()`
    3. 转布尔：`Boolean()`
	
5. **JS 类型转换的三大方向**
    - **to Boolean**
        - 只要**不是空**的东西，几乎都是真（true）
        - 常见为 `false` 的只有 7 个：`false` / `0` / `NaN` / `""` / `null` / `undefined` / `document.all`
    - **to Number**
        - 能转成数字的字符串，获得对应的数值。如 `"123"` → 123
        - 空字符串获得`0`，如 `"" → 0`
        - 不能转数字的东西，转换为 `NaN`，如**`"abc" / {} / fn` → `NaN`**
        - **特殊**：`true → 1`，`false → 0`
    - **to String**
        - 所有值都能变成字符串（最稳定）
            - `true → "true", 123 → "123", null → "null", undefined → "undefined"`
            - **`[] → ""`**
            - **`["abc"] → "abc"`**
            - **`{} → "[object Object]"`**
			
6. **高频特殊情况（面试必考）**
    - 空数组 `[]`
        - to Boolean → `true`
        - to Number → `0`
        - to String → `""`
    - 单元素数组 `["123"]`
        - to Number → `123`
        - to String → `"123"`
    - 多元素数组 `["123","abc"]`
        - to Number → `NaN`
        - to String → `"123,abc"`（有逗号分隔的）
    - `NaN`
        - to Boolean → `false`
        - to Number → `NaN`
        - to String → `"NaN"`