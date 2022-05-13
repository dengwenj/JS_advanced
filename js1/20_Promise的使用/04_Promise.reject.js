const p = Promise.reject(new Promise((resolve, reject) => {
  resolve('resolve')
})) // reject 都是返回失败的，传入的是什么 结果值就是什么

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})