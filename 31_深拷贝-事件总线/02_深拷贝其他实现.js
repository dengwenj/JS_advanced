const obj = {
  name: 'dengwj',
  age: 21,
  friend: {
    name: '韩梅梅'
  },
  hobbies: ['睡觉', '汤头'],
  foo: function () {
    console.log('foo');
  }
}

// 判断是不是一个对象
function isObject(value) {
  const valueType = typeof value
  if (valueType === 'object' || valueType === 'function') return true
}


function deepClone(value) {
  // 判断是不是一个函数，是函数直接 return
  if (typeof value === 'function') {
    return value
  }

  // 判断是不是对象
  if (!isObject(value)) {
    return value
  }

  const newObj = Array.isArray(value) ? [] : {}
  for(const key in value) {
    newObj[key] = deepClone(value[key])
  }

  return newObj
}

const obj2 = deepClone(obj)

obj.friend.name = 'zww'
console.log(obj2 === obj)
console.log(obj2);
console.log(obj);

