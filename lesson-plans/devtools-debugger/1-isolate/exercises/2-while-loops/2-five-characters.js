'use strict';

/*let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);*/

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
debugger;
//Change the condition to 10 characters.
let input = null;
while (input === null || input.length !== 10) {
  input = prompt('enter something with 10 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

//Make the user write "everything" in 2 steps.
let userInput = '';
//first step:
while (userInput.length !==5){
  userInput = prompt(' Enter the second half of "everything" (5 characters):');
}
//second step:
while (userInput.length !==10){
  userInput += prompt('enter the second half of "everything"(5 characters):');
}

message = 'Thank you for'+ userInput +'!';

alert(message);
