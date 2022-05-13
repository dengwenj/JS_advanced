Function.prototype.wjbind = function (thisArg, ...arg1) {
    var fn = this

    thisArg = (thisArg !== null && thisArg !== undefined) ? thisArg : window

    return function (...arg2) {
        thisArg.fn = fn

        // 对两个传入的参数进行合并
        var totleParams = [...arg1, ...arg2]

        var res = thisArg.fn(...totleParams)
        delete thisArg.fn

        return res
    }
}

// bind 返回一个新的函数，不会调用原来函数

function foo(n1, n2, n3, n4) {
    console.log(n1, n2, n3, n4);
    return n1 + n2 + n3 + n4
}

var newFn = foo.wjbind({name:'dwj'}, 10, 20)
var n = newFn(30, 40)
console.log(n);
