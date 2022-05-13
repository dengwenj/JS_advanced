const obj = {
  name: 'dengwenjie',
  age: 21,
  friends: {
    name: 'zww'
  },
  hobby: ['睡觉'],
}

const JSONstring1 = JSON.stringify(obj)
console.log(JSONstring1); // {"name":"dengwenjie","age":21,"friends":{"name":"zww"},"hobby":["睡觉"]}

const JSONstring2 = JSON.stringify(obj, ['name', 'age'])
console.log(JSONstring2); // {"name":"dengwenjie","age":21}

const JSONstring3 = JSON.stringify(obj, (key, value) => {
  if (key === 'age') {
    return value + 1
  }
  return value
})
console.log(JSONstring3); // {"name":"dengwenjie","age":22,"friends":{"name":"zww"},"hobby":["睡觉"]}

const JSONstring4 = JSON.stringify(obj, null, 2)
console.log(JSONstring4); // 就是空格 2 个