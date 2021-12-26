const obj = {
  name: 'dengwenjie',
  age: 21
}

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get(target, key) {
    return target[key]
  },

  // 设置时的捕获器
  set(target, key, value) {
    target[key] = value
  },

  // 监听 in 的捕获器
  has(target, key) {
    return key in target
  },

  // 删除的捕获器
  deleteProperty(target, key) {
    delete target[key]
  }
})

console.log(objProxy.name);

objProxy.name = 'xd'

console.log('name' in objProxy);

delete objProxy.name
console.log(objProxy.name); // 删除了 是 undefined

function foo() {
  console.log(this);
}

const fooProxy = new Proxy(foo, {
  apply(target, thisArg, params) {
    console.log(target, thisArg, params);
    target.apply(thisArg, params)
  },
  construct(target, arr) {
    return new target(...arr)
  }
})
fooProxy.apply({ name: 'dex' }, ['aa', 'bb'])

new fooProxy('12', 13)