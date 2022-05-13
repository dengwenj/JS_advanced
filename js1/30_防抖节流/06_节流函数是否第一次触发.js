// function throttle(fn, interval, options = { leading: true, trailing: false }) {
//   const { leading, trailing } = options
//   let lastTime = 0

//   const _throttle = function () {
//     // 获取当前事件触发的时间
//     const nowTime = new Date().getTime()

//     // 是否第一次触发
//     if (!lastTime && !leading) lastTime = nowTime

//     const remainTime = interval - (nowTime - lastTime)

//     if (remainTime <= 0) {
//       fn()
//       lastTime = nowTime
//     }
//   }

//   return _throttle
// }

// clearTimeout(timer)清除了timer指向的定时器，timer=null，
// 是修改timer的指向，是timer这个变量不指向某个定时器，然而并没有清除这个定时器，定时器依旧可以使用


// 基本的
function throttle(fn, interval, options = { leading: true, trailing: false }) {
  let { leading, trailing } = options
  let timer = null

  const _throttle = function (...args) {
    if (leading) {
      fn.apply(this, args)
      leading = false
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        clearTimeout(timer)
        timer = null
      }, interval)
    }
  }

  return _throttle
}