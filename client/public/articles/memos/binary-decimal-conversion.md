---
titleEn: "Binary and Decimal Conversion"
titleCh: "二进制与十进制相互转换"
tags: ["JavaScript"]
---


1. **十进制转二进制**
    1. **原理**：使用 `Number.prototype.toString(2)` 将数字转换成二进制**字符串**
    2. **示例**：
        
        ```jsx
        (10).toString(2);   // "1010"
        (5).toString(2);    // "101"
        (0.5).toString(2);  // "0.1"
        ```
        
2. **二进制转十进制**
    1. **原理**：使用 `parseInt(str, 2)` 将二进制字符串转换为十进制**数字**
    2. **示例**：
        
        ```jsx
        parseInt("1010", 2); // 10
        parseInt("101", 2);  // 5
        parseInt("0.1", 2);  // 0（小数不支持）
        ```
        
3. **二进制浮点数转十进制（更复杂，用算法处理）**
    1. **原理**：分整数部分和小数部分分别处理
        - 整数部分：不断除以 2
        - 小数部分：不断乘以 2
    2. **示例（简单版）**：
        
        ```jsx
        function binaryToDecimal(bin) {
          let [int, frac = ""] = bin.split(".");
          let intVal = parseInt(int, 2);
        
          let fracVal = 0;
          for (let i = 0; i < frac.length; i++) {
            fracVal += frac[i] * Math.pow(2, -(i + 1));
          }
          return intVal + fracVal;
        }
        
        binaryToDecimal("10.1"); // 2.5
        
        ```
        
4. **一句话总结**
    - **最常用：`num.toString(2)`（十进制 → 二进制）**
    - **最常用：`parseInt(str, 2)`（二进制 → 十进制）**
    - 小数互转需要手写算法，会涉及浮点数精度问题。