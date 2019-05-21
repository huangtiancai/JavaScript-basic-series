>预备知识:	   
计算机基础知识，初步理解 HTML 和 CSS 。
目标: 
初步了解 JavaScript，包括一些概念、用途、嵌入网站的方法。


#### 广义的定义
JavaScript 是一种脚本，一门编程语言，它可以在网页上实现复杂的功能，网页展现给你的不再是简单的静态信息，而是实时的内容更新，交互式的地图，2D/3D 动画，滚动播放的视频等等。JavaScript 怎能缺席。它是标准 Web 技术蛋糕的第三层。

![](https://raw.githubusercontent.com/huangtiancai/JavaScript-basic-series/master/imgs/Web%20%E6%8A%80%E6%9C%AF%E8%9B%8B%E7%B3%95%E4%B8%89%E5%B1%82%E5%9B%BE.png)

- HTML是一种标记语言，用来结构化我们的网页内容并赋予内容含义，例如定义段落、标题和数据表，或在页面中嵌入图片和视频。
- CSS 是一种样式规则语言，可将样式应用于 HTML 内容， 例如设置背景颜色和字体，在多个列中布局内容。
- JavaScript 是一种脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画，还有很多。（好吧，虽然它不是万能的，但可以通过简短的代码来实现神奇的功能。）

这三层依次建立，秩序井然。举一个文本标签的简单示例。首先用 HTML 将文本标记起来，从而赋予它结构和目的：
```
<p>玩家1：小明</p>
```
加一点css
```
p {
        font-family: sans-serif, '黑体';
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: center;
        border: 2px solid rgba(0, 0, 200, 0.6);
        background: rgba(0, 0, 200, 0.3);
        color: rgba(0, 0, 200, 0.6);
        box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
        border-radius: 10px;
        padding: 3px 10px;
        display: inline-block;
        cursor: pointer;
      }
```

