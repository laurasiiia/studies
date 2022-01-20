'use strict';
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours,

  //ES6 ENHANCED OBJECT LITERALS
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// FOR-OF LOOPS


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); //it logged all of the elements in the menu (starter + main) individually in the console
//this loop will automatically loop over the entire array and in each iteration it will give us access to the current arrah element
//the 'item' element is ALWAYS the current element in each iteration

//just like in the if else statement, there is no need to create a code block when we only have one statement to execute

//we can still use the continue and break keywords

for (const item of menu.entries()) {
  console.log(item); // [0, 'Focaccia'] and so on until [6, 'Risotto'], an array with the index in the array element itself
  console.log(`${item[0] + 1}: ${item[1]}`); // 1: Focaccia and so on ultil 7: Risotto, a prettier list
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} //logged exactly the same thing as line 47
*/
/*
console.log(menu.entries()); //Array Iterator {}
console.log(...menu.entries()); //[0, 'Focaccia']0: 01: "Focaccia"length: 2[[Prototype]]: Array(0) (2) [1, 'Bruschetta'] (2) [2, 'Garlic Bread'] (2) [3, 'Caprese Salad'] (2) [4, 'Pizza'] (2) [5, 'Pasta'] (2) [6, 'Risotto']
//its an array, which in each position contains a new array which contains the element entity and the index number of that element in the original array
*/
/*

// ENHANCED OBJECT LITERALS

//the restaurant object is an object literal, because we wrote this object literally in our code using the curly braces sintax
//1. say that we have an object inside of an object, like 'restaurant.openingHours' on line 27. if we take the 'openingHours' out, how can we make it still be inside the block of 'restaurant'? >
//on line 30 the 'openingHours' is still inside of 'restaurant'!
//2. writing methods, in ES6, we no longer have to create a property and then set it to a function expression like line 32. on line 37 and 41, it works exactly the same, but with a easier syntax

// OPTIONAL CHAINING (?.)

console.log(restaurant.openingHours.mon); //undefined
// console.log(restaurant.openingHours.mon.open); //Uncaught TypeError: Cannot read properties of undefined (reading 'open')
//in order to avoid this error, we would need to check if 'openinHours.mon' actually exists
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); //nothing was logged
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); //11

//checking if not only the 'mon' exists, but if 'openingHours' exists too:
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open); //undefined
//this uses the nullish concept, so a property exists if its not null or undefined > if is 0 or '', it stills exists.
//without the '?' would return the same error as line 82
//the '?' means that, if everything behind it exists, only then the code after it will be executed. if it does not exist, the result will be undefined immediately.
//we can have multiple optional chainings:
console.log(restaurant.openingHours?.mon?.open);
//if 'openingHours' does not even exists, then the 'mon' property wont even be read and we dont get that error

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day); //it logged all the elements from 'days' in separated lines
  const open = restaurant.openingHours[day]?.open;
  // console.log(`On ${day}, we open at ${open}`); //On wed, we open at undefined, On thu, we open at 12, On sat we open at 0 and so on and so on

  //basically in days that were not defined in 'restaurant.openingHours' it sets to undefined, and the ones that were defined returned the exact opening hour

  const open2 = restaurant.openingHours[day]?.open || 'closed';
  // console.log(`On ${day}, we open at ${open2}`); //On wed, we open at closed, On thu, we open at 12, On sat we open at closed

  //but on sat it says that is closed, even though it opens at 0. since 0 is a falsy value, the OR operator will trigger and return the next value, which is 'closed'

  //nullish coalescing operator
  const open3 = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open3}`); ////On wed, we open at closed, On thu, we open at 12, On sat, we open at 0

  //this was an example of the optional chaining operator and the nullish coalescing operator working togheter. they were introduced to js at the same time in ES2020 because they were designed to work well with each other.
  //both of them rely 0n this concept of nullish > null or undefined
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); //Method does not exist
//this is checking if 'orderRisotto' exists, if it does, it calls it with the paramenter '(0,1)'. if it doesnt > undefined, it will return the second operand 'Method does not exist'.

// arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.' }];

console.log(users[0]?.name ?? 'User array empty'); //Jonas
console.log(users[3]?.name ?? 'User array empty'); //User array empty

//or the old way:
if (users.length > 0) console.log(users[0]?.name);
//Jonas
else console.log('User array empty');

//if array empty:
const users2 = [];
console.log(users2[0]?.name ?? 'User array empty'); //User array empty
*/
/*
// LOOPING OBJECTS: KEYS, VALUES AND ENTRIES

// property NAMES
const properties = Object.keys(openingHours);
console.log(properties); //['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   console.log(day); //thu fri sat
// }

for (const day of properties) {
  console.log(day); //thu fri sat

  openStr += `${day}, `;
}
console.log(openStr);

// property VALUES
const values = Object.values(openingHours);
console.log(values); //[{…}, {…}, {…}] if we open it:
// 0: {open: 12, close: 22}
// 1: {open: 11, close: 23}
// 2: {open: 0, close: 24}

// entire object
const entries = Object.entries(openingHours);
// console.log(entries); //[Array(2), Array(2), Array(2)]
// 0: (2) ['thu', {…}]
// 1: (2) ['fri', {…}]
// 2: (2) ['sat', {…}]
//first we have the keys (thu, fri, sat) and than the values: the {...} in those arrays contains the 'open' and 'close' properties

//entries return not only the values but also the key

for (const x of entries) {
  console.log(x);
  // (2) ['thu', {…}]
  // (2) ['fri', {…}]
  // (2) ['sat', {…}]
}

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
  // On thu we open at 12 and close at 22
  // On fri we open at 11 and close at 23
  // On sat we open at 0 and close at 24
} //the '{open, close}' part is necessary because the value itself is also an object, therefore it is written this day. but in a more simple object with a simpler value, we would only write '[key, value]'
*/
