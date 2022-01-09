function throttle(fn, interval, options = { leading: true, trailing: false }) {
  const { leading, trailing } = options
  let lastTime = 0

  const _throttle = function () {
    // 获取当前事件触发的时间
    const nowTime = new Date().getTime()

    // 是否第一次触发
    if (!lastTime && !leading) lastTime = nowTime

    const remainTime = interval - (nowTime - lastTime)

    if (remainTime <= 0) {
      fn()
      lastTime = nowTime
    }
  }

  return _throttle
}