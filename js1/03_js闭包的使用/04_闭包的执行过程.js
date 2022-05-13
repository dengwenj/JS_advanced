/* 
    什么时候对象会被销毁？没有引用指向它的时候

    GC 算法
        从根对象开始出发，如果没有引用指向某一个对象就会销毁，
        GC 的最新实现来说只要从我的根对象开始，有些对象永远指不向他们，那么这些东西就会被销毁，即使循环引用也会被销毁
*/

function foo() {
    var name = 'foo'
    var age = 18

    function bar() {
        console.log(name)
        console.log(age)
    }
    return bar
}

var fn = foo()
fn()