// prettier-ignore
{ // so prettier does not remove the extra spacing

'use strict';

// ::::: don't forget to trace the program! :::::

//Gather user input
let input = null;

//Continue promting the user until a non-null value is provided
while (input === null) {


    input = prompt('no canceling allowed');//promt the user for input


    console.log(input);//log the input to the console


}

//Create a message by concatenating the input with a thank you for your input
let message = 'thank you for your input: ' + input;

//Display the message to the user
alert(message);



}
