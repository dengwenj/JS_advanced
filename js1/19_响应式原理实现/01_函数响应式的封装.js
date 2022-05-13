const arr = []

function foo(fn) {
  arr.push(fn)
}

const obj = {
  name: 'dengwenjie',
  age: 21
}

foo(() => {
  const newName = obj.name
  console.log(newName);
  console.log('hello world');
})

foo(() => {
  console.log(obj.name);
})

obj.name = 'dwj'
arr.forEach(fn => fn())