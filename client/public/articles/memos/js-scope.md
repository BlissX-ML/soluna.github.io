---
titleEn: "Scope in JavaScript"
titleCh: "作用域"
tags: ["JavaScript"]
---


1. **静态作用域和动态作用域**
    1. **静态作用域**：与代码的位置有关，与执行环境无关。JavaScript 采用的是静态作用域。
    2. **动态作用域**：即运行时，代码执行时确定的。
2. **JavaScript 的作用域**
    1. **全局作用域**：脚本模式运行所有代码的默认作用域
    2. **函数作用域**：由函数创建的作用域
    3. **块级作用域**：用一对花括号（一个代码块）创建出来的作用域
    4. **模块作用域**：模块模式中运行代码的作用域
3. **块级作用域声明（`let / const / class`）**
    1. **原理**：进入作用域变量已存在但不可访问，执行到声明后才可用；不会挂到 window
    2. **特点**：块级作用域；有 TDZ；不能重复声明；非全局属性。
4. **函数作用域声明（`var`）**
    1. **原理**：声明提升，未赋值前是 undefined；无 TDZ；会挂到 window。
    2. **特点**：函数作用域；无 TDZ；可重复声明；是全局属性。
5. **`function`（提升特殊）**
    1. **原理**：函数整体提升；可在声明前调用；脚本环境下会挂到 window。
    2. **特点**：块级规则（ES2015 后）；可重复声明；是全局属性（在脚本中）。
6. **模块作用域（ES Modules）**
    1. **原理**：每个模块文件**都是独立作用域**；顶层不会挂到 window；变量仅在**模块内部可见**。
    2. **特点**：独立、不污染全局；模块间用 import/export；导出是“活的绑定”。
    3. **示例**：
        
        ```jsx
        // moduleA.js
        export let count = 1;
        export function add() {
          count++;
        }
        
        // moduleB.js
        import { count, add } from './moduleA.js';
        
        console.log(count); // 1
        add();
        console.log(count); // 2（活的绑定，值会更新）
        
        // 顶层声明不会出现在 window 上
        console.log(window.count); // undefined
        ```
        

![image.png](JavaScript%20-%20%E4%BD%9C%E7%94%A8%E5%9F%9F/image.png)