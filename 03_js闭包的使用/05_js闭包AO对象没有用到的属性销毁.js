function foo() {
    var name = 'dwj';
    var age = 21 // 这个 age 属性会被销毁掉，js 引擎做的。 ECMA 本身是不会销毁的

    function bar() {
        debugger
        console.log(name);
    }

    return bar
}

var fn = foo()
fn()