// 区别
// 1 WeakMap 的 key 只能使用对象，不接受其他的类型作为 key
// 2 WeakMap 的 key 对对象的引用是弱引用
const map = new Map()
map.set('a', '111')
console.log(map);

const map2 = new WeakMap() 
// map2.set('b', 'bbbbb') // key 必须是对象
const obj = { name: 'dengwenjie' }
map2.set(obj, 'dwj')
console.log(map2);

// 方法
console.log(map2.get(obj)); // dwj
map2.set({ name: 'dz' }, 'ssss')
console.log(map2);
console.log(map2.has(obj)); // true
map2.delete(obj)

 // 不能遍历