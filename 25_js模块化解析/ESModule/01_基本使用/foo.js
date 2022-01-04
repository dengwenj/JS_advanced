// 第一种方式：export 声明语句
// export const name = 'dengwj'
// export const age = 21

// export function foo() {
    
// }

// export class Person {
     
// }

// 第二种方式 统一导出
const name = 'dengwj'
const age = 21
function foo() {}
class Person {}

// 这不是对象，这是一种语法，不能写键值对，统一导出
export {
  name,
  age,
  foo,
  Person
}

// 第三种方式，其别名 as
// export {
//   name as name1,
//   age as age1,
//   foo as foo1,
//   Person as Person1
// }