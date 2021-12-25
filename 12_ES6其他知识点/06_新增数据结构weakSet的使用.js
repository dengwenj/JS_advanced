// weakSet 和 Set 的区别
// 1 weakSet 只能存放 对象类型
// 2 weakSet 对元素的引用是弱引用

// const s = new Set([1])
// console.log(s); // 可以是基本数据类型

const obj = {
  name: 'dengwj'
}
const s = new Set()
console.log(s); // 强引用

const s1 = new WeakSet()
s1.add(obj) // 对元素的引用是弱引用
console.log(s1);