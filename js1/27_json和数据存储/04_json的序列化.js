// json 是 js 对象的字符串表示法，本质是字符串
const obj = {
  name: 'dengwj',
  age: 21,
  sex: '男',
  hobby: ['吃饭', '睡觉']
}

const arr = ['吃饭', { name: 'dengwenjie' }]

const jsonObj = JSON.stringify(obj)

const jsonArr = JSON.stringify(arr)

localStorage.setItem('obj', jsonObj)
localStorage.setItem('arr', jsonArr)


console.log(localStorage.getItem('arr'));
console.log(localStorage.getItem('obj'));

console.log(JSON.parse(localStorage.getItem('arr')));
console.log(JSON.parse(localStorage.getItem('obj')));

