const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('p2')
    reject('error')
  }, 500);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3')
  }, 3000);
})

// race 谁快用谁
Promise.race([p1, p2, p3]).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})