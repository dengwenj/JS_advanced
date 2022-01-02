function* foo() {
  console.log('开始执行函数');

  const value1 = 1
  console.log(value1);
  yield value1 * 100 // 后面写的表达式

  const value2 = 2
  console.log(value2);
  yield value2 * 100 

  const value3 = 3
  console.log(value3);
  yield value3 * 100 

  console.log('函数执行完毕');
  return 123
}

const generator = foo()

console.log(generator.next()); // { value: 100, done: false }
console.log(generator.next()); // { value: 200, done: false }
console.log(generator.next()); // { value: 300, done: false }
console.log(generator.next()); // { value: 123, done: true }