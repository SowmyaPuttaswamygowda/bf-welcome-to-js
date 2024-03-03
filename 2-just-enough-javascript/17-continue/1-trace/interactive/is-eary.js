// #todo

'use strict';
// Initialize a variable to hold the message
let message = '';

//Use a while loop repeatedly prompt the user until a valid input is provided
while (true) {
  let input = prompt('enter something that includes "ear"');

  //If the user cancels the prompt,display an alert and  continue
  if (input === null) {
    alert('there is no escape');
    continue;
  }

  //If the input includes "ear",concatenate it to the message and break out of the loop
  if (input.includes('ear')) {
    message = '"' + input + '" includes "ear"';
    break;
  }
}
// Display the final message using an alert
alert(message);
