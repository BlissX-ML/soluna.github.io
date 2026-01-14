---
titleEn: "What's the difference between float and flexbox?"
titleCh: "float浮动与flex布局的区别？"
tags: ["CSS"]
---

1. **float 的作用（历史背景）**
    - 最早使用浮动实现文字环绕效果，后续使用浮动实现多列布局。
    - 但是 float 会让元素**脱离普通文档流**，需要 **BFC 来修复**。
2. **flex 的作用（现代布局）**
    - flex 是专门为**布局**设计的，可以很轻松地实现水平、垂直居中，多列自适应等效果。
    - flex不会像 float 那样导致父元素塌陷，所以现代开发中，flex 已经取代了大部分 float 的用途。
3. **BFC 和 float 的关系**
    - float 的副作用：子元素浮动后，父元素的高度可能变成 0。
    - 解决方案：父元素触发 BFC，比如 `overflow: hidden`，这样浮动的子元素会参与高度计算。
    - **典型写法**：
        
        ```html
        <style>
        	/* BFC: 清除浮动（overflow: hidden） */
          .container { overflow: hidden; border: 2px solid blue; }
          .box { float: left; width: 100px; height: 100px; background: orange; }
        </style>
        
        <div class="container">
          <div class="box"></div>
          <div class="box"></div>
        </div>
        ```
