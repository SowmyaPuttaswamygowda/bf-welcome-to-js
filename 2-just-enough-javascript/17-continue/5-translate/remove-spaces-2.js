// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null

// WHILE: true
//   input <- prompt('enter something with at least one space, the spaces will be removed')
//   IF: input === null
//     alert('no escape')
//     CONTINUE
//   :END IF
//   IF: input === ''
//     alert('gotta enter something')
//     CONTINUE
//   :END IF
//   IF: !input.includes(' ')
//     alert('there must be a space!')
//     CONTINUE
//   :END IF
//   BREAK
// :END WHILE

/* ---   ?   --- */

// spaceless <- ''

// FOR: char OF input
//   IF: char !== ' '
//     spaceless <- spaceless + char
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// alert(input + ' -> ' + spaceless)
debugger;
let input = '';

while (true) {
  input = prompt('enter something shorter than 5 characters');

  if (input === null) {
    alert('there is no escape');
    continue;
  }

  if (input.length > 4) {
    alert('your input is too long');
    continue;
  }

  break;
}

alert(input);
