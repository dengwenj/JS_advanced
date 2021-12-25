const obj = {
  name: 'dengwj',
  age: 21
}

// 可以获取一个数组，数组中会存放可枚举属性的键值对数组
console.log(Object.entries(obj)); // [ [ 'name', 'dengwj' ], [ 'age', 21 ] ]
const item = Object.entries(obj).find((item) => {
  return item[0] === 'name'
})
console.log(item);

console.log(Object.entries(['abc', 'cba', 'nab'])); // [ [ '0', 'abc' ], [ '1', 'cba' ], [ '2', 'nab' ] ]
console.log(Object.entries('abc')); // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]