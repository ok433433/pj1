// 数据类型
// Number 数字 var a1 = 123;  》》 异常的数字 NaN
// String 字符串  var a1 = '123';
// bool 布尔值  true/false

// object 对象 var a1 = {};
// array 数组 var a1 = [1, 2, 3, 4];
// function 函数 var a1 = function() {};

// undefined 未定义 
// null 空

//var a1 = 'string';

// 带参数的函数定义
function fn1(age, dts) {
    console.log(age, dts);
}

function fn2() {
    console.log('我是一个没有参数的函数');
}

// 不传参数调用
fn1();

// 传参数调用
fn1(null,2);

// 调用
fn2();


fn1(true, '123');

// 数字转字符串
var var1 = 123;
console.log('数字转字符串：', String(var1));

var var2 = '123';
console.log('字符串转数字：', Number(var2));
console.log('字符串转数字：', Number('djh')); // 异常 NaN

//对象
var obj = {
    a: 1,
    b: '22'
};
obj = null;
obj = undefined;


// bool
if(obj) {

}
else {

}


