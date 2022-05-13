const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'
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
    onRejected = onRejected || (err => { throw err })

    onFulfilled = onFulfilled || (value => { return value })

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
        if (typeof onFulfilled === 'function') this.onFulfilledCallbacks.push(() => {
          catchError(onFulfilled, this.result, resolve, reject)
        })
        if (typeof onRejected === 'function') this.onRejectedCallbacks.push(() => {
          catchError(onRejected, this.result, resolve, reject)
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  // 无论 Promise 对象变成 fulfilled 还是 rejected 状态，最终都会被执行，回调没有参数
  finally(onFinally) {
    this.then(() => {
      onFinally()
    }, () => {
      onFinally()
    })
  }

  // 3 个，非 promise，是 promise，抛出异常
  static resolve(value) {
    return new DWJPromise((resolve, reject) => {
      try {
        if (value instanceof DWJPromise) {
          value.then((res) => {
            resolve(res)
          }, (err) => {
            reject(err)
          })
        } else {
          resolve(value)
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  // 返回的都是失败的
  static reject(value) {
    return new DWJPromise((resolve, reject) => {
      reject(value)
    })
  }

  // 全部是成功的才返回成功，值是数组，只要有一个失败就失败了，值是失败那个值
  static all(promiseArr) {
    return new DWJPromise((resolve, reject) => {
      const valueArr = []
      promiseArr.forEach(promise => {
        promise.then((res) => {
          valueArr.push(res)
          if (valueArr.length === promiseArr.length) {
            resolve(valueArr)
          }
        }, (err) => {
          reject(err)
        })
      })
    })
  }

  // 不管是失败还是成功都要执行完，在成功的回调里面所有的东西, 没有 reject  
  static allSetted(promiseArr) {
    return new DWJPromise((resolve) => {
      const valueArr = []
      promiseArr.forEach(promise => {
        promise.then((res) => {
          valueArr.push({ status: promise.state, value: res })
          if (valueArr.length === promiseArr.length) resolve(valueArr) // 在哪里达到了结果就在哪里调
        }, (err) => {
          valueArr.push({ status: promise.state, value: err })
          if (valueArr.length === promiseArr.length) resolve(valueArr)
        })
      })
    })
  }

  // 谁快用谁
  static race(promiseArr) {
    return new DWJPromise((resolve, reject) => {
      promiseArr.forEach(promise => {
        promise.then((res) => {
          resolve(res)
          console.log(1);
        }, (err) => {
          reject(err)
        })
      })
    })
  }

  // 找到成功的才会停止，没有找到成功的不会停止，所有都没有成功的话才是失败的
  static any(promiseArr) {
    return new DWJPromise((resolve, reject) => {
      let valueArr = []
      promiseArr.forEach(promise => {
        promise.then((res) => {
          resolve(res)
        }, (err) => {
          valueArr.push(err)
          if (valueArr.length === promiseArr.length) {
            reject(new AggregateError(valueArr))
          } 
        })
      })
    })
  }
} 

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

const p1 = new DWJPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(111)
  }, 1000);
}) 
const p2 = new DWJPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(222)
    reject(222)
  }, 2000);
}) 
const p3 = new DWJPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(333)
  }, 3000);
}) 

// DWJPromise.allSetted([p1, p2, p3]).then((res) => {
//   console.log(1);
//   console.log(res);
// })
DWJPromise.race([p1, p2, p3]).then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})
// DWJPromise.any([p1, p2, p3]).then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// })
