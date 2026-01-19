---
titleEn: "Custom webpack plugins"
titleCh: "自定义 webpack 插件"
tags: ["engineering"]
---

1. **自定义 webpack 插件的核心步骤**
    - 定义**类或构造函数**
    - 在原型上实现 `apply` （ 在 `apply` 中绑定 `compiler` 的生命周期钩子）
    - 在钩子里**执行逻辑**
    - 必要时调用回调结束
2. **什么是生命周期钩子？**
    - webpack 构建过程有很多步骤：开始 → 读取模块 → 编译 → 生成文件 → 完成。
    - 每个步骤都会广播一个事件，这些事件就叫生命周期钩子（hooks）
3. **自定义插件示例**
    
    ```jsx
    // ① 定义插件
    class MyPlugin {
     apply(compiler) {
       // ② 监听 webpack 的 done 钩子（打包完成时触发）
       compiler.hooks.done.tap('MyPlugin', () => {
         console.log('打包完成：这是自定义插件输出的内容');
       });
     }
    }
    
    // ③ 在 webpack.config.js 里使用插件
    module.exports = {
     plugins: [
       new MyPlugin()
     ]
    };
    
    // 效果：
    // 每次 webpack 打包完成都会在终端打印：
    // "打包完成：这是自定义插件输出的内容"
    ```