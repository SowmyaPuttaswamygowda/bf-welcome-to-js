import { sectionCSpell } from 'cspell-lib';
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('multiplication', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  const firstNumber = readNumber('left');
  const secondNumber = readNumber('right');

  // --- multiply the numbers ---
  const result = firstNumber * secondNumber;

  // --- create a message ---
  const message = `${firstNumber} * ${secondNumber} === ${result}`;
  // --- display the message ---
  displayString(message);
});
