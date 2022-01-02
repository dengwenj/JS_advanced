function* foo() {
  console.log('开始执行函数');

  const value1 = 1
  console.log(value1);
  yield

  const value2 = 2
  console.log(value2);
  yield

  const value3 = 3
  console.log(value3);
  yield

  console.log('函数执行完毕');
}

const generator = foo()

generator.next()
generator.next()
generator.next()
generator.next()