function Person(name, age) {
  this.name = name
  this.age = age
}

function Student() {
  
}

// 执行 Person 这个构造函数，创建出来的对象是 Student 的对象
const student = Reflect.construct(Person, ['dengwj', 21], Student)
console.log(student); // Student { name: 'dengwj', age: 21 }