class Person {
  say() {
    console.log('say');
  }
}

function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log('running');
    }
  }
  return NewClass
}

function mixinEater(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log('eating');
    }
  }
}

class Student extends Person {

}

var NewStudent = mixinEater(mixinRunner(Student))
var ns = new NewStudent()

ns.running()