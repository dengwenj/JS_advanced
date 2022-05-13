var msg = '你好，老李'

// 执行代码，v8 引擎内部会有一个执行上下文，有全局执行上下文，有函数执行上下文
// 函数的父级作用域跟他的定义的位置是有关系的，跟他的调用位置没有关系
function foo() {
    console.log(msg); // 你好，老李
}

function bar() {
    var msg = '你好，老王'
    foo()
}

bar()