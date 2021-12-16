function foo(num1, num2) {
    // arguments 转为数组
    // 1
    var newArr1 = Array.prototype.slice.call(arguments)
    console.log(newArr1);
    // 2 
    var newArr2 = Array.from(arguments)
    console.log(newArr2);
    // 3
    var newArr3 = [...arguments] // ... 运算符 也是做个遍历
    console.log(newArr3);

}

foo(10, 20, 30, 40)

// 手写 slice 方法
Array.prototype.wjslice = function (start, end) {
    var arr = this
    start = start || 0
    end = end || arr.length

    var newArray = []
    for (var i = start; i < end; i++) {
        newArray.push(arr[i])
    }
    
    return newArray
}

var res = Array.prototype.wjslice.call([10, 20, 30], 1, 3)
console.log(res);