const str = '12ddjkwaSNJK'
console.log(str.padStart(20, '*').padEnd(25, '-')); // 对前面和后面进行填充的

const str1 = '3424329290312412522412'
console.log(str1.slice(1, 4));// 424
const lastFour = str1.slice(-4) // 从后面截取
console.log(lastFour); // 2412
console.log(lastFour.padStart(str1.length, '*')); // ******************2412