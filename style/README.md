作业5：   
实现对DOM进行CSS样式类的设置   
  
预备知识   
DOM相关知识   
字符串处理   
  
具体描述   
1. 实现一个方法 addClass，可以为某个DOM增加样式类   
例如：   
<div id="a" class="class-a"></div>   
  
addClass(document.getElementById("a"), "class-a class-b class-c");   
执行后   
<div id="a" class="class-a class-b class-c"></div>   
  
2. 实现一个方法 removeClass，可以为某个DOM删除样式类   
<div id="a" class="class-a class-b class-c"></div>   
removeClass(document.getElementById("a"), "class-a class-c");   
执行后   
<div id="a" class="class-b"></div>   