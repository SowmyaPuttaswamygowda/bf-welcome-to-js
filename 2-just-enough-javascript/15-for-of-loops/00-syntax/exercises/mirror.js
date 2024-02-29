// prettier-ignore
{ // so prettier does not remove the extra spacing

'use strict';

// ::::: don't forget to trace the program! :::::

//Define the word to be mirrored
let word = 'hello';

//Initialize a variable to store the mirrored string
let mirrored = '|';

//Iterate through each character in the word
for (let char of word) {

// concatenate the current character
    mirrored = char + mirrored + char;


}
// print the original word and its mirrored version
console.log(word + ' -> ' + mirrored);


}
