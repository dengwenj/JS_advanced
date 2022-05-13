const obj = {
  name: 'dengwenjie',
  age: 21,
}
const entries = Object.entries(obj)
console.log(entries); // [ [ 'name', 'dengwenjie' ], [ 'age', 21 ] ]

console.log(Object.fromEntries(entries)); // { name: 'dengwenjie', age: 21 } 

// Object.fromEntries 应用
const api = 'name=dengwenjie&age=21'
const params = new URLSearchParams(api)
console.log(params); // URLSearchParams { 'name' => 'dengwenjie', 'age' => '21' }
for (const item of params) {
  console.log(item);
}
const f = Object.fromEntries(params)
console.log(f); // { name: 'dengwenjie', age: '21' }