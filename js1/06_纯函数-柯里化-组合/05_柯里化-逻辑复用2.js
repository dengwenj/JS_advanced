function foo(count) {
    count = count * count
    
    return function(num) {
        return count + num
    }
}

var fn = foo(10)
console.log(fn(20));
console.log(fn(30));
console.log(fn(40));
console.log(fn(50));