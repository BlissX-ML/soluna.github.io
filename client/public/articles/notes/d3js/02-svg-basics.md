---
titleEn: "SVG Basics"
titleCh: "SVG 基础"
tags: ["d3.js", "svg"]
---

1. **SVG 介绍**
    1. `<svg></svg>`：SVG 画布容器（所有图形元素都画在里面）
    2. `width / height`：定义画布尺寸；图形超出画布边界会被裁切
    3. 坐标系原点 `(0, 0)` 在左上角：`x` 向右增大，`y` 向下增大
    4. 元素会按书写顺序叠放：后写的会覆盖先写的（同一位置时更明显）
2. **圆形**：**`<circle></circle>`**
    1. 必填属性
        - `cx` → 圆心 x 坐标，如 `cx="50"`
        - `cy` → 圆心 y 坐标，如 `cy="50"`
        - `r` → 半径，如 `r="50"`
    2. **常用附加属性**
        - `fill` → 填充颜色，如 `fill="#F35336"`
        - `stroke` → 描边颜色（边框颜色）
        - `stroke-width` → 描边宽度
3. **矩形**：**`<rect></rect>`**
    1. **必填属性**
        - `x` → 矩形左上角 x 坐标
        - `y` → 矩形左上角 y 坐标
        - `width / height` → 矩形宽度与高度
    2. **常用附加属性**
        - `fill` → 填充颜色，`fill="none"` 表示不填充（透明）
        - `stroke` → 描边颜色（边框颜色）
        - `stroke-width` → 描边宽度
4. **线段**：**`<line></line>`**
    1. **必填属性**
        - `x1 / y1` → 起点坐标
        - `x2 / y2` → 终点坐标
        - `stroke` → 线条颜色（线段必须有 stroke 才能看见）
    2. **常用附加属性**
        - `stroke-width` → 线条粗细
5. **多边形**：**<polygon></polygon>**
    1. **必填属性**
        - `points`：有几个点组成就写几个点，如 `points="10,10 20,20 15,35"`
6. **路径：`<path></path>`**
    1. **用途**：用一条路径描述直线、折线、曲线、弧线等复杂形状
    2. **核心属性**：`d`（路径命令串）
        - `M x y` → 移动到起点，如 `M 400 400` 使用绝对坐标
        - `L x y` → 画直线到指定点， 使用绝对坐标
        - `H x / V y` → 水平线 / 垂直线（简写）
        - `Z` → 闭合路径（把末点连回起点）
        - 大写命令 `M/L/H/V` 表示绝对坐标；小写 `m/l/h/v` 表示相对坐标
        - 相对命令里的 `dx/dy` 是相对**前一个点**，不是相对 `M` 的起点
    3. **常用附加属性**
        - `fill` → 封闭区域的填充颜色，不想填充可用 `fill="none"`
        - `stroke` → 外轮廓颜色
7. **设置旋转的中心点**：`transform-box` 与 `transform-origin` 共同定义
8. **线性渐变（Linear Gradient）**
    1. `<defs></defs>` → 存放**可复用定义**（不会直接渲染到画布上）
    2. `<linearGradient></linearGradient>` → 定义线性渐变模板
        - `id="gra1"` → 唯一标识，通过 `fill / stroke = "url(#gra1)"` 引用
        - `x1 / y1 / x2 / y2`：定义渐变方向（从起点到终点的向量）
            - 例：`x1="0%" y1="0%" x2="100%" y2="0%"` 表示从左到右渐变
            - 例：`x1="0%" y1="0%" x2="0%" y2="100%"` 表示从上到下渐变
    3. 用 `<stop />` 定义渐变的**颜色节点**
        - `offset = "0%" / "50%" / "100%"`：当前颜色节点在渐变线上的位置
        - `stop-color = "salmon"`：该位置的颜色值
        - `stop-opacity = "0.8"`：该位置的透明度（0~1）
9. **SVG分组**：**`<g>`**
    1. SVG 的 **group（分组）** 标签，把多个图形当成一个整体来管理
10. **SVG 遮罩**：**`<mask>`**
    1. 定义一个 SVG 遮罩，其自身不参与渲染，只用于控制目标元素的可见程度
    2. **工作机制**
        - 用遮罩里的明暗/透明度，来决定被遮罩图形**每一部分能显示多少**
        - 完全可见 → 白色 / 不透明区域
        - 完全不可见 → 黑色 / 透明区域
    3. **核心属性**
        - `mask-type`：定义遮罩的计算方式，可选 `alpha` 或 `luminance`，支持动画
        - `x / y` → 定义遮罩区域**左上角**位置
        - `width / height` → 定义遮罩区域尺寸
        - `maskUnits` → 定义遮罩区域的坐标系统，可选 `objectBoundingBox` 或 `userSpaceOnUse`
        - `maskContentUnits` → 内部子元素坐标系统，可选 `objectBoundingBox` 或 `userSpaceOnUse`
            - `objectBoundingBox` → 相对于目标元素包围盒（0–1）
            - `userSpaceOnUse` → 使用 SVG 用户坐标系
    4. **使用方式**
        - `<mask>` 通常定义在 `<defs>` 内
        - 通过 `mask="url(#maskId)"` 应用到目标 SVG 元素


<details>
  <summary>
	<b>简单 SVG 图形示例</b>
  </summary>

````html
<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SVG Fundamental</title>
    <style>
        svg {
        display: flex;
        flex-direction: row;
        gap: 15px;
        }
        
        path {
        transform-box: stroke-box;
        transform-origin: center;
        }

        path:hover {
        animation: rotate 2s infinite;
        }

        @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
        }
    </style>
    </head>

    <body>
    <svg width="500" height="500">
        <!-- 双层圆形 -->
        <g>
        <circle cx="50" cy="50" r="50" fill="#F35336"></circle>
        <circle cx="50" cy="50" r="20" fill="#F09199"></circle>        
        </g>
        
        <!-- 矩形 -->
        <g>
        <rect
            x="150"
            y="10"
            width="150"
            height="75"
            fill="#A69ABD"
            stroke="#9790A4"
            stroke-width="2"
        ></rect>
        </g>
        
        <!-- 线段 -->
        <g>
        <line
            x1="350"
            y1="10"
            x2="350"
            y2="100"
            stroke="#82AE46"
            stroke-width="20"
        ></line>        
        </g>
        
        <!-- 路径 -->
        <g>
        <path
            d="M 400 50 l 20 10 l -20 10 l 10 -10 Z"
            stroke="#EB6101"
            fill="#C97586"
        ></path>
        </g>
        
        <!-- 五角星 -->
        <g>
        <circle
            cx="165"
            cy="165"
            r="60"
            fill="transparent"
            stroke="#9079AD"
            stroke-width="1"
        ></circle>
        <path
            d="M 110.8 143 L 218.7 143 L 132 213.6 L 165.8 105.8 L 198.3 213.6 Z"
            stroke="#9079AD"
            fill="none"
        ></path>
        </g>
    </svg>
    </body>
</html>
````

</details>

<details>
  <summary>
	<b>颜色渐变的示例</b>
  </summary>

````html
<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    </head>
    <body>
    <svg>
        <defs>
        <linearGradient id="gra1" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#BBC8E6"></stop>
            <stop offset="25%" stop-color="#4D5AAF"></stop>
            <stop offset="50%" stop-color="#5A79BA"></stop>
            <stop offset="75%" stop-color="#89C3EB"></stop>
            <stop offset="100%" stop-color="#BACAC6"></stop>
        </linearGradient>
        </defs>

        <rect
        x="10"
        y="10"
        width="150"
        height="100"
        fill="url(#gra1)"
        stroke="#7058A3"
        stroke-width="2"
        ></rect>
    </svg>
    </body>
</html>
````

</details> 


<details>
    <summary>
    <b>六芒星旋转示例（存在透明感应区）</b>
    </summary>

````html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            body {
                margin: 0;
                padding: 0;
            }

            .star {
                pointer-events: none;      /* 元素不再接收鼠标事件 */
                transform-box: fill-box;   /* 定义坐标参照系, 以元素自己的边界框为基准 */
                transform-origin: center;  /* 设置圆心/轴心 */
            }

            .starContainer:hover .star {
                animation: rotate 2s linear infinite;
            }

            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        </style>
    </head>
    <body>
        <!-- 六芒星 -->
        <svg
            width="960"
            height="500"
            viewBox="0 0 960 500"
            fill="none"
        >
            <circle
                cx="322"
                cy="252"
                r="104"
                stroke="#E7C5FF"
                stroke-width="2"
            />
            
            <!-- 六芒星主体区 -->
            <g class="starContainer">
                
                <!-- hover 感应区, 透明感应区 -->
                <rect
                    class="hit"
                    x="235"
                    y="150"
                    width="174"
                    height="205"
                    fill="rgba(0, 0, 0, 0.001)"
                ></rect>

                <!-- 实际旋转的六芒星 -->
                <g class="star">
                    <path
                        d="M406.757 302H235.243L321 152.035L406.757 302Z"
                        stroke="#DA9AFF"
                        stroke-width="5"
                        fill="none"
                    />
                    <path
                        d="M235.243 202H406.757L321 351.965L235.243 202Z"
                        stroke="#DA9AFF"
                        stroke-width="5"
                        fill="none"
                    />
                </g>
            </g>
        </svg>
    </body>
</html>
````

</details>


<details>
  <summary>
	<b>遮罩层使用示例</b>
  </summary>

````html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <svg width="1000" height="1000">
            <defs>
                <!-- mask1 遮罩层 -->
                <mask id="mask1">
                    <circle cx="500" cy="500" r="200" fill="white"></circle>
                </mask>
                
                <!-- mask2 遮罩层 -->
                <mask id="mask2">
                    <!-- ⭕整个区域先设为可见 -->
                    <rect x="0" y="0" width="1000" height="1000" fill="white" />

                    <!-- 中间画一个黑色圆 = 掏空 -->
                    <circle cx="500" cy="500" r="200" fill="black" />
                </mask>
            </defs>
            
            <!-- 画布上画竖线,并绑定 mask1 遮罩层(mask1 的 fill 是 white 表示可见) -->
            <g mask="url(#mask1)">
                <line
                    x1="160"
                    y1="0"
                    x2="160"
                    y2="800"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
                <line
                    x1="310"
                    y1="0"
                    x2="310"
                    y2="800"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
                <line
                    x1="460"
                    y1="0"
                    x2="460"
                    y2="800"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
                <line
                    x1="610"
                    y1="0"
                    x2="610"
                    y2="800"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
                <line
                    x1="760"
                    y1="0"
                    x2="760"
                    y2="800"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
                <line
                    x1="910"
                    y1="0"
                    x2="910"
                    y2="800"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
            </g>
            
                <!-- 画布上画横线,并绑定 mask2 遮罩层 -->
            <g mask="url(#mask2)">
                <line
                    x1="0"
                    y1="100"
                    x2="1000"
                    y2="100"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
                <line
                    x1="0"
                    y1="250"
                    x2="1000"
                    y2="250"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
                <line
                    x1="0"
                    y1="400"
                    x2="1000"
                    y2="400"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
                <line
                    x1="0"
                    y1="550"
                    x2="1000"
                    y2="550"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
                <line
                    x1="0"
                    y1="700"
                    x2="1000"
                    y2="700"
                    stroke="#E4D2D8"
                    stroke-width="100"
                ></line>
            </g>
        </svg>
    </body>
</html>
````

</details>