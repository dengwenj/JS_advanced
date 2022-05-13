let foo 

// ?? 就是既不是 null 也不是 undefined 就展示前面的，是其中一个的话就展示后面的 foo ?? 'default'
console.log(foo ?? 'default'); // default

let bar = 0
console.log(bar ?? 'default'); // 0

let b = ''
const b1 = b || 'defalut' // defalut  这个逻辑或有弊端 0 或者 空字符串也是 false