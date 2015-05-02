作业3：   
实现一个简单的router，通过url可以找到相应的Action   
  
预备知识   
锚点# 的含义，通过锚点来做router的输入   
  
预计工作量   
10分钟   

具体描述   
通过URL中#后面的内容，去执行相应的代码   
例如   
URL为http://localhost/index.html#test时，执行test()   
URL为http://localhost/index.html#test/a时，执行test(a)   
URL为http://localhost/index.html#test/a/b时，执行test(a, b)   
注意异常处理   
 