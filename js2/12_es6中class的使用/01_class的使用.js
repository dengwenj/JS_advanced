class Person {
  // 类的构造方法
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // 实例方法
  say() {
    console.log("我是 say");
  }

  // 类的访问器方法
  get age1() {
    console.log("访问 age");
    return this.age
  }
  set age1(newAge) {
    console.log("拦截 age, 对 age 做一些操作");
    this.age = newAge
  }

  // 类的静态方法
  static createPerson(name) {
    const age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }
}

const p1 = new Person('朴睦', 23)
console.log(p1);
p1.age1 = 24
console.log(p1.age1);
const cp = Person.createPerson("苏东坡")
console.log(cp);
