function Person() {
  this.name = 'dengwenjie'
  this.friends = []
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
var s2 = new Student() 

// 弊端
s1.friends.push('哈哈')
console.log(s1.friends);
console.log(s2.friends);

console.log(s1);
s1.eating()
console.log(s1.name);