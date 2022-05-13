setTimeout(() => {
  console.log('setTimeout');
  
  new Promise((resolve, reject) => {
    resolve()
  }).then(() => {
    new Promise((resolve, reject) => {
      resolve()
    }).then(() => {
      console.log('then4');
    })
    console.log('then2');
  })
});

new Promise((resolve, reject) => {
  console.log('promise1');
  resolve()
}).then(() => {
  console.log('then1');
})

setTimeout(() => {
  console.log('setTimeout2');
});

console.log(2);

queueMicrotask(() => {
  console.log('queueMicrotask1');
})

new Promise((resolve) => {
  resolve(0)
}).then(() => {
  console.log('then3');
})

// promise1
// 2
// then1
// queueMicrotask1
// then3
// setTimeout
// then2
// then4
// setTimeout2