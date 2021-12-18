function fn1(num1) {
    return num1 * 2
}

function fn2(num2) {
    return num2 ** 2
}


// 实现组合函数的通用
function wjComposeFn(...fns) {
    var length = fns.length
    for(var i = 0; i< length; i++) {
        if (typeof fns[i] !== 'function') {
            throw new Error('必须传入函数')
        }
    }

    return function (...args) {
        var index = 0
        var res = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            res = fns[index].call(this, res)
        }
        return res
    }
}

var newFn = wjComposeFn(fn1, fn2)
console.log(newFn(20));