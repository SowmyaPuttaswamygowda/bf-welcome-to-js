// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- prompt('do whatever you want')

/* ---   ?   --- */

// message <- 'your input is '

// IF: input === null
/* ---   ?   --- */
//   message <- message + 'null'
// ELSE:
/* ---   ?   --- */
//   maybeNot <- ''
//   IF: input.length !== 0
/* ---   ?   --- */
//     maybeNot <- 'not '
//   :END IF
//   message <- message + maybeNot + 'empty'
// :END IF

/* ---   ?   --- */

// alert(message)
debugger;
const userInput = prompt('do whatever you want');

let message = '';

if (userInput === null) {
  message = 'You canceled!';
} else {
  let didConfirm = confirm('is this what you meant to input?\n-> ' + userInput);
  if (didConfirm === false) {
    message = 'try again';
  } else {
    message = 'Great! thank you';
  }
}

alert(message);