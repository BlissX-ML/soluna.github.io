---
titleEn: "Echarts Basic Configuration Explained"
titleCh: "Echarts 基础配置解析"
tags: ["Echart", "visualization"]
---

> 基于 [Examples - Apache ECharts](https://echarts.apache.org/examples/zh/editor.html?c=line-stack) 进行展示
> 
1. 关于 `tooltip: formatter` 的定义
    1. **提示框**浮层内容格式器，支持字符串模板和回调函数两种形式。
    2. **字符串模板**
        - 模板变量有 `{a}`, `{b}`，`{c}`，`{d}`，`{e}`，分别表示系列名，数据名，数据值等。
        - `trigger: 'axis'` 时会有多个系列的数据，可以通过 `{a0}`, `{a1}`表示系列的索引。
        - 变量`{a}`, `{b}`, `{c}`, `{d}`在不同图表类型下代表数据含义为：
            
            
            |  | `{a}` | `{b}` | `{**c**}` | `{**d**}` |
            | --- | --- | --- | --- | --- |
            | 折线图, 柱状图, K线图 | 系列名称 | 类目值 | 数值 | — |
            | 散点图 | 系列名称 | 数据名称 | 数值数组 | — |
            | 地图  | 系列名称 | 区域名称 | 合并数值 | — |
            | 饼图, 仪表盘, 漏斗图 | 系列名称 | 数据项名称 | 数值 | 百分比 |

```jsx
option = {
  // 设置图表的标题
  title: { text: 'Stacked Line' },
  
  // 定义图片颜色的配置
  color: ['salmon', 'darkgreen', 'skyblue', 'MediumPurple', '	Olive'],
  
  // 设置图表内的提示信息模块
  tooltip: {
    trigger: 'axis',   // 提示信息的触发方式，可以填写 'item', 'axis', 'none'
     
    // 坐标轴指示器（axisPointer）的全局公用设置
    axisPointer: {
        type: 'shadow',  // 可选择 'line'(直线指示器) / 'shadow' / 'none'，默认为 'line'
    }
  },
  
  // 设置图表的图例部分，也就是每种数据使用什么颜色等进行显示
  // series 内有 name 值，则 legend 内的 data 数据可以删掉
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },

  // 设置工具箱，可以将图表另存为图片
  toolbox: {
    feature: { saveAsImage: {} }
  },
  
  // 设置网格，定义图表的大小
  grid: {
    left: '3%',           // 控制图表相对于容器左侧的大小
    right: '4%',
    bottom: '12%',
    containLabel: true,   // 为 true 表示包含坐标轴标签在内的所有内容所形成的矩形
  },
  
  // 设置 x 轴的相关配置
  xAxis: {
    type: 'category',     // 确定 x 轴显示的类目，'category'基于类目; 'value'基于数值; 'time'基于时间; 'log'为对数轴
    boundaryGap: false,   // 设置边缘的数据是否要贴近坐标轴
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],   // X 轴显示的相关信息
    
    // 坐标轴轴线样式修改
    axisLine: {
        show: true,  // 是否显示坐标轴轴线。从 v5.0.0 开始，数值轴 (type: 'value') 默认不显示轴线，需要显式配置。

        // 定义线条的样式
        lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
            width: 1,  // 默认
        }
    },
    
    // 修改刻度标签
    axisLabel: {
        color: 'rgba(255,255,255,.6)',  // 字符串或回调函数
        fontSize: 12,  // 数字
    },
  },
  
  // 设置 y 轴的相关配置
  yAxis: {
    type: 'value',
    
    // 坐标轴刻度相关设置
    axisTick: {
	    show: false,
    }
    
    // y轴分割线的样式
    splitLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
            width: 1,  // 默认
        }
    }
  },
  
  // 设置系列图标配置，也就是决定展示那种类型的图表，数组内包含若干对象
  series: [
	  {
		  // 这里是柱状图示例中的代码，挪到这里，方便理解 ⭕
      name: 'Direct',
      type: 'bar',
      barWidth: '35%',
	    itemStyle: {
	        borderRadius: [5, 5, 0, 0],  // 数组为顺时针左上，右上，右下，左下。若数值一致，则可以写单个数值
	    },
	  },
    {
      name: 'Email',
      type: 'line',
      
      // stack 数据堆叠，目前只支持堆叠于 'value' 和 'log'。会将数据累加，从而避开交叉的地方
      // stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
```

```jsx
// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比。
// 如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
{
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
      offset: 0, color: 'red' // 0% 处的颜色
  }, {
      offset: 1, color: 'blue' // 100% 处的颜色
  }],
  global: false // 缺省为 false
}

// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
{
  type: 'radial',
  x: 0.5,
  y: 0.5,
  r: 0.5,
  colorStops: [{
      offset: 0, color: 'red' // 0% 处的颜色
  }, {
      offset: 1, color: 'blue' // 100% 处的颜色
  }],
  global: false // 缺省为 false
}

// 纹理填充
{
  image: imageDom,   // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
  repeat: 'repeat'   // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
}
```
