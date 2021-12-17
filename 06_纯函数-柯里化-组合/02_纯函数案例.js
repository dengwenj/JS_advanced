// 纯函数 相同的输入，产生相同的输出。函数执行里面没有产生副作用
function foo(num1, num2) { // 纯函数
    return num1 + num2
}
foo(1,2)

function fn(info) { // 这个不是纯函数，产生了副作用，修改了参数
    info.name = 'xd'
}

var obj = { name: 'dengwj' }
fn(obj)

var num = 10
function fn2() { // 这个不是纯函数，修改了全局变量
    num = 20
}
fn2()

function fn3(info) { // 这是一个纯函数
    return {
        ...info,
        age = 20
    }
}

fn3(obj)