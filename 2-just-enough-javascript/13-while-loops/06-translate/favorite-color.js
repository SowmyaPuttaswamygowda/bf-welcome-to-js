// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// message <- 'your favorite color is '

// unconfirmed <- true

// WHILE: unconfirmed
//   input <- prompt('what is your favorite color?')
//   IF: input === null
//     alert('there is no escape')
//   ELSE:
/* ---   ?   --- */
//     confirmed <- confirm('is this correct? "' + input + '"')
//     IF: confirmed === true
//       message <- message + input
//       unconfirmed <- false
//     :END IF
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(message)

//initial setup
debugger;
let message = 'your favorite color is ';
let unconfirmed = true ;

//while loop to gather user input and confirmation
while (unconfirmed ){
  let input = prompt('What is your favorite color?');

  if (input === null){
    alert ('There is no escape');
  } else {
    let confirmed = confirm('Is this correct? " '+ input + ' " ');

    if (confirmed){
      message += input;
      unconfirmed = false;
    }
  }
}

//output the final message to the user
alert (message);