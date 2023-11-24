function foo() {
  // 占用 4 M
  var arr = new Array(1024 * 1024).fill(1)
  return function () {
    console.log(arr)
  }
}

var arrFn = []
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrFn.push(foo())
  }, i * 100);
}

setTimeout(() => {
  for (var i = 0; i < 50; i++) {
    arrFn.pop()
  }
}, 10000);

/**
 * 闭包是 JavaScript 这个语言的一个特点，主要的使用场景就是为了创建私有的变量。当然这个变量包含函数。
 * 闭包的作用：闭包就是一种阻止垃圾回收器将变量从内存中移除的方法，使创建变量的执行环境外面可以访问到该创建的变量。
 */