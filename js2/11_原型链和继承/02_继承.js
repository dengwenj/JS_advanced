function Person(name, friends) {
  this.name = name
  this.friends = friends
}

Person.prototype.running = function () {
  console.log(this.name + "跑步")
}

function Son(name, friends) {
  Person.call(this, name, friends)
  this.hh = "hh"
}

Son.prototype = new Person()

Son.prototype.say = function () {
  console.log("Sayqkk")
}

const s1 = new Son("朴睦", ["苏轼", "王阳明"])
const s2 = new Son("韩梅梅", ["kk"])

console.log(s1)
console.log(s2)

s1.say()
s1.running()

/**
 * 用原型链继承(弊端很多，不用) Son.prototype = new Person()
 * 
 * 借用构造函数继承 Person.call(this, name, f)
 */

