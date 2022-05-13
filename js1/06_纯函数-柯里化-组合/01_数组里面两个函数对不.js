var arr = [1, 2, 3, 4, 5]

// 原数组没有变  纯函数
var arr1 = arr.slice(0,3)
console.log(arr);
console.log(arr1);

// 原数组会变  不是纯函数
var arr2 = arr.splice(0,3)
console.log(arr); // [4, 5]
console.log(arr2); // [1, 2, 3]