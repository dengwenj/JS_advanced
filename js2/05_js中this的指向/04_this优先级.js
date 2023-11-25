function foo() {
  console.log(this) // "朴睦"
}

var obj = {
  name: 'obj',
  foo: foo.bind("朴睦")
}

obj.foo()


function bar() {
  console.log(this) // {}
}
var ww = bar.bind("dwj")
var obj = new ww()

// new绑定 > 显示绑定(apply/call/bind) > 隐式绑定(obj.foo()) > 默认绑定(独立函数调用)