const obj = {
  name: '朴睦'
}
console.log(Object.prototype)

/**
 * Object 原型
 * 该对象有原型属性，但是它的原型属性已经指向的是 null, 也就是已经是顶层原型了
 * 该对象上有很多默认的属性和方法
 * 原型链最顶层的原型对象就是 Object 的原型对象
 */

console.log(obj.__proto__ === Object.prototype) // true

console.log(Object.getOwnPropertyDescriptors(Object.prototype));