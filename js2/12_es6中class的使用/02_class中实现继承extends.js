class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log("chichichi")
  }

  say() {
    console.log("父类的saysaysay");
  }

  static pSM() {
    console.log("我是父类静态方法");
  }
}

class Student extends Person {
  // 在子类的构造函数中使用 this 或者返回默认对象之前，必须先通过 super 调用父类的构造函数
  // super 的使用位置有三个: 子类的构造函数、实例方法、静态方法
  constructor(name, age, hh) {
    super(name, age)
    this.hh = hh
  }

  say() {
    // super调父类实例方法
    super.say()
    console.log("我重写了say");
  }

  sT() {
    console.log("我是ST");
  }

  static pSM() {
    // super调父类静态方法
    super.pSM()
    console.log("我是子的psm");
  }
}

const s1 = new Student('朴睦', 23, '哈哈')
console.log(s1)
s1.eating()
s1.sT()
s1.say()
Student.pSM()