var obj = {
  name: 'dengwj',
  age: 21,
  sex: '男'
}

var { name, age, sex } = obj
console.log(name, age, sex);

var { age: newAge } = obj 
console.log(newAge);

// 默认值
var { address = '上海市' } = obj
console.log(address);

function fn({ name, age, sex }) {
  console.log(name, age, sex);
}
fn(obj)