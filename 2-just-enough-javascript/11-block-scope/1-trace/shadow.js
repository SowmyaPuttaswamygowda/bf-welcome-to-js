// #todo

'use strict';

/*let greeting = 'hello';

{
  let greeting = 'hello';
  greeting = 'bye';
  console.log(greeting);
}

console.log(greeting === 'hello'); // true*/

// Define a variable called greeting in the global scope and assign it the value 'hello'
let greeting = 'hello';

{
  // Define a block scope and declare a variable called greeting with the value 'hello'
  let greeting = 'hello';
  // Update the value of the greeting variable to 'bye'
  greeting = 'bye';
  // Log the value of the greeting variable (which is 'bye') to the console
  console.log(greeting); // Output: bye
}

// Check if the value of the global greeting variable is still 'hello' and log the result to the console
console.log(greeting === 'hello'); // Output: true