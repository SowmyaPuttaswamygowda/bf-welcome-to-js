// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

debugger;
let text = null

 while (text === null) {
   text = prompt('enter some text');
 }

 let hasAVowel = false;

 for ( const letter of text) {
   if('aeiouAEIOU'.includes(letter) ) {
    hasAVowel = true
    break;
 }
}

 message = '';

 if( hasAVowel ) {
   message = '"' + text + '" has at least one vowel'
  } else {
   message =  + text + '" does not have any vowels';
  }

/* ---   ?   --- */

alert(message)
