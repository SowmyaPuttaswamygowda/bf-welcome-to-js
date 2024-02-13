'use strict';

debugger;

//declare the variable a 

let a = 'Ewin';

// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

//Read the value 'a'
//concat 'hello' ,'a',and Jo
//assign hello Ewin Jo to 'b'

let b = 'Hello ' + a + ', Jo ';

// check conditional-statements

if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

//log the variable b
console.log(b);
