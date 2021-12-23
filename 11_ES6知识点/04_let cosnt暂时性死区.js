// let const 没有作用域提升，有块级作用域
let foo = 12

if (true) {
  console.log(foo); // 暂时性死区，在定义之前不能访问

  let foo = 21
}