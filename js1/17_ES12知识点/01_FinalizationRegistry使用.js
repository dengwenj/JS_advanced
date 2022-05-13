const f = new FinalizationRegistry((value) => {
  console.log('被销毁了', value);
})

let obj = { name: 'dengwj' }
let info = obj

f.register(obj, 'obj')

obj = null // 这个引用是没有被销毁的，强引用