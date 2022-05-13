function ceateObject(o) {
  function Fn() {}
  Fn.prototype = o
  return new Fn()
}

function inheritPrototype(SubType, SuperType) {
  // SubType.prototype = Object.create(SuperType.prototype)
  SubType.prototype = ceateObject(SuperType.prototype)
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}
Person.prototype.eating = function() {
  console.log('在吃饭～');
}
Person.prototype.say = function() {
  console.log('在说话');
}

function Student(name, age, friends) {
  Person.call(this, name, age, friends)
}

inheritPrototype(Student, Person)

Student.prototype.studing = function() {
  console.log('在学习');
}

var s1 = new Student('dengwenjie', 21, ['lilei'])
console.log(s1);
s1.eating()
s1.say()
s1.studing()