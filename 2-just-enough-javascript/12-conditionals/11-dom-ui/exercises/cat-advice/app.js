import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
   debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const allergic = readBoolean('allergic');
  const hate = readBoolean('hate');

  // --- generate good advice ---
  let advice = '';
  if (allergic) {
    advice = "Consider choosing a hypoallergenic cat breed";
  } else if (hate){
    advice = "If you don,t like cats,you might want to consider other pets";
  } else {
    advice = "Cats can make wonderful companions .Consider adopting one!"
  }

  // --- display advice for the user ---
  displayString('advice',advice);
});
