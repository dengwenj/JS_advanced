function debounce(fn, delay, immediate = false, resultCallback) {
  // 定义一个定时器保存上一次的定时器
  let timer = null 
  let isInvoke = false

  // 执行真正的函数
  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      // 取消上一次定时器
      if (timer) clearTimeout(timer)

      // 判断是否立即执行
      if (immediate && !isInvoke) {
        const res = fn.apply(this, args)
        isInvoke = true
        if (resultCallback && typeof resultCallback === 'function') resultCallback(res)
        resolve(res)
      } else {
        // 延迟执行
        timer = setTimeout(() => {
          // 外部传入的真正要执行的函数
          const res = fn.apply(this, args)
          if (resultCallback && typeof resultCallback === 'function') resultCallback(res)
          resolve(res)
          isInvoke = false
          timer = null
        }, delay)
      }
    })
  }

  // 取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}