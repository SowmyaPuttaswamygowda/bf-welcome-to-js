// #todo

'use strict';

/*
  a user can input string of letters (upper or lower case), each letter will be doubled
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and the letters of their input will be doubled


  test cases:
    no doubled letters:
      'ABC' -> 'AABBCC'
      'abc' -> 'aabbcc'
      'AbC' -> 'AAbbCC'
    some doubled letters:
      'abbcc' -> 'aabbbbcccc'
      'jello' -> 'jjeelllloo'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let userInput ;
while (true) {
  const input = prompt('Please enter somthing, only letters');

  //Check if user cancels the promt
  if (input === null){
    continue;
  }

  //Check if input is empty
  if (input.trim() === '') {
    continue;
  }

  //Check if input continue anything other than letters
    if(!/^[a-zA-Z]+$/.test(input)) {
      continue;
    }
    userInput = input;
      break;
    } 
  

console.log('input:',userInput);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let char of userInput) {
  output += char + char;
}

console.log('output:', output);

/* --- alert the result --- */

alert(output);

console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
