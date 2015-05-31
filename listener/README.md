作业1：   
实现一个自定义事件处理对象notice，或者称为消息中心对象   

预备知识：   
对象及数组的相关知识   
JavaScript函数相关知识   
搜索“监听者模式（观察者模式）”相关知识阅读   

预计工作量：   
半小时   

具体描述：   
任何对象可以通过notice.on方法注册要监听什么消息（事件），当监听到时进行响应某个方法   
例如：   
notice.on("something happen", someFunction);   
notice.on("OnLine", function () {   
    sendHomeWork();   
});   
任何对象通过notice.send方法可以发送任何消息（事件）     
notice.send("Some Message");     