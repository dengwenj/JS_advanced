function foo(m, n, x) {
  console.log(m, n, x); // [ 'deng', 'wen', 'jie' ], dengwj, 21
}

const name = 'dengwj'
const age = 21
foo`deng${name}wen${age}jie`
// ${里面写到是 js 表达式}