/* 
  在执行任何的宏任务之前（不是队列，是一个宏任务），都需要先保证微任务队列已经被清空
*/

setTimeout(() => {
  console.log('setTimeout');
}, 1000);

Promise.resolve().then(() => { 
  console.log('resolve'); 
})

queueMicrotask(() => {
  console.log('queueMicrotask');
})