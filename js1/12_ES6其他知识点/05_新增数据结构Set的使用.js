// 创建 set 对象
const set = new Set()
set.add(10)
set.add(20)
set.add(30)
set.add(30)

// set.add({})
// set.add({})

const obj = {}
set.add(obj)
set.add(obj)
console.log(set);

// 数组去重
const arr = [10, 20, 33, 3, 20, 10]
const arrSet = new Set(arr)
console.log(arrSet);
const arr1 = [...arrSet]
console.log(arr1);

// 数组去重
const newArr = []
for (const item of arr) {
  if (newArr.indexOf(item) === -1) {
    newArr.push(item)
  }
}
console.log(newArr);

// set 的属性和方法
console.log(arrSet.size); // 4
console.log(arrSet.add(4)); // Set(5) { 10, 20, 33, 3, 4 }
console.log(arrSet.delete(4)); // true
console.log(arrSet.has(4)); // false
// console.log(arrSet.clear());

arrSet.forEach((item) => {
  console.log(item);
})

for (const item of arrSet) {
  console.log(item);
}




