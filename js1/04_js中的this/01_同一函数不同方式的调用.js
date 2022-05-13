/* 
    this 是动态绑定的，到函数执行的时候才会绑定上去， this 不是在代码编译的时候确定的
    this 指向跟函数所处的位置是没有关系的，跟函数被调用的方式是有关系的
*/

function foo() {
    console.log(this);
}

foo() // window

var person = {
    name: 'dengwj',
    foo
}

person.foo() // person

foo.call('f2e.dwj') // f2e,dwj 这个字符串