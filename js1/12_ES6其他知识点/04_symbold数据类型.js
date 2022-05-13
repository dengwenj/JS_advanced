// Symbol 生成独一无二的值

const sa = Symbol()
const sb = Symbol()
console.log(sa === sb); // false

const obj = { 
  name: 'dengwj',
  [sa]: 'sa',
  [sb]: 'sb'
}
console.log(obj[sa], obj[sb]); // sa , sb

console.log(Object.keys(obj)); // ['name'] // Symbol 不能这样遍历

const s1 = Symbol.for('aa')
const s2 = Symbol.for('aa')
console.log(s1 === s2); // true 用这个方法就是相同的

const s3 = Symbol.keyFor(s1)
console.log(s3); // aa

const s4 = Symbol.for(s3)
console.log(s1 === s4); // true

