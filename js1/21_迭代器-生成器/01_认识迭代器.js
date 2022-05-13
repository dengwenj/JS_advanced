 // 可以帮我们对某一个数据结构进行遍历的对象

// 创建一个迭代器
const iterator = {
  next() {
    return { done: false, value: 'dengwj' }
  }
}

const names = ['dwj', 'zww', 'lilei']

// 创建迭代器对象访问数组
let index = 0  
const namesIterator = {
  next() {
    if (index <= names.length - 1) {
      return { done: false, value: names[index++] } // index++ 先执行后改变
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())