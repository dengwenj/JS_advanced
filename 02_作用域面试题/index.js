function foo() {
    var a = b = 10 //先给 b 赋值 ，再 a

    // var a = 10
    // b = 10
}

foo()

console.log(a);
console.log(b);