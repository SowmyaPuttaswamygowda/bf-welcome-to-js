// #todo

'use strict';
// Initialize a variable to hold the message
let message = 'your favorite color is ';

//use a while loop to repeatedly prompt the user until a valid input is provided
while (true) {
  let input = prompt('what is your favorite color?');
 
  // If the user cancels the prompt, display an alert and continue the loop
  if (input === null) {
    alert('there is no escape');
    continue;
  }

  // If the input is not empty, concatenate it to the message and break out of the loop
  if (input.length !== 0) {
    message = message + input;
    break;
  }
}
// Display the final message using an alert
alert(message);
