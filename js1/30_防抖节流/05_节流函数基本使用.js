function throttle(fn, interval) {
  let lastTime = 0
  // let is = true
  // let timer = null

  const _throttle = function () {
    // 获取当前事件触发的时间
    const nowTime = new Date().getTime()
    const remainTime = interval - (nowTime - lastTime)

    if (remainTime <= 0) {
      fn()
      lastTime = nowTime
    }

    // if (is) {
    //   is = false
    //   timer = setTimeout(() => {
    //     fn()
    //     is = true
    //     timer = null
    //   }, interval)
    // }
  }

  return _throttle
}