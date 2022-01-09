function debounce(fn, delay, immediate = false) {
  // 定义一个定时器保存上一次的定时器
  let timer = null 
  let isInvoke = false

  // 执行真正的函数
  return function (...args) {
    // 取消上一次定时器
    if (timer) clearTimeout(timer)

    // 判断是否立即执行
    if (immediate && !isInvoke) {
      fn.apply(this, args)
      isInvoke = true
    } else {
       // 延迟执行
      timer = setTimeout(() => {
        // 外部传入的真正要执行的函数
        fn.apply(this, args)
        isInvoke = false
      }, delay)
    }
  }
}