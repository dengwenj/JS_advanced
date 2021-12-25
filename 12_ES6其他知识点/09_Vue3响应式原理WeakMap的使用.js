let obj1 = {
  name: 'dengwj',
  age: 21
}

function obj1NameFn1() {
  console.log('obj1NameFn1');
}
function obj1NameFn2() {
  console.log('obj1NameFn2');
}
function obj1AgeFn1() {
  console.log('obj1AgeFn1');
}
function obj1AgeFn2() {
  console.log('obj1AgeFn2');
}

let obj2 = {
  name: 'zww',
  age: 17
}

function obj2NameFn1() {
  console.log('obj2NameFn1');
}

// 1 创建 WeakMap
const weakMap = new WeakMap() // 这里用 WeakMap 对象是弱引用

// 2 收集依赖数据
const map1 = new Map()
map1.set('name', [obj1NameFn1, obj1NameFn2])
map1.set('age', [obj1AgeFn1, obj1AgeFn1])
weakMap.set(obj1, map1)

const map2 = new Map()
map2.set('name', [obj2NameFn1])
weakMap.set(obj2, map2)

// 发生改变做的事情
obj1.name = 'xd'
const wM = weakMap.get(obj1) // map1
const m = wM.get('name')
m.forEach(item => item())





