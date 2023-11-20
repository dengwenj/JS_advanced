/**
 * 浏览器内核(webkit)也叫浏览器引擎：用来渲染解析网页的内容（HTML、CSS、JS）
 * 
 * 浏览器渲染过程: HTML 解析的时候遇到了 JavaScript 标签，应该怎么办呢？
 * 会停止解析 HTML，而去加载和执行 JavaScript 代码
 * 
 * JavaScript 代码谁来执行？JS 引擎来执行
 * 高级的编程语言都是需要转成最终的机器指令来执行的
 * 编写的 JS 无论交给浏览器还是 Node 执行，最后都是需要被 CPU 执行的，但是 CPU 只认识自己的指令集，实际上是机器语言，才能被 CPU 所执行
 * 所以需要 JS 引擎帮助我们将 JS 代码翻译成 CPU 指令来执行
 * 比较常见的 JS 引擎(JavaScriptCore、V8 等)
 * 
 * 浏览器内核和 JS 引擎的关系
 * 以 WebKit 为例, webkit 事实上由两部分组成:
 * · WebCore: 负责 HTML 解析，布局，渲染等等相关工作
 * · JavaScriptCore: 解析、执行 JS 代码
 * WebKit -> WebCore 和 JavaScriptCore(JSCore) 组成
 * 
 * V8 引擎
 * · V8 使用 C++ 编写的 Google 开源高性能 JS 和 WebAssembly 引擎，它用于 Chrome 和 Nodejs 等
 * JS 代码 -> Parse -> ATS 抽象语法树 -> lgnition -> bytecode 字节码 -> CPU 上运行
 * 
 * JS 的执行过程
 * 1、代码被解析，v8 引擎内部会帮助我们创建一个对象(ClobalObject -> go) { name: undefined, num1: undefined, String: "类" }
 * 2、运行代码
 *  · v8 为了执行代码， v8 引擎内部会创建一个执行上下文栈（Execution Context Stack，ECStack）（调用栈）
 *  · 因为我们执行的是全局代码，为了全局代码能够正常的执行，需要创建全局执行上下文（Global Execution Context）(全局代码需要被执行时才会创建)
 * 
 * js引擎会在执行代码之前，会在堆内存中创建一个全局对象(GO)，该对象所有的作用域(scope)都可以访问，里面有 String, Date，setTimeout，其中还有一个 window 属性指向自己
 */
var name = "朴睦"
var num1 = 23
var num2 = 18
var res = num1 + num2
console.log(res)
console.log(this)
