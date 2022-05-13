function foo() {
    console.log('foo');
}

function bar(fn) {
    fn()
}

bar(foo)

function fn1(num1, num2, callBack) {
    console.log(callBack(num1, num2));
}

function add(n1, n2) {
    return n1 + n2
}

function sub(n1, n2) {
    return n1 - n2
}

function mul(n1, n2) {
    return n1 * n2
}

var m = 20
var n = 10
fn1(m, n, add)
fn1(m, n, sub)
fn1(m, n, mul)


function fn2(num) {
    return function (m) {
        return num + m
    }
}
const f1 = fn2(5)
console.log(f1(10));

// 高阶函数：一个函数作为另一个函数的返回值，或者作为另一个函数的参数，那么另一个函数就是高阶函数