var obj = {
  name: 'dengwenjie',
  age: 21
}

// 原型式继承函数
function createObject(o) {
  var newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj 
}
var res = createObject(obj)
// console.log(res);
// console.log(res.__proto__);

function createObject2(o) {
  function Fn() {}
  Fn.prototype = o
  var f1 = new Fn()
  return f1
}
var res1 = createObject2(obj)
// console.log(res1.__proto__);

var obj2 = Object.create(obj)
console.log(obj2);
console.log(obj2.__proto__);