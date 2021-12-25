// Map 数据结构用于存储映射关系
// Map 就是允许我们对象类型来作为 key 的
const obj1 = { name: 'dengwj' }
const obj2 = { name: 'zww' }

const map1 = new Map()
map1.set(obj1, 'dwj')
map1.set(obj2, 'xd')
console.log(map1); // Map(2) { { name: 'dengwj' } => 'dwj', { name: 'zww' } => 'xd' }

const map2 = new Map([[obj1, 'hh'], [obj2, 'dd'], ['dwj', 1]])
console.log(map2);

// 属性和方法
console.log(map2.size);

map2.set({ name: 'xd' }, 'xdddd')
// console.log(map2);
map2.delete(obj1)
console.log(map2);
console.log(map2.has(obj2)); // true

// map2.clear()
// console.log(map2);

// Map 遍历
map2.forEach((item, key) => {
  console.log(item)
  console.log(key);
})

// for (const item of map2) {
//   console.log(item); // [ { name: 'zww' }, 'dd' ]
// }
for (const [key, value] of map2) {
  console.log(key, value);
}