// 函数的默认参数
// function foo(name = 'dengwenjie') {
//   console.log(name);
// }
// foo()

function foo({ name, age } = { name: 'dengwenjie', age: 21 }) {
  console.log(name, age);
}
foo()

// 函数的剩余参数
function fn(m, n, ...args) { // 写在最后
  console.log(m, n); // 1 2
  console.log(args); // [ 3, 4, 5 ]
}
fn(1, 2, 3, 4, 5)
