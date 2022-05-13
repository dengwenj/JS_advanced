const obj = {
  _name: 'dwj',
  get name() {
    return this._name
  },
  set name(value) {
    this._name = value
  }
}

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    console.log(`get被调用了${key}`);
    return Reflect.get(target, key, receiver) //  第3个参数可以改变 obj get 里面的 this
  },
  set(target, key, value, receiver) {
    console.log(`set被调用了${key}`);
    Reflect.set(target, key, value, receiver)
  }
})

console.log(objProxy.name);

objProxy.name = 'xd'

console.log(obj.name);