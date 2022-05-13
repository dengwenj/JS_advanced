function Person() {
  
}

var p1 = new Person()
var p2 = new Person()

console.log(p1.__proto__ === Person.prototype); // true
console.log(p2.__proto__ === Person.prototype); // true