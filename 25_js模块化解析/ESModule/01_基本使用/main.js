// 导入方式1 ：普通的方式
// import { name, age } from './foo.js'
// import { name1, age1, foo1, Person1 } from './foo.js'

// 导入方式2: 其别名
// import { name as name1,  age as age1, foo as foo1, Person as Person1} from './foo.js'

// 导入方式3: 将导出的所有内容放到一个标识符中
import * as foo from './foo.js'

// console.log(name);
// console.log(age);

// console.log(name1);
// console.log(age1);
// console.log(foo1);
// console.log(Person1);

console.log(foo.name);
console.log(foo.age);