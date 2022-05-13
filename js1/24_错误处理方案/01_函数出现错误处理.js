function foo(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw '参数必须传入数字类型'
  }

  return num1 + num2
}

// console.log(foo(1, 2));
console.log(foo(true, 1));

console.log('throw 了后面的代码不会执行了，终止执行');