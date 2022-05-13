const obj = {
  name: 'dengwj',
  age: 21,
  friend: {
    name: '韩梅梅'
  }
}

// 判断是不是一个对象
function isObject(value) {
  const valueType = typeof value
  if (valueType === 'object' || valueType === 'function') return valueType
}

function deepClone(value) {
  if (!isObject(value)) {
    return value
  }
  const newObj = {}
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

