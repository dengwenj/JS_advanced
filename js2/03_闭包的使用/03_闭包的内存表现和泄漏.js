function foo() {
  var name = '朴睦'
  var age = 23
  function bar() {
    console.log(name)
    console.log(age)
  }

  return bar
}

var fn = foo()
fn()

// 这里 fn 不释放会有内存泄漏， bar 函数对象的  parentScope 会指向 foo 的 AO 对象
