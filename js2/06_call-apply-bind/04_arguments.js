function foo(n1, n2) {
  // 类数组
  console.log(arguments)
  console.log(arguments.length)
  console.log(arguments[1])
  console.log(arguments[2])
  console.log(arguments.callee) // 获取当前这个函数

  // 转换成数组
  const newArr1 = Array.prototype.slice.call(arguments)
  const newArr2 = [].slice.call(arguments)
  const newArr3 = Array.from(arguments)
  const newArr4 = [...arguments]
}

foo(10, 20, 30, 40)
