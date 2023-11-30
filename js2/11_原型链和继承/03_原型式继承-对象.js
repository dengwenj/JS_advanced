const obj = {
  name: "朴睦",
  age: 23
}

function createObj(o) {
  const newObj = {}

  Object.setPrototypeOf(newObj, o)
  return newObj
}

const obj1 = createObj(obj)
console.log(obj1, 'obj1')
console.log(obj1.__proto__, 'obj1')

function createObj2(o) {
  function Fn() {}
  Fn.prototype = o
  const newObj = new Fn()
  return newObj
}
const obj2 = createObj2(obj)
console.log(obj2)
console.log(obj2.__proto__)

// 以一个现有对象作为原型，创建一个新对象。
const obj3 = Object.create(obj)
console.log(obj3)
console.log(obj3.__proto__)