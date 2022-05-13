function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}
Person.prototype.eating= function() {
  console.log('吃东西');
}

function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends)
  this.sno = sno
}

Student.prototype = new Person()
Student.prototype.consturctor = Student

var s1 = new Student('dengwenjie', 21, ['lilei'], 111)
var s2 = new Student('zhengweiwei', 17, ['xiaohong'], 109)

s1.friends.push('xiaowang')

console.log(s1);
console.log(s2);
s1.eating()

// 但是这种有弊端
// 1 Person 函数至少被调用了两次
// 2 Student 的原型对象上会多出一些属性，但是这些属性是没有存在的必要