const p = new Promise((resolve, reject) => {
  // resolve('成功')
  reject('error')
})

p.then((res) => {
  // console.log('res:', res);
  return new Promise((resolve, reject) => {
    reject('拒绝')
  })
}).catch((err) => { // 谁先被拒绝就调用谁的
  console.log(err);
})