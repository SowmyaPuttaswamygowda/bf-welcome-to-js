// #todo

'use strict';

/* Full Name


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */

// firstName <- null

// WHILE: firstName === null
//   firstName <- prompt('enter a first name')
// :END WHILE

/* ---  ?  --- */

// lastName <- null

// WHILE: lastName === null
//   lastName <- prompt('enter a last name')
// :END WHILE

/* ---  ?  --- */

// fullName <- firstName + ' ' + lastName

/* ---  ?  --- */

// alert(fullName)
debugger;
let firstName = null;

while (firstName === null) {
  firstName = prompt('enter a first name');
}

let lastName = null;
while (lastName === null) {
  lastName = prompt('enter a last name');
}

const fullName = firstName + ' ' + lastName;

alert(fullName);