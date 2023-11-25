Function.prototype.myApply = function (thisArg, args = []) {
  // 保存当前的 fn
  const fn = this

  thisArg = thisArg ?? window
  thisArg = Object(thisArg)

  thisArg.fn = fn
  const res = thisArg.fn(...args)

  delete thisArg.fn
  return res
}

function foo(n1, n2) {
  console.log(this)
  return n1 + n2
}

console.log(foo.myApply(null))
console.log(foo.myApply({ name: '朴睦' }, [10, 20]))
