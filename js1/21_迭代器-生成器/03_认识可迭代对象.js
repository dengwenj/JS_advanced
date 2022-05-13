// 要求实现另一个方法 [Symbol.iterator]

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
   
const iterator = iterableObj[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const iterator1 = iterableObj[Symbol.iterator]()
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

// for of 就是要返回一个可迭代对象， 内部直接在调 next 取 value 的值，当 done 为 true 的时候就不遍历了
for(const item of iterableObj) {
  console.log(item);
}
