var obj = {
    name: 'dengwj',
    age: 21,
    _sex: '男'
}

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