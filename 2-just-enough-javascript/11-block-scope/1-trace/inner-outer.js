// #todo

'use strict';
//declare a variable greeting and initialize to the value 'hello'
let greeting = 'hello';

//Define a variable newGreeeting and assign it the value 'bye'
{
  let newGreeting = 'bye';
  greeting = newGreeting;//update the value of greeting to be the same as newGreeting
}

console.log(greeting === 'bye');//check if the value of greeting is "bye"and log the result to the console


