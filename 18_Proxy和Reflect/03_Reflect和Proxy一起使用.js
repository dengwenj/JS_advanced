const obj = {
   name: 'dengwenjie',
   age: 21
 }

 // 在 捕获器内部不用 target[key] 这样还是在修改原来的，用的 Reflect
const objProxy = new Proxy(obj, {
  get(target, key) {
    return Reflect.get(target, key) 
  },

  set(target, key, value) {
    const resBool = Reflect.set(target, key, value) // 看这个属性设置修改成功还是失败
    if (resBool) {
      
    }
  }
 })

 objProxy.name = 'xd'
 console.log(objProxy.name);