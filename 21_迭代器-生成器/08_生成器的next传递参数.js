function* foo(num) {
  console.log('开始执行函数');

  const value1 = 1 * num
  console.log(value1);
  const count1 = yield value1 // count1 就是第二次调用 next 传递的值

  const value2 = 2 * count1
  console.log(value2);
  const count2 = yield value2

  const value3 = 3 * count2
  console.log(value3);
  const count3 = yield value3 * 100 

  console.log('函数执行完毕', count3);
  return count3
}

const generator = foo(5)
console.log(generator.next());
console.log(generator.next(10));
console.log(generator.next(20));
console.log(generator.next(30));