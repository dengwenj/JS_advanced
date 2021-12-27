const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class DWJPromise {
  constructor(executor) {
    this.state = PROMISE_STATUS_PENDING // 状态
    this.result = undefined // 结果值

    const resolve = (value) => {
      if (this.state === PROMISE_STATUS_PENDING) {
        this.state = PROMISE_STATUS_FULFILLED
        queueMicrotask(() => { // 会把放在微任务里面去
          this.result = value
          this.onFulfilled(this.result)
        })
      }
    };

    const reject = (reason) => {
      if (this.state === PROMISE_STATUS_PENDING) {
        this.state = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.result = reason
          this.onRejected(this.result)
        })
      }
    };

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
}

const p = new DWJPromise((resolve, reject) => {
  resolve('11')
  reject('22')
})

p.then((res) => { // 这里 then 方法执行过后才去执行 reslove 函数，才会执行这个回调函数
  console.log('res:', res);
}, (err) => {
  console.log('err:', err);
})  
