'use strict';
//this line beggnins the tdz of the variables until the line of their code

//variables
console.log(me); //undefined
// console.log(job); //ReferenceError: cannot access "job" before inicialization
// console.log(year); //didnt execute this yet because the cl(job) introduced a bug, so the code has stopped

var me = 'Laura';
let job = 'Teacher';
const year = 1991;

//functions

console.log(addDecal(2, 3)); //the result was 5!
// console.log(addExpr(2.3)); //ReferenceError: cannot access "addExpr" before inicialization
// console.log(addArrow(2, 3)); //Uncaught TypeError: addExpr is not a function

function addDecal(a, b) {
  return a + b;
}

//this one are a conts variable too, so everything up from here is its TDZ. thats why it cant access before inicalization
const addExpr = function (a, b) {
  return a + b;
};

//every variable declared with var will be hoisted and set to undefined. this is a variable declared with var and right now it is undefined. but, when we tried to logged it before, it was like if we would write: undefined(2,3). its not a function.
var addArrow = (a, b) => a + b;
//if we log "console.log(addArrow)" the result would be "undefined"

//the only function that we can use before declaring it is the Funcion Declaration.

//example

if (!numProducts) deleteShoppingCart;

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
//the result was 'All products deleted!'
//this happens because of hoisting, because, when called before its definition, the only value a var has is "undefined". so its not ten. its "undefined", and undefined =/= 10. so the deleteShoppingCart is called.

var x = 1; //the only type of variable that create properties on the window object on the browser
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(z === window.x); //false
