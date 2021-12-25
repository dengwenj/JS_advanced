const f = new FinalizationRegistry((value) => {
  console.log('被销毁了', value);
})

let obj = { name: 'dengwenjie' }
let info = new WeakRef(obj) // 弱引用会被销毁

f.register(obj, 'obj')

console.log(info.deref().name); // {name: 'dengwenjie'}

obj = null