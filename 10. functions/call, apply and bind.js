'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}, > OLD SYNTAX
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Laura Loyola'); //Laura Loyola booked a seat on Lufthansa flight LH239.
lufthansa.book(635, 'John Smith'); //John Smith booked a seat on Lufthansa flight LH635.
//the 'this' keyword on line 10 points to the 'lufthansa' object itself, because thats the object in which the book method was called > on line 15 and 16

console.log(lufthansa); //{airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2), book: ƒ} >> if we open the 'bookings' arrays:
// bookings: Array(2)
// 0: {flight: 'LH239', name: 'Laura Loyola'}
// 1: {flight: 'LH635', name: 'John Smith'}

const eurowings = {
  airline: 'Eurowing',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; //this is possible because js have first-class functions. so we can take the function value and then store it into a new variable

// book(23, 'Sarah Williams'); //Uncaught TypeError: Cannot read properties of undefined (reading 'airline')
//thats because that function is now just a regular function call, and in a regular function call the 'this' keyword points to undefined > in strict mode. this 'book' function is no longer the method in 'lufthansa'. its not a method anymore. is a regular function.
//the 'this' keyword depends on HOW the function is called

//how do we tell js what this 'this' keyword should point at? with 'call', 'apply' and 'bind'
//remember: functions are just objects, and objects have methods, therefore functions have methods too

// call method
book.call(eurowings, 23, 'Sarah Williams'); //Sarah Williams booked a seat on Eurowing flight EW23.
console.log(eurowings); //{airline: 'Eurowing', iataCode: 'EW', bookings: Array(1)} > entrando na array: 0: {flight: 'EW23', name: 'Sarah Williams'}
//we didnt call the 'book' function ourselves. we called the 'call' method, and this 'call' method will call the 'book' function, with the 'this' keyword set to eurowings > or whatever we pass as the first argument of the 'call' method
//this allows us to manually set the 'this' keyword of any function that we want to call. then, all the arguments after the first one are the arguments of the original function call > in this case, 'flightNum' and 'name'

book.call(lufthansa, 239, 'Mary Cooper'); //Mary Cooper booked a seat on Lufthansa flight LH239.
console.log(lufthansa); //{airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), book: ƒ} > entrando na array:
// 0: {flight: 'LH239', name: 'Laura Loyola'}
// 1: {flight: 'LH635', name: 'John Smith'}
// 2: {flight: 'LH239', name: 'Mary Cooper'}
//now we have three bookings

//so, even though the code of the 'book' function is inside 'lufthansa' object, we made it so that the 'this' keyword point to 'eurowings' with the 'call' method. and then again, made it point to 'lufthansa' again

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}; //they all need to have the exact same format as the original object 'lufthansa' because this method is tring to read the properties 'iataCode', 'bookings', 'airline'... so we need to use exactly these property names in this object as well

book.call(swiss, 583, 'Mary Cooper'); //Mary Cooper booked a seat on Swiss Air Lines flight LX583.
console.log(swiss); //{airline: 'Swiss Air Lines', iataCode: 'LX', bookings: Array(1)}

// apply method
const flightData = [583, 'George Cooper'];
//it does basically the same thing, but the 'apply' does not receive a list of arguments after the 'this' keyword > in the case of line 61, after the 'swiss'. instead is gonna take an array. it takes the elements from the array and pass it into the function
book.apply(swiss, flightData); //George Cooper booked a seat on Swiss Air Lines flight LX583.
console.log(swiss); //{airline: 'Swiss Air Lines', iataCode: 'LX', bookings: Array(2)} > now it have 2 elements in the array

//the apply method is not that used in modern js anymore, because we have a better way of doing the exact same thing:
book.call(swiss, ...flightData); //George Cooper booked a seat on Swiss Air Lines flight LX583.
//this is the same as line 67. its better to use a 'call' method and then use the 'spread' operator to spread out the arguments from an array like this.

// bind

//just like the 'call' method, we can also set manually the 'this' keyword, but the difference is that 'bind' does not immediately call the function. instead, it returns a new function where the 'this' keyword is bound. so its set to whatever value we pass into 'bind'.

//lets say we need to use the 'book' function to 'eurowings' all the time:
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings); //this will always be set to eurowings
bookEW(23, 'Steven Williams'); //Steven Williams booked a seat on Eurowing flight EW23.
//this looks like the normal book function call again, thats because the 'bookEW' already has the 'this' keyword set in stone basically, so we no longer need to specify to 'this' keywords again. so the name of the parameters is back to simply being the 'flightNum' and 'name'.

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

//in the 'call' method we can pass multiple arguments, besides the 'this' keyword. in the 'bind' we can also do the same, and then all of these arguments will also be basically set in stone. they will be defined and the function will always be called with these same arguments:
//we could use 'bind' to create a funciton for one specific airline and a specific flight number:

const bookEW23 = book.bind(eurowings, 23); //now, everytime we call the 'bookEW23', it will automatically be set to 'flightNum' 23. this function now only needs the 'name'.
bookEW23('Jonas Schmedtmann'); //Jonas Schmedtmann booked a seat on Eurowing flight EW23.
bookEW23('Martha Cooper'); //Martha Cooper booked a seat on Eurowing flight EW23.
//specifying parts of the argument beforehand is a common pattern called 'partial application'. this means that a part of the arguments of the original function are already applied, already set. exactly what the 'bookEW23' function is.

// bind with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++; //basically add a new plane whenever the function is called
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); //NaN
//the reason for that is that the 'this' keyword is this button element, because in an event handler function, the 'this' keyword ALWAYS points to the element on which that handler is attached to. 'lufthansa.buyPlane' is the handler function, and it is attached to the 'document.querySelector('.buy')' element, to this button. and therefore, inside of the handler function, of the event listener, it doesnt really matter, but inside this function the 'this' keyword will point to the button element. thats why line 99 returns the html code of the button.
//another proof that the 'this' keyword is set dynamically, because if we set 'lufthansa.buyPlane' outside of this event listener, the 'this' keyword would be 'lufthansa', because thats the object calling the function.
// lufthansa.buyPlane(); //301

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //301, and line 99 returned the 'lufthansa' object as the 'this' keyword
//we used 'bind' instead of the 'call' because 'bind' creates a new function, and 'call' calls the function. now, with the 'bind', the function will use the 'lufthansa' object as the 'this' keyword.

// partial application (preset parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

const addVAT = addTax.bind(null, 0.23);
//the first argument of bind is the 'this' keyword, but in this case, the 'bind' does not care about the 'this' keyword at all, its not even in the function, so we just say 'null', its standard use.
// addVAT = (rate, value) => value + value * 0.23; << essentially what the addVAT function looks like

console.log(addVAT(100)); //123
console.log(addVAT(23)); //28.29

//keep in mind that the order of the arguments is important, if we wanted to preset the rate that it would have to be the first argument in this function '(value, rate)', otherwise it woundnt work.
//this is creating a brand new and more specific function based on a more general function, which is the 'addTax'. using 'bind' gives us a new function.

//challenge, rewrite the code using 'function returning other function'. create a function that can return a function which will do what 'addVAT' does

const tax = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

const taxVAT = tax(0.23);

taxVAT(100);
//jonas said it would be challenging but i found it pretty simple! should i be proud? lol
