function debounce(fn, delay) {
  // 定义一个定时器保存上一次的定时器
  let timer = null 

  // 执行真正的函数
  return function (...args) {
    // 取消上一次定时器
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn.apply(this, args)
    }, delay);
  }
}