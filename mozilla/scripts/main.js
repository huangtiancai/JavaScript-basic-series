let myHeading = document.querySelector('h1');//通过querySelector() 函数获取标题,把标题的引用储存在 myHeading 变量
myHeading.textContent = 'Hello world!';//把 myHeading 变量的属性 textContent （标题内容）修改为 “Hello world!” 
//注：上面用到的两个函数都来自 文档对象模型 (DOM) API， 均用于控制文档。
// 文档对象模型 (DOM) API:  https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model