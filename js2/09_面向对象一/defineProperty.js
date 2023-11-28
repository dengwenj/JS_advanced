/**
 * 如果我们想要对一个属性进行比较精准的操作控制，那么我们就可以使用属性描述符
 * 通过属性描述符可以精准的添加或修改对象的属性
 * 属性描述符需要使用 Object.defineProperty 来对属性进行添加或者修改
 */

const obj = {
  name: "朴睦",
  age: 23
}

// 属性描述符
Object.defineProperty(obj, "address", {
  // 是否可以删除属性，是否可以重新定义属性描述符
  configurable: false,
  // 是否可以枚举
  enumerable: false,
  value: '上海市',
  // 是否可以修改
  writable: false
})

console.log(obj.address) // 上海市
delete obj.address
console.log(obj.address) // configurable 设置了 false 所以删不掉

console.log(Object.keys(obj)); // address 这个属性也不可以被枚举
obj.address = "北京市"
console.log(obj.address) // writable 为 false, 上海市

console.log("---------------------------------------");

const o = {
  h: '你好',
  w: "世界",
  _code: "const c = hw"
}

// 存取属性描述符
// 如果我们希望截获某一个属性做一些操作，可以用 存取属性描述符 get set
Object.defineProperty(o, "code", {
  // 不可以被修改
  configurable: false,
  // 可以被枚举
  enumerable: true,
  get() {
    console.log("进来了吗");
    return this._code
  },
  set(val) {
    console.log("修改了");
    this._code = val
  }
})

console.log(o.code);
o.code = "let a = 1"
console.log(o.code);
