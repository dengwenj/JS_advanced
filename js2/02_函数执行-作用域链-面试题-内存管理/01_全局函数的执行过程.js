var name = '朴睦'

// foo 可以在前面执行, 因为在编译解析的时候会创建 foo 存储函数对象，{ foo: 0x123 } foo 指向这个函数内存
// 在执行的时候就有 foo 就可以调用
// foo()
// function foo() {
//   console.log("我是函数");
// }

var age = 23
function bar() {
  async function ww() {
    var sex = "男"
    console.log(sex)

    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("await")
      }, 1000)
    })
    console.log(res)
  }
  ww()

  console.log(age)
}
bar()
// 打印 -> 男 23 await