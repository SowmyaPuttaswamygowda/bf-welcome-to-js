'use strict';


/* parsons-collapse: hint
  1. gather input
  2. alert a reaction
    a. sad, they canceled
    b. incorrect
    c. correct
*/

debugger;

let input = prompt('something longer than 4 characters:');

if (input === null) {
  alert(':(');
} else if (input.length <= 4) {
  alert('too short!');
} else {
  alert('perfect');
}

//alert('input')
/*} else  (input.length < 4) {
  alert('too short !'); 
}*/
  //if (input !== null)

 //alert('too short !'); 
// -------------------


//alert('too short !'); 
// distractor
//} else if (input.length < 4) { //distractor
//if (input !== null) { // distractor


// #todo
