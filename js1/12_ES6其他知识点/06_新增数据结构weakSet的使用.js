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


// weakSet 的应用场景
const personSet = new WeakSet()
class Person {
  constructor() {
    personSet.add(this)
  }
  running() {
    if (!personSet.has(this)) {
      throw new Error('不能通过非构造方法创建出来的对象调用 running 方法')
    }
    console.log('在跑步', this);
  }
}

const p = new Person()
p.running.call({ name: 'dengwj' })
