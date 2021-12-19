function Person() {
  this.name = 'dengwenjie'
}
Person.prototype.eating = function() {
  console.log(this.name + '在吃东西');
}

// 子类
function Student() {
  this.sno = 11
}

// 通过原型链的继承
Student.prototype = new Person()

Student.prototype.say = function() {
  console.log('在说话');
}

var s1 = new Student()
console.log(s1);
s1.eating()
console.log(s1.name);