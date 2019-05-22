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
再加点JavaScript实现动态行为
```
<p>玩家1：小明</p>
<script>
    const para = document.querySelector('p');
    para.addEventListener('click',updateName);
    function updateName(){
      let name = prompt("输入一个新的名字：");
      para.textContent = "玩家1："+name;
    }
</script>
```
--------------------
#### 它到底可以做什么？
JavaScript 语言的核心包含一些普遍的编程特性，以让你可以做到如下的事情：
- 在变量中储存有用的值。比如上文的示例中，我们请求客户输入一个新名字，然后将其储存到 name 变量中。
- 操作一段文本（在编程中称为“字符串”（string））。上文的示例中，我们取字符串 "玩家1："，然后把它和 name 变量连结起来，创造出完整的文本标签，比如：'玩家1：小明"。
- 运行代码以响应网页中发生的特定事件。上文的示例中，我们用一个 click事件来检测按钮什么时候被点击，然后运行代码更新文本标签。
- 以及更多！

JavaScript 语言核心之上所构建的功能更令人兴奋。**应用程序接口（Application Programming Interfaces**（**API**)）将为你的代码提供额外的超能力

***应用程序接口***
***Application Programming Interfaces***
***API***

API 是已经建立好的一套代码组件，可以让开发者实现原本很难甚至无法实现的程序。
API 通常分为两类:
- 浏览器 API 
- 第三方 API 

**浏览器 API** 内建于 web 浏览器中，它们可以使周边计算环境的数据暴露出来，还可以做实用的复杂工作。
- [文档对象模型 API（DOM（Document Object Model）API）](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model) 能通过创建、移除和修改 HTML，为页面动态应用新样式等手段来操作 HTML 和 CSS。
比如当某个页面出现了一个弹窗，或者显示了一些新内容（像上文小 demo 中看到那样），这就是 DOM 在运行
- [地理位置 API（Geolocation API）](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation) 获取地理信息。这就是为什么 谷歌地图 可以找到你的位置，而且标示在地图上。
- [画布（Canvas）](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)和[WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API) API可以创建生动的 2D 和 3D 图像。人们正运用这些 web 技术制作令人惊叹的作品。参见 [Chrome Experiments](https://www.chromeexperiments.com/webgl) 以及 [webglsamples](http://webglsamples.org/)。
- 诸如 [HTMLMediaElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement) 和 [WebRTC](https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API) 等 [影音类](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery) API 让你可以利用多媒体做一些非常有趣的事，比如在网页中直接播放音乐和影片，或用自己的网络摄像头获取录像，然后在其他人的电脑上展示（试用简易版 截图 demo 以理解这个概念）。

>注: 上述很多演示都不能在旧浏览器中运行。推荐在测试代码时使用诸如 Firefox, Chrome, Edge 或者 Opera 等现代浏览器。当代码即将交付生产环境时（也就是真实的客户即将使用真实的代码时），你还需要深入考虑 跨平台测试。

**第三方 API** 并没有默认嵌入浏览器中，一般要从网上取得它们的代码和信息。比如
[Twitter API](https://dev.twitter.com/overview/documentation) 和 [新浪微博 API](https://open.weibo.com/) 可以在网站上展示最新推文之类。
[谷歌地图 API](https://developers.google.com/maps/) 和 [高德地图 API](https://lbs.amap.com/) 可以在网站嵌入定制的地图等等。
更多参见[客户端 Web API](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs)


***先稳住！你看到的只是冰山一角。你不可能学一天 JavaScript 就能构建下一个微博、高德地图或者微信。敬请「牢记初心，砥砺前行」***

---
#### JavaScript 在页面上做了什么？
浏览器在读取一个网页时，代码（HTML, CSS 和 JavaScript）将在一个运行环境（浏览器标签）中得到执行。就像一间工厂，将原材料（代码）加工为一件产品（网页）。


  








