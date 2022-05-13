const msg = 'hh'
// msg = msg || 'default'
msg ||= 'default' // 逻辑或赋值运算
console.log(msg); // hh

let m
m ??= 'default' // 逻辑空赋值运算
console.log(m); // default

// 还有逻辑与 &&=