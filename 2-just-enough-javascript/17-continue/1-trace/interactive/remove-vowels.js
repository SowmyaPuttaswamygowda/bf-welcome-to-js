// #todo

'use strict';
//Initialize a varible to hold user input for letters
let letters = null;

//use a while loop repeatedly prompt the user until a valid input
while (letters === null) {
  letters = prompt('enter some letters');
}

//Initialize over each character in the input string
let noVowels = '';
for (let character of letters) {

  //Check if the character is a vowel(both lowercase and uppercase)
  if ('aeiouAEIOU'.includes(character)) {
    continue;
  }
  noVowels = noVowels + character;//If the character is not a vowel,concatenate it to the result
}

alert(letters + ' -> ' + noVowels);//Display the original input and the result without vowels using an alert
