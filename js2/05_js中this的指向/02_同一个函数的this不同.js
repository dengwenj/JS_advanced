/**
 * this 跟函数被调用的方式有关系
 * this 是在运行时被绑定的
 * 4个绑定规则：1、默认绑定，2、隐式绑定，3、显示绑定，4、new 绑定
 */
function foo() {
  console.log(this);
}

foo()

var obj = {
  foo: foo
}
obj.foo()

foo.call("朴睦")
