'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line:
    why:
    trying:

*/
debugger;
let userinput = prompt('enter something 5 characters long');

if (userinput) {
  alert(':(');
} else if (userinput.length < 5) {
  alert('too short');
} else if (userinput.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}
