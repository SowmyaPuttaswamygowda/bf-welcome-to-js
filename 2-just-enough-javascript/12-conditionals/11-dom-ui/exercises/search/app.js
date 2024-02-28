import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
   debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const text = readString('text');
  const query =readString('query');
  const isCaseSensitve = readBoolean('sensitive');


  // --- do the search ---
  let message = '';

  //if case sensitive
  if (isCaseSensitve){
    if (text.includes(query)){
      message = 'yes';
    }else{
      message = 'no';
    }
  }

  // --- display the search results ---
  displayString('serch-result',message);
});
