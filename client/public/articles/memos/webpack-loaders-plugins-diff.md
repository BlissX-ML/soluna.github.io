---
titleEn: "The Difference Between Loaders and Plugins in Webpack"
titleCh: "webpack 中 loader 和 plugin 的区别"
tags: ["engineering"]
---

1. **`loader`**
    - **作用**：让 webpack 能够处理**各种类型的资源**（如 `css`、`img`、`ts`、`jsx` 等）
    - **调用时机**：加载某个模块时触发
    - **使用方式**：按**从右到左**链式执行
    - **特点**：一个 loader 接收前一个 loader 的输出作为输入
2. **`plugin`**
    - **作用**：扩展 webpack 功能，实现打包优化、文件生成、环境变量处理等功能
    - **调用时机**：基于 Tapable 的**事件机制**触发
    - **特点**：可以在 webpack 生命周期的任意阶段修改、优化或输出结果
3. **总结**
    - `loader` 负责**处理文件**，把各种资源转成 webpack 能理解的模块；
    - `plugin` 负责**扩展能力**，在构建流程的各个阶段插入逻辑改变最终输出。

```jsx
***//  ----- webpack.config.js (loader) -----***
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,     // ① 匹配所有以 .css 结尾的文件
        use: [
          'style-loader',   // ③ 后执行：把样式插入 <style> 标签
          'css-loader'      // ② 先执行：读取 CSS 文件内容
        ]
      }
    ]
  }
};

// 1. webpack 默认**只识别 JS 文件**，需要经过处理使 webpack 能够识别 CSS 文件 
// 2. css-loader 的作用：把 CSS 文件读成一个 JS 模块（例如变成一段字符串）。
// 3. style-loader 的作用：在浏览器运行代码时，创建一个 `<style>` 标签，把刚才那段 CSS 内容丢进去。
// 4. 从右到左执行的原因：输入 → css-loader → style-loader → 输出。css-loader 先做转换，style-loader 再把结果放到页面里，这样就能成功加载 CSS。

// ----- 使用 HtmlWebpackPlugin 自动生成 HTML 文件 (plugin) -----
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',   // 模板
    })
  ]
};

// 1. plugin 的作用是插入构建流程。 webpack 运行过程中有许多中间时刻，如加载模块，打包完成等等， plugin就是在这些时刻中插入进入干点儿别的事儿。 
// 2. HtmlWebpackPlugin 做的事情：
//	① 根据提供的模板（index.html）生成一个新的 HTML 文件  
//	② 自动把打包后的 JS/CSS 文件插入到 `<script>` `<link>` 标签  
// 	③ 最终输出一个带资源的完整 HTML 文件
// 3. 优势：不用自己写 `<script src="bundle.js"></script>`。  
```