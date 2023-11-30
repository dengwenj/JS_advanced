function Foo() {
  
}

console.log(Foo.prototype === Foo.__proto__) // false
console.log(Function.prototype === Function.__proto__) // true
console.log(Object.__proto__ === Function.prototype); // true

function Function(params) {
  
}

function Object() {
  
}