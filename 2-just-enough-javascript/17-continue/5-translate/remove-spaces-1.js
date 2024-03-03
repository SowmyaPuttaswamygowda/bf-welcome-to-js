// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */
debugger;
  let input = null;

let  hasSpaces = false;

 while(!hasSpaces){
   input = prompt('enter something with at least one space, the spaces will be removed');
 
   if(input === null){
     alert('no escape');
   }
  else if( input === '') {
     alert('gotta enter something');
  }else if ( !input.includes(' ')){
     alert('there must be a space!')
   }else{
     hasSpaces = true;
   }
  }

/* ---   ?   --- */

let spaceless = '';

 for(const  character of input ){
   if( character === ' ') {
     continue;
 } else {
   spaceless = spaceless + character
}
 }
/* ---   ?   --- */

 alert(input + ' -> ' + spaceless)
