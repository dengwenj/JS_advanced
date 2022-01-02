async function foo() {
  console.log('foo');

  throw new Error('msg error')
  console.log('不会执行了');
}

const promise = foo()

promise.catch((res) => {
  console.log(res); // msg error
})

console.log('后面执行');