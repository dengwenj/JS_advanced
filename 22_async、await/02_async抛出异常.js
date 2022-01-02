async function foo() {
  console.log('foo');

  // 异步函数中的异常，会被作为异步函数返回的 Promise 的 reject 值的
  throw new Error('msg error')
  console.log('不会执行了');
}

const promise = foo()

promise.catch((res) => {
  console.log(res); // msg error
})

console.log('后面执行');


function getData() {
  return new Promise((resolve, reject) => {
    reject('reject')
  })
}

async function foo1() {
  try {
    const res = await getData()
  } catch (error) {
    console.log(error, '错误的');
  }

  // console.log(res);
}
foo1()
// foo1().catch((err) => {
//   console.log(err); // 不用写捕获
// })