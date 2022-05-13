/* 
  1 普通的值或者对象 pending -》 fulfilled
  2 传入一个 Promise ，那么当前的 Promise 的状态会由传入的 Promise 来决定，相当于状态进行了移交
  3 传入一个对象，并且这个对象有实现 then 方法，那么也会执行该 then 方法，并且由该then方法决定后续状态
*/

const p = new Promise((resolve, reject) => {
  // resolve(111) 
  // resolve({ name: 'dengwenjie' })
  // resolve(new Promise((resovle, reject) => {
  //   resolve('promise')
  // }))
  resolve({
    name: 'xd',
    then() {
      console.log(this.name);
    }
  })
})

p.then((res) => {
  console.log(res);
},(err) => {
  console.log(err);
})