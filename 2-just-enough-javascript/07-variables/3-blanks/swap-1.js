// #todo
debugger;
'use strict';

let a = 'bye';
let b = 'hi';
let temp;

temp = a;
a = b;
b = temp;

console.log('a:', a);//a: hi
console.log('b:', b);//b: bye
console.log('temp:', temp);//temp: bye
