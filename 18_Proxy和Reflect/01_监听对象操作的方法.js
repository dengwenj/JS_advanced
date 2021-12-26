const obj = {
  name: 'dengwenjie',
  age: 21
}

const proxyObj = new Proxy(obj, {
  get(target, key) { // target 就相当于是 obj
    console.log(`get被调用了${key}`, target);
    return target[key]
  },

  set(target, key, value) {
    console.log(`set被调用了${key}`, target);
    target[key] = value
  }
})

console.log(proxyObj.name)
console.log(proxyObj.age)

proxyObj.name = 'xd'
console.log(proxyObj.name)