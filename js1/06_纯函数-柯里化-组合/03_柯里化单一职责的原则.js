// 不使用柯里化
// function sum(x, y, z) {
//     return x + y + z
// }
// var res = sum(10, 20, 30)
// console.log(res);

// 使用柯里化   单一职责原则，每个函数只做一件事情
function sum1(x) {
    x = x + 2
    return function(y) {
        y = y * 2
        return function(z) {
            z = z * z
            return x + y + z
        }
    }
}
var res1 = sum1(10)(20)(30)
console.log(res1);