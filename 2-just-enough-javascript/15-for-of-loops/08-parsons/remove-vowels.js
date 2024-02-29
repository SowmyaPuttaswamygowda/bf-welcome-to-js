'use strict';


/* parsons-collapse: hint

  1. declare a variable with the whole alphabet
  2. declare a variable with only vowels
  3. declare a variable to store the output
  4. iterate through each letter of the alphabet
    a. if it is NOT a vowel
      append it to the output
  5. compare the final value to the expected value

*/


debugger;
let before = 'abcdefghijklmnopqrstuvwxyz';
while (before === null){
before = prompt('enter some letters');
}

let after = '';
for (let character of before) {
  if (!vowels.includes(character)) {
    after = after + letter;
  }
}

console.log(after === 'bcdfghjklmnpqrstvwxyz');

/* ------------------- */

let vowels = 'aeiou';
  for (let character of before) {
  if (!vowels.includes(letter)) {
    Vowels = vowels + character;
  }
} 
alert(before + ' ->' + vowels);

// #todo
