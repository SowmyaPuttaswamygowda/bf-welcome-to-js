// #todo

'use strict';
debugger;
console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Hack')); // true
console.log('HackYourFuture'.includes('Your')); // true
console.log('HackYourFuture'.includes('Future')); // true

console.log('HackYourFuture'.includes('hack')); // false
console.log('HackYourFuture'.includes('YOUR')); // false
console.log('HackYourFuture'.includes('future')); // false

console.log('HelloByeseeu'.includes('Bye')); // true
console.log('Hi. Carshow'.includes('. Car')); // true
console.log('hi'+'Car'.includes('+')); // true

console.log('good Bye'.includes('hi')); // false
console.log('blockROAD'.includes('road')); // false
console.log('laya'.includes('Ima')); // false
