function foo() {
  // 占用 4 M
  var arr = new Array(1024 * 1024).fill(1)
  return function () {
    console.log(arr)
  }
}

var arrFn = []
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrFn.push(foo())
  }, i * 100);
}

setTimeout(() => {
  for (var i = 0; i < 50; i++) {
    arrFn.pop()
  }
}, 10000);