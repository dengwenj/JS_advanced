const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('p2')
    reject('error')
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3')
  }, 3000);
})

Promise.allSettled([p1, p2, p3]).then((res) => { //  等到所有的都执行完才会有最终的状态，在 then 里面，不管是 fulfilled 还是 rejected
  console.log(res);
  // [
  //   { status: 'fulfilled', value: 'p1' },
  //   { status: 'rejected', reason: 'error' },
  //   { status: 'fulfilled', value: 'p3' }
  // ]  
}).catch((err) => {
  console.log(err);
})

