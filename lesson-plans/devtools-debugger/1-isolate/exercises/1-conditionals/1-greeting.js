'use strict'
 /*let input = prompt('enter your name:');

 let greeting = '';
 if (input === null) {
   greeting = 'hello anonymous.';
 } else {
   greeting = 'hello' + input + '!';
 }

 alert(greeting);*/

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
debugger;
//gets user input
let firstName = prompt('enter your first name:');
let lastName = prompt('enter your last name:');

let greeting = '';
if (firstName === null || lastName === null){
  greeting = 'hello annonymous.';
  }else{
    greeting = 'hello' + firstName + ' '+ lastName + ' !';
  } 
  
  alert(greeting);
  //else (firstName !== null || lastName !== null) {
    //greeting = 'hello' + firstName + ' '+ lastName + ' !';
  

