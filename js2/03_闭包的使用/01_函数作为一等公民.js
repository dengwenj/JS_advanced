function foo(call) {
  call()
}
foo(function () {
  console.log("一等公民")
})
