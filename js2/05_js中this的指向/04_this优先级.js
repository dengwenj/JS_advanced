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
// bind > bind、apply

function fn() {
  console.log(this) // 全局对象
}
fn.apply(null)
fn.apply(undefined) 
var f = fn.bind(null)

/**
 * 箭头函数不会绑定 this、arguments 属性
 * 箭头函数不能作为构造函数来使用(不能和 new 一起来使用,会抛出错误)
 */