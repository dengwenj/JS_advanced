const nums = [1, 2, [3, 4], [5, [6, 7]]]
console.log(nums.flat(2)); // [1, 2, 3, 4, 5, 6, 7] 降维的

// 先对数组进行加工在降维
const nums1 = ['hello world', 'nihao dengwenjie', 'xd f2e']
const arr = nums1.flatMap((item) => {
  return item.split(' ') 
})
console.log(arr); // [ 'hello', 'world', 'nihao', 'dengwenjie', 'xd', 'f2e' ]