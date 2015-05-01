作业2：   
通    

预备知识：   
各种数据类型的赋值方法及类型判断方法   
值 和引用类型的区别   
数组和对象的遍历方法   
递归算法   

预计工作量 
半小时 
  
具体描述   
实现方法clone，可以用其针对可能是任何类型的对象，进行值拷贝   
例如   
var a = 1;   
var b = clone(a);   
b = 2;   
console.log(a, b); // 1, 2   
  
var a = [1, 2];   
var b = clone(a);   
a[0] = 'changed a';   
b[1] = 'changed b';   
console.log(a, b); // a:['changed a', 2], b:[1, changed b]   
  
var a = {   
    key1: 'value1',   
    key2: [{   
        id: 1,   
        data: [10, 20]   
    }, {   
        id: 2,   
        data: [20, 30]   
    }]   
}   
var b = clone(a);   
b.key1 = 'value changed';   
b.key2[1].data[0] = 'changed data';   
console.log(a, b);   