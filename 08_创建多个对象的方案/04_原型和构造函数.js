function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.say = function () {
  console.log(this.name + '在说话');
}

var p1 = new Person('dwj', 21)
var p2 = new Person('zww', 17)

p1.say()
p2.say()