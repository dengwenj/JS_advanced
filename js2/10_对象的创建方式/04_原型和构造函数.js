function Person(name) {
  this.name = name
}

Person.prototype.running = function () {
  console.log(this.name + '再跑步')
}

Person.prototype.gg = () => {
  console.log(this.name + "GG")
}

const p1 = new Person("朴睦")
const p2 = new Person("dwj")

p1.running()
p1.gg()
