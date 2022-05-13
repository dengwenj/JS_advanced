// 遇到 function 就不能，会被忽略

const obj = {
  name: 'dengwenjie',
  age: 21,
  friend: {
    name: 'zww'
  },
  foo() {
    console.log('foo');
  }
}

const JSONString = JSON.stringify(obj, (key, value) => {
  if (key === 'foo') {
    console.log(String(value));
    return String(value)
  }
  return value
})
// const newObj = JSON.parse(JSONString) // 不能拷贝函数，因为 json 里面没有这种， 要拦截
const newObj = JSON.parse(JSONString, (key, value) => {
  if (key === 'foo') {
    return value
  }
  return value
})


console.log(newObj);