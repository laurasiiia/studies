'use strict';

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

//in the or operation the result is true if at least one operand is true. if the first operand is already true, than js doesnt even have to look at the other values because the result of the expression will already be true anyway, so it will short circuit and then simply return that first result

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
