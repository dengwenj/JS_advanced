/**
 * 作用域是在编译的时候就确定了
 */
var age = 23

// scope chain: VO + parent scope
// 会创建 AO, AO 是在函数调用的时候创建
function foo() {
  console.log(age); // 23
}

function bar() {
  var age = 24
  foo()
}
bar()
