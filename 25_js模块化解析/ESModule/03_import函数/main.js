
//  import 函数 返回的是 promise 对象
import('./foo.js').then((res) => {
  console.log(res);
})

console.log('后面的代码');

