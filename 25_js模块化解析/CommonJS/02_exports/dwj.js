const name = 'dengwj'
const age = 21

function sum(num1, num2) {
  return num1 + num2
}

// 源码
// module.exports = {}
// exports = module.exports

// 第二种导出方式
exports.name = name
exports.age = age
exports.sum = sum

// 他们指向的是同一个引用
// 最终都是导出的 module.exports