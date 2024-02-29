// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// normalPhrase <- null

// WHILE: normalPhrase === null
//   normalPhrase <- prompt('enter something to flipflop')
// :END WHILE

/* ---   ?   --- */

// previous <- ''

// flipFlopped <- ''

// FOR: current OF normalPhrase
//   IF: previous !== ''
//     flipFlopped <- flipFlopped + current + previous
//     previous <- ''
//   ELSE:
//     previous <- current
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// IF: flipFlopped.length < normalPhrase.length
//   flipFlopped <- flipFlopped + normalPhrase[normalPhrase.length - 1]
// :END IF

/* ---   ?   --- */

// alert(flipFlopped)
debugger;
let normalPhrase = null;

while (normalPhrase === null) {
  normalPhrase = prompt ('enter somthing to flipflop');
}

let previous = '';
let flipFlopped = '';

for (const current of normalPhrase){
  if (previous !== ''){
    flipFlopped += current + previous;
    previous = '';
  }else {
    previous = current;
  }
}
if(flipFlopped.length < normalPhrase.length) {
  flipFlopped += normalPhrase[normalPhrase.length - 1];
}

alert (flipFlopped);