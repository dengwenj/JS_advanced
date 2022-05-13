// 生成器替换迭代器
function* createArrIterator(arr) {
  yield* arr  // 后面要写可迭代对象，可迭代对象可以把里面的元素一个一个迭代出来

  // for (const item of arr) {
  //   yield item
  // }

  // let index = 0
  // yield arr[index++]
  // yield arr[index++]
  // yield arr[index++]

  // let index = 0
  // return {
  //   next() {
  //     if (index < arr.length) {
  //       return { done: false, value: arr[index++] }
  //     } else {
  //       return { done: true, value: undefined }
  //     }
  //   }
  // }
}

const arr = ['dwj', 'zww', 'lilei']

// const iterator = createArrIterator(arr)
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

class classRoom {
  constructor(students) {
    this.students = students
  }

  *[Symbol.iterator]() {
    yield* this.students

    // let index = 0
    // return {
    //   next() {
    //     if (index < this.students.length) {
    //       return { done: false, value: this.students[index++] }
    //     } else {
    //       return { done: true, value: undefined }
    //     }
    //   }
    // }
  }
}

const r = new classRoom(arr)

const generator = r[Symbol.iterator]()
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());