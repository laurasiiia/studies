'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
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
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
//in the OR operator, if the first value is truthy it will be returned, and the second value wont be evaluated. but if the first value is falsy, than the number of guests will be 10! this basically means that, if we defined earlier the numer of guests, than it will be the same. but if we havent, it will be 10 :)

rest1.numGuests ||= 10; //this works the exact same way!
rest2.numGuests ||= 10;

console.log(rest1); //{name: 'Capri', numGuests: 20}
console.log(rest2); //{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}
//since rest2 didnt have a 'numGuests', therefore calling it returns into a falsy value, only rest2 have 10 as 'numGuests' > thats because of short circuiting

const rest3 = {
  name: 'Ristorantte',
  numGuests: 0,
};

const rest4 = {
  name: 'Pizzaria',
  owner: 'Giuseppe Ferrara',
};
*/
/*
rest3.numGuests ||= 10; 
console.log(rest3); //{name: 'Ristorantte', numGuests: 10}
//since 0 is a falsy value, the OR operator skips it to find the next truthy value. the OR operator will assign a value to a variable if that exact variable is falsy right now
*/
/*
// nullish assignment operator (null or undefined)
rest3.numGuests ??= 10;
rest4.numGuests ??= 10;

console.log(rest3); //{name: 'Ristorantte', numGuests: 0}
console.log(rest4); //{name: 'Pizzaria', owner: 'Giuseppe Ferrara', numGuests: 10}
//since 0 is not included in the nullish values, it is considered as a truthy value, therefore it is returned as 'rest3.numGuests = 0'. but 'numGuests' are not defined in 'rest4', therefore its value is 'undefined', considered as a falsy value, so it is ignored, and the next value is 10, a truthy value, that is then returned.

//the nullish operator will assign a value to a variable if the current value of that variable is nullish, that is undefined or 'null'
*/
// AND assignment operator
/*
rest3.owner = rest3.owner && '<ANONYMOUS>';
rest4.owner = rest4.owner && '<ANONYMOUS>';

console.log(rest3); //{name: 'Ristorantte', numGuests: 0, owner: undefined}
//since 'owner' does not exists, it is undefined, the AND operator will stop the evaluation and return the first falsy value > 'undefined'
*/
/*
rest3.owner &&= '<ANONYMOUS>';
rest4.owner &&= '<ANONYMOUS>';

console.log(rest3); //{name: 'Ristorantte', numGuests: 0}
//now, there is no 'owner: undefined' because we are using the logical AND assignment operator, that assigns a value to a variable if its is currently truthy > and since undefined is a falsy value, the second value wont even be evaluated.
console.log(rest4); //{name: 'Pizzaria', owner: '<ANONYMOUS>', numGuests: 10}
//this happened because of short circuiting, because, in the AND operator, it short circuits when the first value is falsy > and then immediately returns that falsy value. but in THIS CASE, the first operand is TRUTHY, therefore the second operand will be valuated and returned
//since 'rest4.owner' is a truthy value (because it exists), it was replaced with the second value

//if you ever need to assign a value to a variable that is already defined > that has a value that is currently truthy, you can use this AND assignment operator
*/
