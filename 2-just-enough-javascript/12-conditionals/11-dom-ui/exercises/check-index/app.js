import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-index', () => {
   debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  // --- check the index ---

  // --- display the search results ---
//});
const text = readString('text');
  const character = readString('character');
  const index = readNumber('index');

  let message = '';

  if (text && character && typeof index === 'number') {
    if (index >= 0 && index < text.length) {
      if (text[index] === character) {
        message = `Yes! '${character}' exists at index ${index} in '${text}'.`;
      } else {
        message = `No! '${character}' does not exist at index ${index} in '${text}'.`;
      }
    } else {
      message = `Index ${index} is out of range for the text '${text}'.`;
    }
  } else {
    message = 'Please fill in all fields correctly.';
  }

  displayString('index-check-result', message);
});
