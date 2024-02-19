// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let name = readString('the-name');

  let lastname = readString('the-lastname');
  
  console.log(name);

  // --- create a message ---

  let greeting = 'Hello ' + name + " " +lastname+ '!';

  let greeting1 = 'Good bye ' + name + " " +lastname+ '!';

  // --- display the message ---

  displayString('greeting-output', greeting);
  displayString('greeting-output1', greeting1);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
