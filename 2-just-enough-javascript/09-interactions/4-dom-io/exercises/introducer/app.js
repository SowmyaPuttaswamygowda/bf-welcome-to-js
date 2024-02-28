// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
   debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const firstName = readString('firstName');
  const lastName = readString('lastName');

  // --- create a message ---
  const message = `Hi,${firstName} ${lastName}.`;

  // --- display the message ---
  displayString('message');
});
