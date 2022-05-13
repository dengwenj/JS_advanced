// 不使用柯里化
// function foo(date, type, message) {
//     console.log(`${date.getHours()}:${date.getMinutes()}, ${type}, ${message}`);
// }
// foo(new Date(), 'BUG', '首页有bug')
// foo(new Date(), 'BUG', '登陆有bug')
// foo(new Date(), 'BUG', '设置有bug')
// foo(new Date(), 'BUG', '头部有bug')

// 使用柯里化  逻辑的复用
var fn = date => type => message => {
    console.log(`${date.getHours()}:${date.getMinutes()}, ${type}, ${message}`);
}

var types = fn(new Date())
types('BUG')('出bug了')
types('FEATURE')('添加了新功能')
types('DELETE')('删除了旧功能')

var msg = fn(new Date())('BUG')
msg('头部出现问题')
msg('设置出现问题')
msg('个人中心出现问题')
msg('登录出现问题')