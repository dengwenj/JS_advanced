const obj = { name: "朴睦" }
console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__)

/**
 * JS 当中每个对象都有一个特殊的内置属性[[prototype]],这个特殊的对象可以指向另外一个对象，这个属性可以称之为对象的原型(隐式原型)
 * 
 * 原型的作用:
 * 1、在当前对象中去查找对应的属性，如果找到就直接使用
 * 2、如果没有找到，那么会沿着他打原型去查找[[prototype]]
 */