function inheritPrototype(subType, superType) {
  // 1
  subType.prototype = Object.create(superType.prototype)
  Object.defineProperty(Sub.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: subType
  })
}

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.running = function () {
  console.log("我在跑步")
}

Person.prototype.saying = function () {
  console.log("say")
}

function Sub(name, age, ww) {
  // 2
  Person.call(this, name, age)
  this.ww = ww
}

inheritPrototype(Sub, Person)

Sub.prototype.pumu = function () {
  console.log("我尽快")
}

const obj = new Sub("朴睦", 23, "你好")
console.log(obj)
obj.running()
obj.saying()
obj.pumu()
