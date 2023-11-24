function foo(n, m) {
  console.log(n, m)
  console.log(this)
}

foo.call("call", 10, 20)
foo.apply('apply', [30, 40])

// bind 后面有参数就用参数里面，没有参数就用 newFoo 里的
var newFoo = foo.bind("bind", 50, 60)
newFoo()
newFoo(222, 333)
