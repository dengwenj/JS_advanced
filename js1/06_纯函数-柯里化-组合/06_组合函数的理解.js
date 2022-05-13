function foo(count) {
    return count * 2
}

function fn(num) {
    return num ** 2
}

// 组合函数
function composeFn(m, n) {
    return function(totle) {
       return m(n(totle))
    }
}

var newFn = composeFn(foo, fn)
console.log(newFn(20));