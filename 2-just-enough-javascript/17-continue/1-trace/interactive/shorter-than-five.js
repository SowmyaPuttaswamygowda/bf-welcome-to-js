// #todo

'use strict';
//Initialize a variable to hold user input
let input = '';

//Use a while loop to repeatedly prompt the user until a valid input
while (true) {
  input = prompt('enter something shorter than 5 characters');
  
  //check if the user cancels the prompt,display an alert and continue
  if (input === null) {
    alert('there is no escape');
    continue;
  }
   
  //check if the input length is greater than 4,display an alert and continue
  if (input.length > 4) {
    alert('your input is too long');
    continue;
  }

  break;//If the input meets the conditions ,break out of the loop
}

//Display the final input using an alert
alert(input);
