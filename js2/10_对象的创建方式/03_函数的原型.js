function Person() {
  
}
const p1 = new Person()
const p2 = new Person()

console.log(p1.__proto__ === Person.prototype) // true
console.log(p1.__proto__ === Person.prototype) // true
console.log(p2.__proto__ === p1.__proto__) // true 

/**
 * 函数也是一个对象，也有__proto__
 * 函数它因为是一个函数，所以它还会多出来一个显式原型属性: prototype
 * 对象的隐式原型 __proto__ 会指向构造函数的显式原型 prototype , 会创建一个对象 {constructor: Person}
 */

// 函数的原型属性
console.log(Person.prototype.constructor); // 会指向这个构造函数
