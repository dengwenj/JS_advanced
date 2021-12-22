var name = 'dengwj'
var age = 21

var obj = {
  // 属性名的简写，key 和 value 相同可以简写
  name,
  age,
  // 方法的简写
  // say: function() {
  //   console.log('say');
  // },
  say() { // 是上面这种的简写，不是下面这总的简写,不是箭头函数的简写
    console.log('say');
  },
  // say: () => {}

  // 计算属性名
  [name + age]: 'hahaha'
}
console.log(obj);