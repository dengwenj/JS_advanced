const p = new Promise((resolve, reject) => {
  resolve('success')
})

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log('无论执行 then 还是 catch 之后都会执行这个回调');
})