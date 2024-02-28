// #todo

'use strict';
/*debugger;
let phrase = '';

{
  let word = 'hello';
  phrase = phrase + word;
}

{
  let word = 'world';
  phrase = phrase + ' ' + word;
}

console.log(phrase === 'hello world'); // true*/

{
  // Define a block scope and declare a variable called word with the value 'hello'
  let word = 'hello';
  // Concatenate the value of word to the phrase variable
  phrase = phrase + word;
}

{
  // Define another block scope and declare a variable called word with the value 'world'
  let word = 'world';
  // Concatenate a space character, followed by the value of word, to the phrase variable
  phrase = phrase + ' ' + word;
}

// Check if the value of phrase is equal to 'hello world' and log the result to the console
console.log(phrase === 'hello world'); // true