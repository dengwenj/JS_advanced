function Person(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex

  this.running = function () {
    console.log(`${this.name}在🏃🏻‍♀️`);
  }
}

const p = new Person("朴睦", 23, "男") 
console.log(p.age);
console.log(p.sex);
console.log(p.name);
p.running()
/**
 * new 操作符做的事情
 * 1、在内存中会创建一个新的对象(空对象)
 * 2、这个对象内部的prototype 属性会被赋值为该构造函数的 prototype 属性,也就是说对象的隐式原型__proto__ 会指向构造函数的显式原型prototype 
 * 3、构造函数内部的 this 会指向创建出来的新对象
 * 4、执行函数的内部代码
 * 5、如果构造函数没有返回非空对象，则返回创建出来的新对象
 */