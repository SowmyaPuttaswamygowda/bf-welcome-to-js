// #todo

'use strict';

/* parsons-collapse: hint
  1. declare and initialize greeting
  2. enter a new scope
    a. declare a new greeting
    b. assign the new greeting's value to the greeting
  3. compare greeting to 'bye'
*/
debugger;
let greeting = 'hello';

{
  let newGreeting = 'bye';
  greeting = newGreeting;
}

console.log(greeting === 'bye');

/* ------------ */

 greeting = newGreeting; // distractor
 newGreeting = 'bye'; // distractor
