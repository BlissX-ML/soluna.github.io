---
titleEn: "D3.js Fundamentals: SVG Creation and Data-Driven Models"
titleCh: "D3.js 基础：SVG 创建与数据驱动模型"
tags: ["d3.js", "svg"]
---

1. **如何导入 D3 第三方库**
    1. **ESM 导入**：`import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";`
    2. **理解 D3**：D3 是多个模块的集合（不是单一库）
2. **D3.js 操作 SVG 的常用方式**
    1. **创建元素 →** `d3.select(svg).append("circle")`
    2. **设置属性 →** `.attr(name, value)`，如 `cx`、`cy`、`r`、`fill`、`d` 等
    3. **链式写法 →** `.append(...).attr(...).attr(...)` 可以连续叠加
    4. **数据驱动（常见链路）**
        - `.selectAll(...)  **→**  .data(...)  **→**  .join(...)  **→**  .attr(...)`
        - ⭕ 使用 `selectAll` + `join` 时必须进行数据绑定；若没有实际数据，可使用 `[null]` 作为占位数据完成绑定。
3. **`d3.each`**
    1. 对每个选定元素调用**指定函数**
        - `d`：当前绑定的数据
        - `i`：当前索引
        - `nodes`：当前 selection 中的节点数组
    2. 用于**无法用 `attr / style` 链式表达的逻辑**或需要**基于当前 DOM 状态进行条件判断**的情况
    
    ```jsx
    .each(function (d) {
      if (!d3.select(this).select("title").node()) {
        d3.select(this)
          .append("title")
          .text(`Petal: ${d.petal_length}, Sepal: ${d.sepal_width}`);
      }
    })
    ```
    
    ---
    
4. **d3-shape 的 symbol 生成器**
    1. **用途**：生成各种形状的 `path` 路径（给 `path` 的 `d` 属性用）
    2. **核心语法**
        - `d3.symbol(type, size)()`
        - `type`：形状类型
        - `size`：面积大小（不是半径）
        - 最后的 `()`：执行生成器，返回 `d` 字符串
    3. **`symbolsFill` vs `symbolsStroke`**
        - `d3.symbolsFill`：实心形状集合，适合 `mask`
        - `d3.symbolsStroke`：描边形状集合，均为线段，**没填充面积**，在 `mask` 里看起来不生效
    4. **位置控制**
        - `symbol` 只生成形状与大小，不负责位置
        - 位置要靠 `transform="translate(x, y)"`
5. **用函数批量生成图案（复用绘制逻辑）**
    1. **封装形式**：`fn(container, p1, p2)`：把一段绘制逻辑封装成函数
    2. **调用方式**
        - 直接调用：`fn(container, p1, p2)`
        - D3 风格：`container.call(fn, p1, p2)`（更适配链式与组合）
    3. **收益**：复用、可组合、结构更清晰
6. **`.join()` 的用法**
    1. 数据绑定到元素时，D3会比较有**多少个数据点**以及存在**多少个DOM元素**
    2. 然后将元素分为三类：
        - `enter` → 新数据且无匹配元素（需要创建元素）
        - `update` → 已有匹配元素的数据（需要更新元素）
        - `exit` → 无匹配数据的元素（需要移除元素）
    
    ```jsx
    selection
        .data(newData)
        .join(
            enter => enter.append("circle").attr("r", 5),     // CREATE new
            update => update.attr("fill", "blue"),            // UPDATE existing
            exit => exit.remove()                             // REMOVE old
        );
    ```
    
7. **使用 D3 时的关键注意事项**
    1. **`.enter()`**：只在数据存在但对应 DOM 元素不存在时才会生效（创建新元素）
    2. **`.selectAll() + .data()`**
        - `.selectAll()` 本身不会创建元素
        - **必须和 `.data()` 搭配**，才能触发 enter / update / exit 流程
    3. **`.exit().remove()`**
        - 用来删除**数据已经没有，但 DOM 仍然存在的旧元素**
        - 负责清理多余节点，保持 DOM 与数据一致

<details>
  <summary>
	<b>调用 `d3.symbol` 与 `.join()` 内部创建元素的示例</b>
  </summary>

````jsx
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const initPos = { x1: 100, y1: 100, x2: 300, y2: 100, x3: 200, y3: 350, diff1: 200, };
const times = 10;
const colors = ["#AA4C8F", "#D3CBC6", "#89C3EB", "#D9A62E", "#99AB4E"];

/**  1. 通过 for 循环的方式得到需要的数据汇总
* const pos = [];
* 
* for (let i = 0; i < times; i++) {
*     pos.push({
*         x1: initPos.x1 + initPos.x1 * i,
*         y1: initPos.y1,
*         x2: initPos.x2 + initPos.x1 * i,
*         y2: initPos.y2,
*         x3: initPos.x3 + initPos.x1 * i,
*         y3: initPos.y3,
*         color: colors[i % colors.length],
*     });
* }
* 
* d3.select("svg")
*     .selectAll("polygon")
*     .data(pos)
*     .join("polygon")
*     .attr("points", (data) => {
*         const { x1, y1, x2, y2, x3, y3 } = data;
*         return `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
*     })
*     .attr("fill", (data) => data.color);
**************  **/

/**  2. 直接集合到 d3 内，而不单独使用 for 循环来获取数据（d3.range 方法）
* d3.select("svg")
*      .selectAll("polygon")
*      .data(d3.range(times))
*      .join("polygon")
*      .attr("points", (data) => {
*          const diff = initPos.x1 * data;
*          const { x1, y1, x2, y2, x3, y3 } = initPos;
*          return `${x1 + diff},${y1} ${x2 + diff},${y2} ${x3 + diff},${y3}`;
*      })
*      .attr("fill", (data) => colors[data % colors.length])
*      .attr("mask", "url(#circle-mask)");
**************  **/

/** 3. 集合的同时，将元素的创建放入到 .join 内 (通过 enter 作为 parameter 统一处理) */
d3.select("svg")
    .selectAll("polygon")
    .data(d3.range(times))
    .join((enter) =>
        enter
            .append("polygon")
            .attr("points", (data) => {
                const diff = initPos.x1 * data;
                const { x1, y1, x2, y2, x3, y3 } = initPos;
                return `${x1 + diff},${y1} ${x2 + diff},${y2} ${x3 + diff},${y3}`;
            })
            .attr("fill", (data) => colors[data % colors.length])
            .attr("mask", "url(#circle-mask)"),
    );

// mask 遮罩层
const mask = d3.select("svg").append("mask").attr("id", "circle-mask");

mask.append("path")
    .attr("d", d3.symbol(d3.symbolsFill[5], 50000)())   // 通过 d3.symbol 与 d3.symbolsFill 去创建固定的形状
    .attr("transform", "translate(500, 200)")           // 通过 transform 去移动图形
    .attr("fill", "white");
````

</details>

    



