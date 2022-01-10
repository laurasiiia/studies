'use strict';

//primitives values are like numbers, strings, booleans, etc
let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30
//thats because oldAge will keep the value of the age that it had by the time that oldAge was declared. it does not get affected by the change in the variable later in the code

//object
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);

console.log('Me:', me);

//both of them logged {name: 'Jonas', age: 27}
//find why it happens in the 8.md note

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); //Davis Williams

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
//they both logged {firstName: 'Jessica', lastName: 'Davis', age: 27}
//why did this happen? we didnt copy the jessica object (IT DID NOT CREATE A NEW OBJECT IN THE HEAP), we actually copied the jessica reference that POINTS TO the object. so if one changes, every single variable that points to the same object changes too!
//thats because, in the stack, they both hold the same memory address reference.
//essencialy they are just two different names for the same thing

//remember that even though 'jessica' and 'marriedJessica' are consts, we can still change their properties like 'lastName' or 'age'... what CANNOT change is the value in the stack, and in the stack, the value only holds the reference which we are not changing. the only thing that we are changing is the underlying object that is stored in the heap! that has nothing to do with const or let

//what we CANT do is assign a completely different object now to 'marriedJessica', for example:
// marriedJessica = {};
//this cannot happen because this new object will be stored in a different position in memory and therefore the reference to that position in memoruy will have to change, and that does not work! because that is in the stack, and since it is a constant, we cannot change that value in the stack!
//we cannot change the value to a new memory address. if it was a let, then it would work.

//in conclusion, completely changing the object (assigning a new object to it) is completely different than simply changing a property as we did earlier.

//what if we really want to copy the object so we could then change one of them without changing the other?

//copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2); //this will create a completely new object where all the properties are really copied

jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

// jessica2: {firstName: 'Jessica', lastName: 'Williams', age: 27} and jessicaCopy: {firstName: 'Jessica', lastName: 'Davis', age: 27}
//now, 'jessicaCopy' is a REAL copy of the original. it is not pointing to the same reference! a new object was created in the heap and 'jessicaCopy' is now pointing to that object > it has a reference pointing to that object

//object.assign only works in the first level. other words, if we have an object inside the object, this inner object will still be the same, it will still point to the same place in memory. object.assign only creates a shallow copy and not a deep clone which is what we would like to have.
//shallow copy is only gonna copy the properties in the first level while a deep clone would copy everything

const jessica3 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy2 = Object.assign({}, jessica3);

jessicaCopy2.lastName = 'Davis';

jessicaCopy2.family.push('Mary');
jessicaCopy2.family.push('John');

console.log('Before marriage:', jessica3);
console.log('After marriage:', jessicaCopy2);
//Before marriage: {firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(4)} ... After marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(4)}
//even though the 'lastName' update from 'Williams' to 'Davis' just in 'jessicaCopy2' (being preserved in the 'jessica3' object because it is in the first level and object.assign took care of that property), both of them now have 4 items in the 'family' array.
//the family object is a deeply nested object, so object.assign didnt copy it to the new object. so both the object 'jessica3' and 'jessicaCopy2' have a property called 'family' which points at the same object in the memory heap (and that object is the array content), therefore, when we change the array in one of them, its also gonna be changed in the other one.

//to actually make a deep clone we need to include a external library, which we aint doint it today :(
