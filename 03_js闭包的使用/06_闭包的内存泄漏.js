function foo() {
    // 这个 AO 对象不会销毁，这是造成闭包内存泄漏
    var name = 'dengwj'

    function bar() {
        console.log(name);
    }

    return bar
}

var fn = foo()
fn()

fn = null // 释放