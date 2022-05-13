function foo() {
    console.log(this);
}

foo.call(null) // window
foo.apply(undefined) // window

var fn = foo.bind(null) 
fn() // window