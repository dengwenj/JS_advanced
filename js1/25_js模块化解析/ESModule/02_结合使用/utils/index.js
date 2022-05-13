// 第一种方式
// import { sum } from './num.js'
// import { str } from './string.js'

// export {
//   sum,
//   str
// }

// 第二种
// export { sum } from './num.js'
// export { str } from './string.js'

// 第三种 全部导出
export * from './num.js'
export * from './string.js'

export default function () {
  console.log('默认导出只能有一个');
}