function Person() {
  
}

// 原来指向的原型对象就被回收了，没有引用指向它了

Person.prototype = {
  name: 'dengwj',
  age: 21,
  sex: '男'
}

Object.defineProperty(Person.prototype, 'consturctor', {
  enumerable: false, // 不可枚举
  configurable: true, // 控制属性是否可以被删除
  writable: true, // 控制属性是否可以被修改
  value: Person // 设置的值
})

var p1 = new Person()
console.log(Person.prototype);
console.log(p1.name, p1.age, p1.sex);
