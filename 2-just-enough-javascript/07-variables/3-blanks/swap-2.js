// #todo

'use strict';

let a = 'y';
let b = 'x';
let temp;

temp = b;
b = a;
a = temp;

console.log('a:', a);//a:x
console.log('b:', b);//b:y
console.log('temp:', temp);
