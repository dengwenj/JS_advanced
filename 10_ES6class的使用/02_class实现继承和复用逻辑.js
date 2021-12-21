class Person { 
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  
  eating() {
    console.log(this.name + '再吃饭');
  }
  saying() {
    console.log(this.name + '在说话');
  }

  personMethod() {
    console.log('personMethod');
    console.log('1');
    console.log('2');
    console.log('3');
  }

  static staticMethod() {
    console.log('staticMethod');
    console.log('1');
    console.log('2');
    console.log('3');
  }
}

class Student extends Person {
  constructor(name, age, sno) {
    super(name, age) // super() 调用父类的构造方法
    this.sno = sno
  }

  // 原型上的方法
  personMethod() {
    super.personMethod() // 复用逻辑代码
    console.log('4');
    console.log('5');
    console.log('6');
  }

  static staticMethod() {
    super.staticMethod() // 复用逻辑代码
    console.log('3');
    console.log('4');
    console.log('5');
    console.log('6');
  }
}

var s1 = new Student('dengwj', 21, 111)
console.log(s1);
s1.eating()
s1.saying()
s1.personMethod()
Student.staticMethod()
