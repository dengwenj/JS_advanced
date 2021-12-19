function Person(name, age, address) {
  this.name = name
  this.age = age
  this.address = address
}

var p1 = new Person('dengwj', 21, '上海市')
var p2 = new Person('zhengweiwei', 17, '重庆市')

console.log(p1);
console.log(p2);

// new 操作符调用的作用
/* 
  1 在内存中创建一个新的对象
  2 这个对象内部的 __proto__ 属性会被赋值为该构造函数的 prototype 属性
  3 构造函数内部的 this, 会指向创建出来的新对象
  4 执行函数的内部代码（函数体代码）
  5 如果构造函数没有返回非空对象，则返回创建出来的新对象
*/