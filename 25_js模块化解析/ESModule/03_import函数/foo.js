const name = 'dwj'
const age = 21

export {
  name,
  age
}

// meta 属性本身也是一个对象： { url: '当前模块所在的路径' }
console.log(import.meta.url);