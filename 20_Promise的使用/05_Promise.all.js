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

Promise.all([p1, p2, p3, 'aaa']).then((res) => { // 会等到都是成功的状态，才会执行 then 方法
  console.log(res); // [ 'p1', 'p2', 'p3', 'aaa' ]
}).catch((err) => { // 只要有一个是失败状态的话就会调用 catch
  console.log(err); // error
})