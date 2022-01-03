Promise.resolve().then(() => {
  console.log(0);
  // 1 直接 return 一个值 相当于 resolve(4)
  // return 4

  // 2 return thenable 的值
  // return {
  //   then(resolve) {
  //     resolve(4)
  //   }
  // }

  // 3 return Promise
  // 不是普通的值，多加一次微任务
  // Promise.resolve(4), 多加一次微任务
  // 一共多加两次微任务
  return Promise.resolve(4)
}).then((res) => {
  console.log(res);
})

Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6);
})

// return 4
// 0
// 1
// 4
// 2
// 3
// 5
// 6

// thenable
// 0
// 1
// 2
// 4
// 3
// 5
// 6

// Promise
// 0
// 1
// 2
// 3
// 4
// 5
// 6
