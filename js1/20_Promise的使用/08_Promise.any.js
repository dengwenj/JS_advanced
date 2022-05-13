const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('p1')
    reject('p1')
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
    // resolve('p3')
    reject('p3')
  }, 3000);
})

// any 就是 找到有 fulfilled 才会调用 then，直到最后都没有 fulfilled 才会去调用 catch
Promise.any([p1, p2, p3]).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err.errors); // [ 'p1', 'error', 'p3' ]
});