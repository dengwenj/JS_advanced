function* foo(num) {
  console.log('开始执行函数');

  const value1 = 1 * num
  console.log(value1);
  try {
    var count1 = yield value1 // count1 就是第二次调用 next 传递的值
  } catch (error) {
    console.log(error);
  }

  // try catch 也有块级作用域

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
const g = generator.next()
if (g.value !== 100) {
  generator.throw('msg')
}