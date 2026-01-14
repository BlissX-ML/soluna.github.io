---
titleEn: "Element horizontally and vertically centered"
titleCh: "元素水平垂直居中"
tags: ["CSS"]
---

1. **absolute 居中（元素宽高固定）**
    - **使用负 margin（传统写法）**
        
        ```css
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -50px;   /* -width/2 */
        margin-top: -50px;    /* -height/2 */
        ```
        
    - **使用 margin: auto（必须同时设置 left/right 或 top/bottom）**
        
        ```css
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;    /* 必须配合上下左右设为0 才能居中 */
        width: 100px;
        height: 100px;
        ```
        
    - **使用 calc（最推荐）**
        
        ```css
        position: absolute;
        left: calc(50% - 50px);    /* width = 100px */
        top: calc(50% - 50px);     /* height = 100px */
        ```
        
2. **居中元素（宽高不固定）的方法：**
    - **absolute + transform**
        
        ```css
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ```
        
    - **line-height（仅单行文本）**
        
        ```css
        line-height: 100px;   /* 必须与元素高度一致 */
        ```
        
    - **writing-mode（垂直文字排布）**
        
        ```css
        writing-mode: vertical-lr;   /* 垂直从上到下、文字从左到右 */
        ```
        
    - **table**
        
        ```css
        .parent {
          display: table-cell;
          text-align: center;
          vertical-align: middle;
        }
        
        /* table-cell：让元素像表格单元格 <td> 一样，支持 vertical-align  */
        ```
        
    - **flex**
        
        ```css
        .parent {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ```
        
    - **grid**
        
        ```css
        .parent {
          display: grid;
          place-items: center;
        }
        ```
        
3. **推荐方案**
    - PC + 固定宽高（有兼容性要求）：absolute + 负 margin
    - PC + 不定宽高（有兼容性要求）：css-table
    - PC + 无兼容性要求：flex
    - 移动端：flex