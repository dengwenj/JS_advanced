function foo(n, m, z) {
  return n + m + z
}

// 实现函数柯里化
function currying(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }

    return function (...args2) {
      // 递归处理
      return curried.apply(this, [...args, ...args2])
    }
  }  
}

const resFn = currying(foo)
console.log(resFn(10, 20)(30))
console.log(resFn(10)(20)(30))
