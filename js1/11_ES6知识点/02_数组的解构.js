var arr = [1, 2, 3]

var [item1, item2, item3] = arr
console.log(item1, item2, item3);

var [item, ...newArr] = arr
console.log(item, newArr);

var [, , item] = arr
console.log(item);

var [itema, itemb, itemc, itemd = 'aaa'] = arr
console.log(itema, itemb, itemc, itemd);