'use strict';
/*debugger;
let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + nextChar;
}

alert(doubled);/*

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
debugger;
// Add an hyphen after each character.
let text = null;
while (text === null){
  text = prompt('enter some text,each character will be doubled:');
}
let doubled = '';
for (let nextChar of text) {
  doubled += nextChar + '-';
}
alert(doubled);

// debugger;
// //Add an hyphen only between the characters.
// let text = null;
// while (text === null){
//   text = prompt('enter some text,each character will be doubled:');
// }
// let doubled = '';
// for (let i = 0; i<text.length;i++ ){
//   doubled += text[i];
//   if (i !== text.length - 1){
//     doubled += '-'
//   }
// } 
// alert(doubled);