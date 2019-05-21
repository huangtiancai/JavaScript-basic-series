//let myHeading = document.querySelector('h1');//通过querySelector() 函数获取标题,把标题的引用储存在 myHeading 变量
//myHeading.textContent = 'Hello world!';//把 myHeading 变量的属性 textContent （标题内容）修改为 “Hello world!” 


//注：上面用到的两个函数都来自 文档对象模型 (DOM) API， 均用于控制文档。
// 文档对象模型 (DOM) API:  https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model

//document.querySelector 和 alert 是浏览器内置的函数，随时可用。

//如果代码中有一个类似变量名后加小括号 () 的东西，很可能就是一个函数。
//函数通常包括参数，参数中保存着一些必要的数据。它们位于括号内部，多个参数之间用逗号分开
//比如， alert() 函数在浏览器窗口内弹出一个警告框，还应为其提供一个字符串参数，以告诉它警告框里要显示的内容。


//切换图片
//这里首先把 <img> 元素的引用存放在 myImage 变量里,然后将这个变量的 onclick 事件与一个匿名函数绑定。每次点击图片时：
//1.获取这张图片的 src 属性值。
//2.用一个条件句来判断 src 的值是否等于原始图像的路径:
//  (1)如果是，则将 src 的值改为第二张图片的路径，并在 <img> 内加载该图片
//  (2)如果不是（意味着它已经修改过）, 则把 src 的值重新设置为原始图片的路径，即原始状态。
let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == "images/firefox-icon.png"){
        myImage.setAttribute('src','images/firefox2.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}



//setHeading 函数将根据 name 参数将页面标题设置为个性化的欢迎信息
//函数的实现中首先将 h1 元素的引用保存在 myHeading 变量中，然后设置 myHeading 的 textContent 属性。
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
  }
  
//setUserName 函数将为页面设置用户名信息
//1.该函数首先调用了 prompt() 函数， 与 alert() 类似会弹出一个对话框,需要用户输入数据，并在确定后将数据存储在 myName 变量里
//2.接下来将调用 localStorage API --->它可以将数据存储在浏览器中供后续获取
//3.localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它
//4.最后调用上述的 setHeading 函数来个性化欢迎信息。
function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
} 

//localStorage.removeItem('name');

//尝试取得浏览器中保存的 'name' 数据项
let storedName = localStorage.getItem('name');
//if ... else 块是初始化代码，因为它在页面初次读取时进行构造工作
//条件 !storedName == true   在 storedName 不存在时值为真
if(!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}
//切换用户
let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;