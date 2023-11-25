Function.prototype.myCall = function (thisArg, ...args) {
  // 保存调用的函数
  const fn = this

  thisArg = thisArg ?? window
  // 转换成对象(可能传的是其他类型)
  thisArg = Object(thisArg)

  // 改变 fn 的 this
  thisArg.fn = fn
  const res = thisArg.fn(...args)
  delete thisArg.fn

  return res
}

function foo(n1, n2) {
  console.log(this)
  return n1 + n2
}

console.log(foo.myCall(undefined))
console.log(foo.myCall({ name: "ww" }, 23, 24))