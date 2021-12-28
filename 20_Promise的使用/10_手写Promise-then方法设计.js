const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function catchError(execCallback, value, resolve, reject) {
  try {
    const res = execCallback(value)
    
    if (res instanceof DWJPromise) {
      res.then((value) => {
        resolve(value)
      }, (reason) => {
        reject(reason)
      })
    } else {
      resolve(res)
    }
  } catch (error) {
    reject(error)
  }
}

class DWJPromise {
  constructor(executor) {
    this.state = PROMISE_STATUS_PENDING // 状态
    this.result = undefined // 结果值
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.state === PROMISE_STATUS_PENDING) {
        // 会把放在微任务里面去
        queueMicrotask(() => { 
          if (this.state !== PROMISE_STATUS_PENDING) return
          this.state = PROMISE_STATUS_FULFILLED
          this.result = value
          this.onFulfilledCallbacks.map(fn => fn(this.result))
        })
      }
    }

    const reject = (reason) => {
      if (this.state === PROMISE_STATUS_PENDING) {
        // 会把放在微任务里面去
        queueMicrotask(() => { 
          if (this.state !== PROMISE_STATUS_PENDING) return 
          this.state = PROMISE_STATUS_REJECTED
          this.result = reason
          this.onRejectedCallbacks.map(fn => fn(this.result))
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) { 
    return new DWJPromise((resolve, reject) => {
      // 如果在 then 调用的时候，状态已经确定了
      if (this.state === PROMISE_STATUS_FULFILLED && onFulfilled) {
        catchError(onFulfilled, this.result, resolve, reject)
      }

      if (this.state === PROMISE_STATUS_REJECTED && onRejected) {
        catchError(onRejected, this.result, resolve, reject)
      }
    
      // 将成功回调和失败回调放在数组里，这样就可以同时调用多个
      if (this.state === PROMISE_STATUS_PENDING) {
        this.onFulfilledCallbacks.push(() => {
          catchError(onFulfilled, this.result, resolve, reject)
        })
        this.onRejectedCallbacks.push(() => {
          catchError(onRejected, this.result, resolve, reject)
        })
      }
    })
  }
}

const p = new DWJPromise((resolve, reject) => {
  // resolve('11')
  // reject('22')
  // throw new Error('error')
  // setTimeout(() => {
  //   resolve('hhhhh')
  //   console.log(555);
  // }, 1000);
  resolve('1111')
}) 
console.log(111);
// p.then((res) => { // 这里 then 方法执行过后才去执行 reslove 函数，才会执行这个回调函数
//   console.log('res:', res);
// }, (err) => {
//   console.log('err:', err);
// })  

p.then((res) => {
  console.log(res, '111111111111111');
  // throw new Error('ggg')
  return new DWJPromise((resolve, reject) => {
    resolve('resolve')
  })
},(err) => {
  console.log(err);
  // throw new Error('ggg')
}).then((res) => {
  console.log(res, '222222222222222');
},(err) => {
  console.log(err);
})

// setTimeout(() => {
//   p.then((res) => {
//     console.log(res, '-----');
//   }, (err) => {
//     console.log(err);
//   })
// }, 1000);
