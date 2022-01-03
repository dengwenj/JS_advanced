function foo() {
  throw new Error('error，出错误了')
}

function bar() {
  try {
    foo()
  } catch (error) {
    console.log(error.message);
    console.log('');
  }
}

function fn() {
  bar()
}

fn()

console.log('后面代码');

/* 
  抛出异常两种处理方法
    1 第一种是不处理, 会继续将收到的异常直接抛出去，如果在最顶层也没有对这个
      异常进行处理，那么我们的程序就会终止执行，并且报错
    2 使用 try catch 来捕获异常
*/
