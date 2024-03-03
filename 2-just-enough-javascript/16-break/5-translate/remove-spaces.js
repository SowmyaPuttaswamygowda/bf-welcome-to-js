// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

let input = null;

 while(true) {
  input = prompt('enter something with at least one space, the spaces will be removed')
   if (input === null) {
     alert('no escape')
  } else if ( input === '') {
     alert('gotta enter something');
   } else if( !input.includes(' ') ) {
     alert('there must be a space!');
     continue;
   } else {
     break;
   }
  }

/* ---   ?   --- */

let  spaceless = '' ;

 for(const char of input) {
   if( char !== ' ') {
     spaceless = spaceless + char;
 }
}

/* ---   ?   --- */

 alert(input + ' -> ' + spaceless);
