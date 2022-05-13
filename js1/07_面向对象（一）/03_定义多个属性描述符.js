var obj = {
  _age: 19, // 私有属性
  get age(){
    return this._age
  },
  set age(value){
   this._age = value
  }
}

Object.defineProperties(obj, {
  name: {
    enumerable: true,
    configurable: true
  },

  // age: {
  //   enumerable: true,
  //   configurable: true,
  //   get() {
  //     return this._age
  //   },
  //   set(value){
  //     this._age = value
  //   }
  // }
})
console.log(obj);
console.log(obj.age);
obj.age = 21
console.log(obj.age);