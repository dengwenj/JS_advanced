/**
 * 严格模式是一种具有限制性的 JS 模式，从而使代码隐式的脱离了“懒散(sloppy)模式”
 * 支持严格模式的浏览器在检测到代码中有严格模式时，会以更加严格的方式对代码进行检测和执行
 * 
 * 严格模式通过抛出错误来消除一些原有的静默(silent)错误
 * 严格模式让 JS 引擎在执行代码时可以进行更多的优化(不需要对一些特殊的语法进行处理)
 * 严格模式禁用了在 ECMAScript 未来版本中可能会定义的一些语法
 */
"use strict"

// 严格模式会报错
// msg = "你好"
// console.log(msg)
// 会产生静默错误（严格模式下会报错）
// true.foo = "hello"
// 2、严格模式下 默认调用函数里 this 的指向是 undefined
// with 语句不能使用
