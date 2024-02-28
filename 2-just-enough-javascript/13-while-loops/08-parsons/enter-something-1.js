'use strict';

/* parsons-collapse: hint

  0. strict mode!
  1. declare input variable
  2. while input is null
    - prompt the user for input
  3. display the input
*/
debugger;
let input = null;
while (input === null) {
  input = prompt('enter something');
}

alert(input);

// --- distractors ---

/*while (input === null) { // distractor
} // distractor
{ // distractor
while (input === null) // distractor
while input === null: // distractor*/
