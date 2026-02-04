---
titleEn: "D3.js Sample Code Collection"
titleCh: "D3.js 示例代码合集"
tags: ["d3.js", "examples"]
---

<details>
  <summary>
	<b>D3.js 基于 CSV 文件创建图表示例</b>
  </summary>

````jsx
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// 确定 svg 画布大小（使用视口尺寸）与 margin 外边距
const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 20, bottom: 50, left: 50, right: 20 };

// csv 数据文件路径（相对路径）
const csv_url = "./iris.csv";

// 定义字段访问器（accessor），用于从每条数据中取出 x/y/species
const xData = (d) => d.petal_length;
const yData = (d) => d.sepal_length;
const speciesValue = (d) => d.species;

// 添加 svg 标签并定义大小
const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// 定义函数,转换数据库内的数据类型,从 string 转换为 number
const dealData = (data) => {
    data.sepal_length = +data.sepal_length;
    data.sepal_width = +data.sepal_width;
    data.petal_length = +data.petal_length;
    data.petal_width = +data.petal_width;
    return data;
};

// 颜色映射：根据 species 返回对应颜色
const diffColor = (d) => {
    if (d === "Iris-versicolor") return "#D8BFD8";
    if (d === "Iris-setosa") return "#FF7F50";
    if (d === "Iris-virginica") return "#7BCFA6";
};

// 定义函数,实现数据库的操作以及图像的绘制
const getData = async () => {
    const data = await d3.csv(csv_url, dealData);  // 读取 csv，返回行对象数组；dealData 对每行字段做数值类型转换

    const x = d3
        .scaleLinear()                             // 线性比例尺：把数据值映射到屏幕像素
        .domain(d3.extent(data, xData))            // 确定 X 轴数据的最大值与最小值,通过 xData 函数确定需要的数据
        .range([margin.left, width - margin.right]);   // 确定 X 轴实际展示下的最小值与最大值

    const y = d3
        .scaleLinear()
        .domain(d3.extent(data, yData))
        .range([height - margin.bottom, margin.top * 2]);

    const digitals = data.map((d) => ({      // ✨ 将数据值通过比例尺转换为像素坐标，生成绘制用点集合
        x: x(xData(d)),                      // 确定 x 轴数据
        y: y(yData(d)),                      // 确定 y 轴数据
        color: diffColor(speciesValue(d)),   // 确定 species 数据并提供对应的颜色
    }));

    svg.selectAll("circle")
        .data(digitals)
        .join("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", 5)
        .attr("fill", (d) => d.color)
        .append("title") // Simple browser tooltip
        .text(
            (d, i) =>
                `Petal: ${data[i].petal_length}, Sepal: ${data[i].sepal_width}`,
        );

    // *** ✨ 方法1: ( `.call(d3.axisBottom())` 的方式添加坐标轴)
    // svg.append("g")
    //     .attr("transform", `translate(0, ${height - margin.bottom})`)
    //     .call(d3.axisBottom(x));

    // *** ✨ 方法2 ( `d3.axisBottom()()` 的方式添加坐标轴)
    d3.axisBottom(x)(
        svg
            .append("g")
            .attr("transform", `translate(0, ${height - margin.bottom})`),
    );

    svg.append("g")
        .attr("transform", `translate(${margin.left}, 0 )`)
        .call(d3.axisRight(y));
};

getData();
````

</details>


<details>
  <summary>
	<b>D3.js 实现波浪动画效果示例</b>
  </summary>

````jsx
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const data = d3.range(15).map((d) => {
    return {
        x: d * 100 + 100,
        y: 300 + Math.cos(d * 0.45) * 220,
    };
});

/* ***************
*  1. 通过 function + transition 共同实现动画效果
*
*  svg.selectAll("path")
*      .data(data)
*      .enter()
*      .append("path")
*      .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
*      .attr("d", d3.symbol(d3.symbolsStroke[4], 5000)())
*      .attr("fill", "none")
*      .attr("stroke", "#5F9EA0")
*      .attr("stroke-width", 3);

*  function wave() {
*      svg.selectAll("path")
*          .transition()
*          .duration(2000)
*          .delay((_, i) => i * 100)
*          .ease(d3.easeSinInOut)
*          .attr("transform", (d) => `translate(${d.x}, ${d.y + 80})`)  // 移动位置 1
*          .transition()                                                // 操作的是过渡对象，可以添加过渡
*          .duration(2000)
*          .delay((_, i) => i * 100)
*          .ease(d3.easeSinInOut)
*          .attr("transform", (d) => `translate(${d.x}, ${d.y})`)       // 移动位置 2
*          .on("end", wave);                                            // 递归，形成无限波浪
*  }
*
*  wave();
*/

/* ***************
*  2. 通过 setInterval 实现动画效果
*
*  let times = 0;
*
*  setInterval(() => {
*      const data = d3.range(15).map((d) => {
*          return {
*              x: d * 100 + 100,
*              y: 300 + Math.cos(d * 0.45 + times) * 220,
*          };
*      });
*
*      // 2-1. Method1：`.enter` + `.append` 实现元素添加，`.merge` 实现元素合并
*      const style = svg.selectAll("path").data(data);
*      const styleInit = style
*          .enter()                           // 只在需要创建新元素时才执行
*          .append("path")
*          .attr("d", d3.symbol(d3.symbolsStroke[4], 5000)())
*          .attr("fill", "none")
*          .attr("stroke", "#000000ff")
*          .attr("stroke-width", 3);
*      style
*          .merge(styleInit)                  // 把 enter 生成的新元素和原来已有的元素合在一起，后面的 .attr() 同时作用到两者。
*          .attr("transform", (d) => `translate(${d.x}, ${d.y})`);
*      
*			 // 2-2. Method2：`.join` 实现元素添加
*      const style = svg
*          .selectAll("path")
*          .data(data)
*          .join("path")
*          .attr("d", d3.symbol(d3.symbolsStroke[4], 5000)())
*          .attr("fill", "none")
*          .attr("stroke", "#000000ff")
*          .attr("stroke-width", 3);
*      style.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
*
*      times += 0.8;
*  }, 200);
*/

/* ***************
*  3. 通过 D3.timer 实现动画效果
*/
svg.selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("d", d3.symbol(d3.symbolsStroke[4], 5000)())
    .attr("fill", "none")
    .attr("stroke", "#5F9EA0")
    .attr("stroke-width", 3);

d3.timer((elapsed) => {
    svg.selectAll("path").attr("transform", (d, i) => {
        const offset = Math.cos(elapsed * 0.005 + i * 0.6) * 40;
        return `translate(${d.x}, ${d.y + offset})`;
    });
});
````

</details>


<details>
  <summary>
	<b>D3.js 图表复用与定时自动更新示例</b>
  </summary>

````jsx
/* ***********
* 🧩 scatterPlot.js (复用图表函数)
*/ 
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export default function scatterPlot() {
    let width, height, data, xData, yData, speciesValue, margin;

    const myChart = (svg) => {
        const diffColor = (d) => {
            if (d === "Iris-versicolor") return "#D8BFD8";
            if (d === "Iris-setosa") return "#FF7F50";
            if (d === "Iris-virginica") return "#7BCFA6";
        };

        // 将 species 映射为 d3.symbols 的下标（决定每类点的形状）
        const getSymbol = (d) => {
            if (d === "Iris-versicolor") return 3;
            if (d === "Iris-setosa") return 4;
            if (d === "Iris-virginica") return 0;
        };

        const x = d3
            .scaleLinear()
            .domain(d3.extent(data, xData))
            .range([margin.left, width - margin.right]);

        const y = d3
            .scaleLinear()
            .domain(d3.extent(data, yData))
            .range([height - margin.bottom, margin.top * 2]);

        const digitals = data.map((d) => ({
            x: x(xData(d)),
            y: y(yData(d)),
            ind: getSymbol(speciesValue(d)),    // 每个点选择一种 symbol 类型（d3.symbols 的下标）
            color: diffColor(speciesValue(d)),
        }));

        // 使用 symbol 生成器去生成图形,而非圆形
        svg.selectAll("path")
            .data(digitals)
            .join("path")
            .attr("d", (d) => d3.symbol(d3.symbols[d.ind], 100)())  // 用 d3.symbol() 生成 path 的 "d" 字符串，从而绘制不同形状的散点（size 控制符号面积）
            .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
            .attr("fill", (d) => d.color)
            .append("title")
            .text(
                (d, i) =>
                    `Petal: ${data[i].petal_length}, Sepal: ${data[i].sepal_width}`,
            );

        svg.selectAll(".xAxis")    // ✨ 选择包含 `xAxis` 的元素（避免元素之间重复重叠）
            .data([null])          // ✨ 提供一个数组，但是并不会实际调用
            .join("g")
            .attr("class", "xAxis")
            .attr("transform", `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x));

        svg.selectAll(".yAxis")
            .data([null])
            .join("g")
            .attr("class", "yAxis")
            .attr("transform", `translate(${margin.left}, 0 )`)
            .call(d3.axisRight(y));
    };

    // ✨ getter/setter：传参=设置并返回 myChart（支持链式调用）；不传参=返回当前值
    myChart.width = function (_) { 
            return arguments.length ? ((width = +_), myChart) : width; 
    };
    
    myChart.height = function (_) { 
            return arguments.length ? ((height = +_), myChart) : height; 
    };
    
    myChart.data = function (_) { 
            return arguments.length ? ((data = _), myChart) : data; 
    };
    
    myChart.xData = function (_) { 
            return arguments.length ? ((xData = _), myChart) : xData; 
    };
    
    myChart.yData = function (_) { 
                return arguments.length ? ((yData = _), myChart) : yData; 
        };
        
    myChart.speciesValue = function (_) { 
            return arguments.length ? ((speciesValue = _), myChart) : speciesValue; 
    };
    
    myChart.margin = function (_) { 
            return arguments.length ? ((margin = _), myChart) : margin; 
    };

    return myChart;
}

/* ***********
* 🧩 script.js(调用)
*/ 
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import scatterPlot from "./scatterPlot.js";   // 引入可复用图表函数

const width = window.innerWidth;
const height = window.innerHeight;
const csv_url = "./iris.csv";

const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const dealData = (data) => {
    data.sepal_length = +data.sepal_length;
    data.sepal_width = +data.sepal_width;
    data.petal_length = +data.petal_length;
    data.petal_width = +data.petal_width;
    return data;
};

// 定义函数，实现数据库的操作以及图像的绘制
const getData = async () => {
    const data = await d3.csv(csv_url, dealData); 

    // ✨ 在 svg 画布调用 scatterPlot 函数并提供需要的参数
    const spot = scatterPlot()
        .width(width)
        .height(height)
        .data(data)
        .xData((d) => d.petal_length)   // 表示选中 petal_length 属性的数据
        .yData((d) => d.sepal_length)   // 表示选中 sepal_length 属性的数据
        .speciesValue((d) => d.species)
        .margin({ top: 20, bottom: 50, left: 50, right: 20 });

    svg.call(spot);  // ✨ 初始化调用

    const columns = ["petal_length", "sepal_length", "petal_width", "sepal_width",];
    let i = 0;

    setInterval(() => {                   // ✨ 实现间隔更新
        i = (i + 1) % columns.length;     // 更新索引

        spot.data(data)                   // ✨ 重新定义并导入数据，手动更新
            .xData((d) => d[columns[i]])
            .yData((d) => d.sepal_length);

        svg.call(spot);
    }, 1000);
};

getData();
````

</details>


<details>
  <summary>
	<b>D3.js `.join`：enter / update / exit 的复用示例</b>
  </summary>

````jsx
/* ***********
* 🧩 scatterPlot.js (复用图表函数)
*/ 
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export default function scatterPlot() {
    let width, height, data, xData, yData, speciesValue, margin;

    const myChart = (svg) => {
        const diffColor = (d) => {
            if (d === "Iris-versicolor") return "#D8BFD8";
            if (d === "Iris-setosa") return "#FF7F50";
            if (d === "Iris-virginica") return "#7BCFA6";
        };

        // 将 species 映射为 d3.symbols 的下标（决定每类点的形状）
        const getSymbol = (d) => {
            if (d === "Iris-versicolor") return 3;
            if (d === "Iris-setosa") return 4;
            if (d === "Iris-virginica") return 0;
        };

        const x = d3
            .scaleLinear()
            .domain(d3.extent(data, xData))
            .range([margin.left, width - margin.right]);

        const y = d3
            .scaleLinear()
            .domain(d3.extent(data, yData))
            .range([height - margin.bottom, margin.top * 2]);

        const digitals = data.map((d) => ({
            x: x(xData(d)),
            y: y(yData(d)),
            ind: getSymbol(speciesValue(d)), // 每个点选择一种 symbol 类型（d3.symbols 的下标）
            color: diffColor(speciesValue(d)),
        }));

        const t = d3
            .transition()
            .duration(2000)
            .delay((_, i) => i * 100);
                
                // ✨ 使用 `.join` 的 `enter`, `update`, `exit` 去实现添加 / 更新 / 删除操作
        svg.selectAll("path")
            .data(digitals)
            .join(
                (enter) =>
                    enter
                        .append("path")
                        .attr("fill", (d) => d.color)
                        .attr("d", (d) => d3.symbol(d3.symbols[d.ind], 100)())
                        .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
                        .attr("opacity", 0)       // ✨ 初始化看不到 spots
                        .each(function (d, i) {
                            d3.select(this)
                                .append("title")
                                .text(
                                    `Petal: ${data[i].petal_length}, Sepal: ${data[i].sepal_width}`,
                                );
                        })
                        .transition(t)            // ✨ 添加动画效果
                        .attr("opacity", 1),      // ✨ 渐变，使 spots 可见
                (update) =>
                    update
                        .attr("fill", (d) => d.color)
                        .transition(t)           // ✨ 更新动画效果（确保 spots 不会从左上角出现）
                        .attr("d", (d) => d3.symbol(d3.symbols[d.ind], 100)())
                        .attr("transform", (d) => `translate(${d.x}, ${d.y})`),
                (exit) => exit.remove(),
            );

        svg.selectAll(".xAxis")
            .data([null])
            .join("g")
            .attr("class", "xAxis")
            .attr("transform", `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x));

        svg.selectAll(".yAxis")
            .data([null])
            .join("g")
            .attr("class", "yAxis")
            .attr("transform", `translate(${margin.left}, 0 )`)
            .call(d3.axisRight(y));
    };

    // ✨ getter/setter：传参=设置并返回 myChart（支持链式调用）；不传参=返回当前值
    myChart.width = function (_) {
        return arguments.length ? ((width = +_), myChart) : width;
    };

    myChart.height = function (_) {
        return arguments.length ? ((height = +_), myChart) : height;
    };

    myChart.data = function (_) {
        return arguments.length ? ((data = _), myChart) : data;
    };

    myChart.xData = function (_) {
        return arguments.length ? ((xData = _), myChart) : xData;
    };

    myChart.yData = function (_) {
        return arguments.length ? ((yData = _), myChart) : yData;
    };
    myChart.speciesValue = function (_) {
        return arguments.length ? ((speciesValue = _), myChart) : speciesValue;
    };
    myChart.margin = function (_) {
        return arguments.length ? ((margin = _), myChart) : margin;
    };

    return myChart;
}
````

</details>

<details>
  <summary>
	<b>D3.js 创建可复用的对象事件</b>
  </summary>

````jsx
/* ***********
* 🧩 menu.js (复用对象事件函数)
*/ 
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export default function menu() {
    let id, labelContent, options;
    const listener = d3.dispatch("change");    // ✨ 创建 dispatcher 对象

    const myChart = (container) => {
        container
            .selectAll("label")
            .data([null])
            .join("label")
            .attr("for", id)
            .text(labelContent);

        container
            .selectAll("select")
            .data([null])
            .join("select")
            .attr("id", id)
            .attr("name", id)
            .on("change", (event) => {
                listener.call("change", this, event.target.value);  // ✨ 调用 "change" 事件，并提供 event.target.value 作为参数传入，使外部文件可以调用这个参数
            })
            .selectAll("option")
            .data(options)
            .join("option")
            .attr("value", (d) => d.value)
            .text((d) => d.text);
    };

    // ✨ 导出 `d3-dispatch` 定义的 event 事件
    myChart.on = function () {
        const val = listener.on.apply(listener, arguments);  // 1. 调用监听器的 .on() 方法并传入所有参数
        return val === listener ? myChart : val;             // 2. `.on()` 接收空参数/1个参数 = 获取器 → 返回 val（处理函数）；接收2个参数 = 设置器 → 返回 myChart（用于链式调用）
    };

    myChart.id = function (_) {
        return arguments.length ? ((id = _), myChart) : id;
    };

    myChart.labelContent = function (_) {
        return arguments.length ? ((labelContent = _), myChart) : labelContent;
    };

    myChart.options = function (_) {
        return arguments.length ? ((options = _), myChart) : options;
    };

    return myChart;
}

/* ***********
* 🧩 script.js
*/ 
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import scatterPlot from "./scatterPlot.js";
import menu from "./menu.js";

const width = window.innerWidth;
const height = window.innerHeight;
const csv_url = "./iris.csv";

const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// ✨ 放置可选项（ option ）的块级元素
const menuContainer = d3
    .select("body")
    .append("div")
    .attr("class", "menu-container");
const xMenu = menuContainer.append("div");
const yMenu = menuContainer.append("div");

const dealData = (data) => {
    data.sepal_length = +data.sepal_length;
    data.sepal_width = +data.sepal_width;
    data.petal_length = +data.petal_length;
    data.petal_width = +data.petal_width;
    return data;
};

const getData = async () => {
    const data = await d3.csv(csv_url, dealData);

    const spot = scatterPlot()
        .width(width)
        .height(height)
        .data(data)
        .xData((d) => d.petal_length)
        .yData((d) => d.petal_length)
        .speciesValue((d) => d.species)
        .margin({ top: 20, bottom: 50, left: 50, right: 20 });

    svg.call(spot);
        
        // ✨ 定义 menu 内传入的数据
    const options = [
        { value: "petal_length", text: "Petal Length" },
        { value: "sepal_length", text: "Sepal Length" },
        { value: "petal_width", text: "Petal Width" },
        { value: "sepal_width", text: "Sepal Width" },
    ];
        
        // ✨ 将 "change" 事件作用在 xMenu 对象上
    xMenu.call(
        menu()
            .id("x-menu")
            .labelContent("X:")
            .options(options)
            
            // ✨ "change" 事件的参数是上一文件的 `event.target.value`。通过回调函数调用所需参数。
            .on("change", (x) => {
                    // ✨ 通过 `svg.call(spot.xData())` 修改作图页面中的 x 轴的数据。`(d) => d[x]`需要通过 x 获取对应的数值
                svg.call(spot.xData((d) => d[x]));
            }),
    );

    yMenu.call(
        menu()
            .id("y-menu")
            .labelContent("Y:")
            .options(options)
            .on("change", (y) => {
                svg.call(spot.yData((d) => d[y]));
            }),
    );
};

getData();
````

</details>


<details>
  <summary>
	<b>D3.js：根据数据类型选择 `scaleLinear` 或 `scalePoint`</b>
  </summary>

````jsx
/* ***********
* 🧩 scatterPlot.js (复用函数)
*/ 
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export default function scatterPlot() {
    let width, height, data, xData, yData, speciesValue, margin, xType, yType;

    const myChart = (svg) => {
        const diffColor = (d) => {
            if (d === "Iris-versicolor") return "#D8BFD8";
            if (d === "Iris-setosa") return "#FF7F50";
            if (d === "Iris-virginica") return "#7BCFA6";
        };

        const getSymbol = (d) => {
            if (d === "Iris-versicolor") return 3;
            if (d === "Iris-setosa") return 4;
            if (d === "Iris-virginica") return 0;
        };

        // ✨ 根据选择的数据 type，决定使用 `scaleLinear` 还是 `scalePoint`
        const x = (
            xType === "quantitative"
                ? d3.scaleLinear().domain(d3.extent(data, xData))
                : d3.scalePoint().domain(data.map(xData)).padding(0.2)   // ✨`scalePoint` 可使用 `.paading` 增加间距
        ).range([margin.left, width - margin.right]);

        // ✨ 根据选择的数据 type，决定使用 `scaleLinear` 还是 `scalePoint`
        const y = (
            yType === "quantitative"
                ? d3.scaleLinear().domain(d3.extent(data, yData))
                : d3.scalePoint().domain(data.map(yData)).padding(1)
        ).range([height - margin.bottom, margin.top]);

        const digitals = data.map((d) => ({
            x: x(xData(d)),
            y: y(yData(d)),
            ind: getSymbol(speciesValue(d)),
            color: diffColor(speciesValue(d)),
        }));

        const t = d3
            .transition()
            .duration(2000)
            .delay((_, i) => i * 100);

        svg.selectAll("path")
            .data(digitals)
            .join(
                (enter) =>
                    enter
                        .append("path")
                        .attr("fill", (d) => d.color)
                        .attr("d", (d) => d3.symbol(d3.symbols[d.ind], 100)())
                        .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
                        .attr("opacity", 0)
                        .each(function (d, i) {
                            d3.select(this)
                                .append("title")
                                .text(
                                    `Petal: ${data[i].petal_length}, Sepal: ${data[i].sepal_width}`,
                                );
                        })
                        .transition(t)
                        .attr("opacity", 1),
                (update) =>
                    update
                        .attr("fill", (d) => d.color)
                        .transition(t)
                        .attr("d", (d) => d3.symbol(d3.symbols[d.ind], 100)())
                        .attr("transform", (d) => `translate(${d.x}, ${d.y})`),
                (exit) => exit.remove(),
            );

        svg.selectAll(".xAxis")
            .data([null])
            .join("g")
            .attr("class", "xAxis")
            .attr("transform", `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x));

        svg.selectAll(".yAxis")
            .data([null])
            .join("g")
            .attr("class", "yAxis")
            .attr("transform", `translate(${margin.left}, 0 )`)
            .call(d3.axisRight(y));
    };

    // getter/setter：传参=设置并返回 myChart（支持链式调用）；不传参=返回当前值
    myChart.width = function (_) {
        return arguments.length ? ((width = +_), myChart) : width;
    };

    myChart.height = function (_) {
        return arguments.length ? ((height = +_), myChart) : height;
    };

    myChart.data = function (_) {
        return arguments.length ? ((data = _), myChart) : data;
    };

    myChart.xData = function (_) {
        return arguments.length ? ((xData = _), myChart) : xData;
    };

    myChart.yData = function (_) {
        return arguments.length ? ((yData = _), myChart) : yData;
    };

    myChart.speciesValue = function (_) {
        return arguments.length ? ((speciesValue = _), myChart) : speciesValue;
    };

    myChart.margin = function (_) {
        return arguments.length ? ((margin = _), myChart) : margin;
    };

    myChart.xType = function (_) {
        return arguments.length ? ((xType = _), myChart) : xType;
    };

    myChart.yType = function (_) {
        return arguments.length ? ((yType = _), myChart) : yType;
    };

    return myChart;
}

/* ***********
* 🧩 script.js
*/ 

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import scatterPlot from "./scatterPlot.js";
import menu from "./menu.js";

const width = window.innerWidth;
const height = window.innerHeight;
const csv_url = "./iris.csv";

// ✨ 添加 type 属性
const options = [
    { value: "petal_length", text: "Petal Length", type: "quantitative" },
    { value: "sepal_length", text: "Sepal Length", type: "quantitative" },
    { value: "petal_width", text: "Petal Width", type: "quantitative" },
    { value: "sepal_width", text: "Sepal Width", type: "quantitative" },
    { value: "species", text: "species", type: "categorical" },
];

const dealData = (data) => {
    data.sepal_length = +data.sepal_length;
    data.sepal_width = +data.sepal_width;
    data.petal_length = +data.petal_length;
    data.petal_width = +data.petal_width;
    return data;
};

const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const menuContainer = d3
    .select("body")
    .append("div")
    .attr("class", "menu-container");
const xMenu = menuContainer.append("div");
const yMenu = menuContainer.append("div");

// ✨ 通过 "petal_width" 等 "value" 属性，获取其在 "options" 当中的 "type" 属性
const columnToType = new Map(options.map(({ value, type }) => [value, type]));
const getType = (column) => columnToType.get(column);

const getData = async () => {
    const data = await d3.csv(csv_url, dealData);

    const spot = scatterPlot()
        .width(width)
        .height(height)
        .data(data)
        .xData((d) => d.petal_length)
        .yData((d) => d.petal_length)
        .xType(getType("petal_length"))  // ✨ 添加 `xType` 初始化，否则会 x 轴与 y 轴的显示会极其混乱
        .yType(getType("petal_length"))  // ✨ 添加 `yType` 初始化
        .speciesValue((d) => d.species)
        .margin({ top: 20, bottom: 50, left: 50, right: 20 });

    svg.call(spot);

    xMenu.call(
        menu()
            .id("x-menu")
            .labelContent("X:")
            .options(options)
            .on("change", (x) => {
                svg.call(spot.xData((d) => d[x]).xType(getType(x))); // ✨ `xData` 和 `xType` 都是作用在 spot 上的，也就是 scatterPlot.js` 内定义的
            }),
    );

    yMenu.call(
        menu()
            .id("y-menu")
            .labelContent("Y:")
            .options(options)
            .on("change", (y) => {
                svg.call(spot.yData((d) => d[y]).yType(getType(y))); // ✨ `xData` 和 `xType` 都是作用在 spot 上的，也就是 scatterPlot.js` 内定义的
            }),
    );
};

getData();
````

</details>