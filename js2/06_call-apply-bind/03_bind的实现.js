Function.prototype.myBind = function (thisArg, ...args) {
  // 保存调用的函数
  let fn = this

  return function (...arg1s) {
    thisArg = thisArg ?? window
    thisArg = Object(thisArg)
    thisArg.fn = fn

    const res = thisArg.fn(...[...args, ...arg1s])

    delete thisArg.fn
    fn = null
    return res
  }
}

function foo(n1, n2, n3, n4) {
  console.log(this)
  return n1 + n2 + n3 + n4
}

const bar = foo.myBind({ name: '朴睦' }, 20, 30)
console.log(bar(40, 50))
