// prettier-ignore
{ // so prettier does not remove the extra spacing

'use strict';

// ::::: don't forget to trace the program! :::::

/* --- gather user input --- */


//Gather user input
let input = null;

//Continue promting the user until a non-null value is provided
while (input === null) {


    input = prompt('type nothing and click "enter"');


    console.log(input);//log the input to the console


}

/* --- create a message --- */



let message = '';

//check if the input based on the input
if (input === '') {


    message = 'thank you for nothing!';


} else {


    message = 'this is not nothing: ' + input;


}

console.log(message);


/* --- display message to the user --- */



alert(message);


}
