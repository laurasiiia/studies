'use strict';
/*
// the OR (||) and the AND (&&) operator

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

// SHORT CIRCUITING

console.log('------ OR -------');
//or operator
console.log(3 || 'Jonas'); //3
// || means OR
//they can use any data type, they can return any data type and can do something called short-circuiting or also called short circuit evaluation

//in the case of the or operator, the short circuiting means that if the first value is a truthy value it will immediately return that first value, thats why it logged 3 > again, if the first operand is truthy, then the other operand will not even be evaluated. js wont even read it.

console.log('' || 'Jonas'); //jonas
//empty strings '' are a falsy value, so the second operand will be evaluated, and it will be returned
console.log(true || 0); //true
//true is a truthy value so it will be returned
console.log(undefined || null); //null
//undefined is a falsy value, so the second operand will be evaluated, so there is NO short-circuiting, and even though null is ALSO a falsy value, thats the one thats gonna be returned

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello
//that happens because 'Hello' is the first truthy value in this chain of OR operations, so it will short-circuit the entire evaluation so '23' or 'null' wont even be evaluated.

//in the or operation the result is true if AT LEAST ONE operand is true. if the first operand is already true, than js doesnt even have to look at the other values because the result of the expression will already be true anyway, so it will short circuit and then simply return that first result

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//basically its saying that if 'numGuests' exists then 'numGuests'.. but if it doesnt, then return 10
console.log(guests1); //10, because 'numGuests' is a falsy value since it doesnt exists
restaurant.numGuests = 23;
const guest2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest2); //23, because 'numGuests' is a truthy value: 23

const guests2 = restaurant.numGuests || 10;
console.log(guests2); //23
//if we didnt define 'numGuests' earlier, this value would be undefined, therefore a falsy value, and as we already know, the second value (10) would be the result of the OR operator, basically a default value of '10'
//but 'numGuests' is now 23, which is a truthy value, therefore the OR operator short circuits and it will became the return value (the result of the operation) '23'

//both of these operators will not work if the 'numGuests' is zero, because it will became a falsy value, therefore the second operand will be returned !!!!!!!!!!!

console.log('------ AND -------');

//the AND operator works in the exact opposite way of the OR operator
console.log(0 && 'Jonas'); //0
//the AND operator short circuits when the first value is falsy, and immediately returns that falsy value without evaluating the second operand
console.log(7 && 'Jonas'); //Jonas
//when it is truthy, the evaluation continues and the last value is returned

//the AND operator is only true if ALL the operands are true. if the first one is false, it means that the entire result of the AND operation will already be false anyway, so there is no need to look at any of the other operands

console.log('Hello' && 23 & null & 'Jonas'); //null
//the first and second operands are true, so the evaluation continues until it finds 'null', a falsy value, than the evaluation stops because now the AND operator is gonna be false anyway, and returns the falsy value and it short circuits the evaluation

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
} // mushrooms ['spinach']
//first we are checking if 'orderPizza' exists, and if it does, we call it

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // mushrooms ['spinach']
//if the first value is falsy > it does not exists, it will short circuit the evaluation and nothing else will happen (just like the if block), but if it is truthy > if it exists, the second part will be evaluated and in the second operand we call call the function!!

/*
RECAP
-the OR operator will return the FIRST TRUTHY value of all the operands or the LAST value if all of them are falsy
-the AND operator will return the FIRST FALSY value or the LAST if al of them are truthy
-for practical applications, we can use the OR operator to set default values and we can use the AND operator to execute code in the second operand > if the first one is true
*/

///////////////////////q
/*
// the nullish coalescing operator (??)

restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest); //10
//since 0 is a falsy value, the OR operator skips it and returns the first truthy value it sees > the '10'. thats the value its gonna be returned

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); //0 but if we comment line 104 out, it will return 10, because 'numGuest' wont be 0, it will be undefined:
//the nullish coalescing operator works with the idea of nullish values instead of falsy values. nullish values are null and undefined > it does not include 0 or '' empty strings. it makes as if 0 and '' were not falsy, but truthy values.
//this operator does work with the principle of nullish values, therefore, all nullish values will short circuit the evaluation in line 109. the second operand will only be evaluated if the first is null or undefined
*/
