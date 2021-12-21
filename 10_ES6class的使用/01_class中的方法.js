class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = '上海市'
  }

  // 实例方法 原型上的
  say() {
    console.log(this.name + '在说话～');
  }
  eating() {
    console.log(this.name + '在吃饭');
  }

   // 类的访问器方法
  get address() {
    console.log('调用了');
    return this._address
  }
  set address(value) {
    return this._address = value
  }

  // 类的静态方法（类方法）
  static rendomPerson() {
    return new Person()
  }
}

var p1 = new Person('dengwej', 21)
console.log(p1);
p1.say()
p1.eating()
console.log(p1.address);
console.log(Person.rendomPerson());