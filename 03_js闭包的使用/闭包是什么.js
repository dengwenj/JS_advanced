/* 
    闭包是两部分组成：函数 + 可以访问的自由变量
    闭包在实现上是一个结构体，它存储了一个函数和一个关联的环境

    MDN：一个函数和其周围状态（词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包

    一个普通的函数 function，如果他可以访问外层作用域的自由变量，那么就是一个闭包
*/

function foo() {
    var name = 'bar',
    function bar() {
        console.log(name,'name 就是自由变量');
    }
    
    return bar
}

var fn = foo()
fn()

// 这也是一个闭包
var age = 21
function num() {
    console.log(age);
}
num()