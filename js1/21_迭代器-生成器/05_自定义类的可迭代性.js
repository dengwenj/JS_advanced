class classRoom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.students[index++] }
        } else {
          return { done: true, value: undefined }
        } 
      }
    }
  }
}

const room = new classRoom('1顶', 'gg', ['dwj', 'zww'])

for (const item of room) {
  console.log(item);
}