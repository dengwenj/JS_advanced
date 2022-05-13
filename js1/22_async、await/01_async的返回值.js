async function foo() {
  console.log(1);

  // 返回一个值
  // return 123

  // 返回 thenable
  // return {
  //   then(resolve, reject) {
  //     resolve('resolve') 
  //   }
  // }

  // 返回一个 promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('new Promise')
    }, 2000);
  })
}

const promise = foo()
promise.then((res) => {
  console.log(res); // 123 、resolve、new Promise
})