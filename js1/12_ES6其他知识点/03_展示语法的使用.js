const names = ['aa', 'bb', 'cc']
const name = 'dengwj'

const n = [...names, ...name]
console.log(n);

function foo(a, b, c) {
  console.log(a, b, c);
}
foo(...names)

const obj = { name: 'dengwenjie', age: 21 }

const obj1 = { ...obj, age: 18 }
console.log(obj1);


// 展开运算符是浅拷贝，复杂数据类型指向的是同一个地址值
const obj2 = {
  name: 'zww',
  friend: {
    name: 'dengwj'
  }
}

const obj3 = { ...obj2, name: 'z' }
obj3.friend.name = 'dwj'
console.log(obj3); // { name: 'z', friend: { name: 'dwj' } }
console.log(obj2); // { name: 'zww', friend: { name: 'dwj' } }
