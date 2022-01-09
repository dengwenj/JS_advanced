function debounce(fn, delay, immediate = false) {
  // 定义一个定时器保存上一次的定时器
  let timer = null 
  let isInvoke = false

  // 执行真正的函数
  const _debounce = function (...args) {
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
        timer = null
      }, delay)
    }
  }

  // 取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}