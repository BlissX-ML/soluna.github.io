---
titleEn: "CSS Preprocessor"
titleCh: "CSS 预处理器"
tags: ["CSS"]
---


1. **CSS 预处理器是什么？**
    - 一种为 CSS **增加编程特性**的工具语言
    - 支持 **变量、嵌套、函数、运算、逻辑** 等，让 CSS 更简洁、可维护、适应性更强
    - 最终会 **编译成普通 CSS**，不用担心浏览器兼容
2. **常见预处理器对比**
    - **Sass**
        - **扩展名**：`.sass` / `.scss`（SCSS 语法**更接近 CSS**，应用更广）
        - **变量**：`$color: red;`
        - **特点**：功能**最强大**，生态完善，**支持条件语句、循环**、继承、mixin 等
        
        ```sass
        //  ----- 循环 -----
        @for $i from 1 through 5 {
          .box-#{$i} {
            width: 10px * $i;
          }
        }
        
        $color: salmon, darkgreen;
        @each $c in $color {
          .text-#{$c} {
            color: $c;
          }
        }
        ```
        
    - **Less**
        - **扩展名**：`.less`
        - **变量**：`@color: red;`
        - **特点**：和 CSS 语法最接近，**上手快**，常用于前端项目（如 Ant Design）
    - **Stylus**
        - **扩展名**：`.styl`
        - **变量**：`color = red` 或 `$color = red`（写法灵活）
        - **特点**：语法**最简洁**，可以省略大括号、冒号、分号，自由度最高
3. **变量定义对比**
    - **Sass**: `$main-color: #333;`
    - **Less**: `@main-color: #333;`
    - **Stylus**: `mainColor = #333` 或 `$mainColor = #333`

4. CSS 预处理器编译器的缺点
	1. **需要额外编译**：不是原生 CSS，必须先编译才能运行，增加了构建成本。
	2. **调试不直观**：浏览器里看到的是编译后的 CSS，和源码有差异。
	3. **学习成本**：多了预处理语法（变量、mixin、循环），新人需要额外学习。
	4. **依赖特定编译器或工具链**：可能带来兼容性和升级问题（如 node-sass、less-loader）