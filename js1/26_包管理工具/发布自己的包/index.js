function add(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2
}

function peorsn(name, age) {
  this.name = name
  this.age = age
}

module.exports = {
  add,
  sub,
  peorsn
}

// npm login
// npm publish