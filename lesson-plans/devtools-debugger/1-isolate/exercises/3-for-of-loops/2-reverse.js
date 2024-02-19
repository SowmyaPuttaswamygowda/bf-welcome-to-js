'use strict';
/*debugger;
let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;

alert(transformation);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/

/*let orginalString = '';
for ( let nextChar of backwards){
  orginalString = nextChar + orginalString;

}
alert(transformation);
alert(originalString);*/

debugger;
let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
let originalString = ''; // Added line to store the original string
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
  originalString = nextChar + originalString; // Reversing again to get the original string
}

let transformation = toReverse + ' -> ' + backwards;

alert(transformation);
alert(originalString); // Displaying the original string