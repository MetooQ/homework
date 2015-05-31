作业4：   
实现一个简单的DOM选择器   

预备知识   
DOM相关知识   
http://www.w3school.com.cn/htmldom/index.asp   

具体描述   
实现一个方法$，可以完成以下功能   

1.可以通过id获取一个DOM   
例如：   
<div id="dom1"></div>   
   
$("#dom1") // 返回一个数组，数组中唯一的元素为id为dom1的div   

2.可以通过css的class name获取一组DOM   
例如：   
<div class="style1"></div>   
<p class="style1 style2"></p>   
  
$(".style1") // 返回一个数组，数组中两个元素，为class含有style1的div及p   
$(".style2 .style1") // 返回一个数组，数组中一个元素，为class含有style1, style2的p   