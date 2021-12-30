// 内置的可迭代对象
// Array String Map Set argument 等等

const a = [1, 2, 3]
// iterableObj 是一个可迭代对象
const iterableObj = {
  names: ['dwj', 'zww', 'lilei'],
  [Symbol.iterator]: function() {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

// for of 传入一个可迭代对象
for (const iterator of iterableObj) {
  console.log(iterator);
}

// 展开运算符
const arr = [...a, ...iterableObj]
console.log(arr);

// 对象的展开运算符不是用的可迭代对象

const set = new Set(iterableObj)
console.log(set);
console.log(Array.from(set)); // [ 'dwj', 'zww', 'lilei' ]

// 解构
const [q, w, e ] = iterableObj
console.log(q, w, e);

// 对象的解构也不是用的可迭代对象
