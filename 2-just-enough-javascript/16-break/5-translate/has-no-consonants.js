// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */
debugger;
  let letters = null 

 while(letters === null) {
   letters = prompt('enter some letters');
  }

/* ---   ?   --- */

 let noConsonants = true;

 for( const letter of letters ) {
    const lowerCaseLetter = letter.toLowerCase()
   if('bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)) {
    noConsonants = false;
    break;
    }
 }

/* ---   ?   --- */

let message = '';

 if( noConsonants) {
  message = '"' + letters + '" has no consonants'
 }else{
   message = '"' + letters + '" has at least one consonant'
 }

/* ---   ?   --- */

 alert(message);
