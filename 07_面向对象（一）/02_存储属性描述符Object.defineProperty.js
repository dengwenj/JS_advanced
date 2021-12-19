var obj = {
    name: 'dengwj',
    age: 21,
    _sex: '男'
}

// 存储属性描述符
// 1 隐藏某一个私有属性被希望直接被外界使用和赋值
// 2 如果我们希望截获某一个属性它访问和设置的过程时，也会使用存储属性描述符
Object.defineProperty(obj, 'sex', {
    get: function() {
        foo()
        return this._sex
    },

    set: function(value) {
        bar()
        this._sex = value
    }
})
console.log(obj.sex);

obj.sex = '女'
console.log(obj.sex);

function foo() {
    console.log('get被调用了');
}

function bar() {
    console.log('set被调用了');
}