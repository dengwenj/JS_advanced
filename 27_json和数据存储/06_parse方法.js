const JSONstr = '{"name":"dengwenjie","age":22,"friends":{"name":"zww"},"hobby":["睡觉"]}'

const obj1 = JSON.parse(JSONstr)
console.log(obj1); // {name: 'dengwenjie', age: 22, friends: {…}, hobby: Array(1)}

const obj2 = JSON.parse(JSONstr, (key, value) => {
  if (key === 'age') {
    return value - 1
  }
  return value
})
console.log(obj2); // {name: 'dengwenjie', age: 21, friends: {…}, hobby: Array(1)}