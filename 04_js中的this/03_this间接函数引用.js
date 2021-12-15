var obj = {
    name1:'obj',
    foo: function () {
        console.log(this);
    }
}

var obj2 = {
    name2:'obj2'
}

;(obj2.fn = obj.foo)() // window  独立函数调用


// 规则优先级
// new 绑定 > 显示绑定（call apply bind）> 隐示绑定 > 独立函数绑定