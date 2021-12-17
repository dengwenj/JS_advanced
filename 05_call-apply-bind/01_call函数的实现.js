Function.prototype.wjcall = function (thisArg, ...args) {
    // console.log(this);
    var fn = this

    // console.log(...args); // 数组可以这样，对象不行

    // 对 thisArg 转为对象类型（防止传入的是非对象类型）
    // thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    thisArg = thisArg ?? window
    thisArg = Object(thisArg)

    // 调用需要被执行的函数
    thisArg.fn = fn
    var res = thisArg.fn(...args)
    delete thisArg.fn

    return res
}

function foo() {
    console.log(this);
}

foo.wjcall(123)

function sum(num1, num2) {
    console.log(this);
    return num1 + num2
}

var res1 = sum.wjcall({name: 'dengwj'}, 20, 30)
console.log(res1);

