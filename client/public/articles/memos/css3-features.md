---
titleEn: "CSS3 New Features"
titleCh: "CSS3 新特性"
tags: ["CSS"]
---


1. **过渡 (Transition)**
    - 让属性值从一个状态平滑过渡到另一个状态
    - 示例：`transition: all 0.5s ease;`
2. **动画 (Animation)**
    - 使用关键帧定义复杂动画
    - **具体设置**：
        - name：动画名称
        - duration：周期时间
        - timing-function：运动曲线
        - delay：延迟时间
        - iteration-count：播放次数（如 infinite 无限循环）
        - direction：正反交替（normal / alternate）
        - play-state：是否运行（running / paused）
    - **示例**：
        
        ```css
        @keyframes move {
          from { left: 0; }
          to   { left: 200px; }
        }
        .box {
          position: relative;
          animation: move 2s linear infinite alternate;
        }
        ```
        
3. **形状转换 (Transform)**
    - 2D/3D 变换：位移、旋转、缩放、倾斜；通过 transform-origin 设置变换中心
    - **示例**：
        
        ```css
        .t {
          transform-origin: 50% 50%;
          transform: translate(30px, 30px) rotate(30deg) scale(0.8) skew(10deg, 5deg);
        }
        ```
        
4. **阴影 (Shadow)**
    - 文本与盒子阴影；可叠加多个阴影（用逗号分隔）
    - **分别对应**：水平偏移，垂直偏移，模糊半径，颜色
    - 示例：
        
        ```css
        .text  { text-shadow: 2px 2px 2px #000; }
        .box   { box-shadow: 10px 10px 5px #999, 0 0 10px rgba(0,0,0,.1); }
        ```
        
5. **边框图片 (Border Image)**
    - 用图片切片作为边框；**需配合 border 设置边框宽度**
    - 示例：
        
        ```css
        .panel {
          border: 20px solid transparent;
          border-image: url(border.png) 30 round;
        }
        ```
        
6. **背景与渐变 (Background & Gradient)**
    - 线性/径向渐变、背景裁剪与尺寸
    - **示例**：
        
        ```css
        .linear  { background: linear-gradient(to right, #f66, #69f); }
        .radial  { background: radial-gradient(circle, #ff0, #0f0); }
        .cover   { background: url(hero.jpg) center/cover no-repeat; }
        ```
        
7. **滤镜 (Filter)**
    - 对元素进行图像效果处理，可链式叠加
    - **具体设置**：
        - blur：模糊
        - brightness：亮度
        - contrast：对比度
        - grayscale：灰度
        - sepia：怀旧色
    - **示例：**
        
        ```css
        .fx { filter: blur(4px) brightness(1.1) contrast(130%) grayscale(20%); }
        ```
        
8. **弹性布局 (Flexbox)**
    - 一维布局，主轴/交叉轴对齐
    - **示例：**
        
        ```css
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        
        ```
        
9. **栅格布局 (Grid)**
    - 二维网格，行列同时控制
    - **示例：**
        
        ```css
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 120px;
          gap: 12px;
        }
        
        ```
        
10. **多列布局与媒体查询 (Multi-column & Media Query)**
    - **多列排版**与响应式
    - 把文字/内容像报纸一样分成多列，自动流动
    - **示例：**
        
        ```css
        .columns {
          column-count: 3;
          column-gap: 20px;
          column-rule: 1px solid #eee;
        }
        
        @media (max-width: 768px) {
          html { font-size: 14px; }
          .columns { column-count: 1; }
        }
        ```
        
11. **选择器补充 (:nth-of-type)**
    - 选择同级中第 n 个给定类型的元素
    - 示例：
        
        ```css
        li:nth-of-type(2) { color: #e91e63; }
        ```
        

12. 顺口溜：**动形加滤镜，背边布媒选。**
    - 动画过渡，形状转换
    - 阴影效果，边框图片，背景渐变，滤镜特效
    - 布局升级，媒体查询
    - 选择器增强。