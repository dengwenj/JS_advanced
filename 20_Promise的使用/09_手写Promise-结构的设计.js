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
        this.result = value
        console.log('resolve');
      }
    };

    const reject = (reason) => {
      if (this.state === PROMISE_STATUS_PENDING) {
        this.state = PROMISE_STATUS_REJECTED
        this.result = reason
        console.log('reject');
      }
    };

    executor(resolve, reject)
  }
}

new DWJPromise((resolve, reject) => {
  resolve('11')
  reject('22')
})