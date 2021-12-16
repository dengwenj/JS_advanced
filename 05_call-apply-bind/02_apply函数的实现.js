Function.prototype.wjapply = function (thisArg, arrArgs = []) {
    var fn = this
    
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    thisArg.fn = fn
    var res = thisArg.fn(...arrArgs)
    delete thisArg.fn

    return res
}

function foo(a, b) {
    console.log(this);
    return a + b    
}

var res1 = foo.wjapply(123, [10, 20])
console.log(res1);

function sum() {
    
}