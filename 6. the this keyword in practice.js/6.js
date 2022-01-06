'use strict';

console.log(this); //opens the window object

//regular function call
const calcAge = function (birthYear) {
  console.log(2037 - birthYear); //46
  console.log(this); //undefined
};
calcAge(1991);
//thats because we are in strict mode! in slopphy mode it would be the global object
//this is called a regular function call because its a call of the function without the function being attached to any object (without having an owner)

//arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear); //57
  console.log(this); //global object, in this case, the window object
};
calcAgeArrow(1980);
//the reason why in this case the this is not undefined is that arrow function does NOT get its own this keyword. instead, it uses the lexical this keyword (of its parent function or of its parent scope)
//in this case, the disc keyword of the parents scope is the window object because it is the this keyword in the global scope (just like the first code in line 3)

//method

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // {year: 1991, calcAge: ƒ}. it logged the jonas object
    console.log(2037 - this.year); //46
  },
};
jonas.calcAge();
//when we have a method call, the this keyword inside of the method will be the object that is calling the method, in this case: the jonas object. jonas is basically the owner of the method.
//instead of having to write 'jonas.calcAge(1991);', we can simply use the birth year that is already in the object itself, and the this keyword will reference that object.

//the only reason why jonas.calcAge() have the this keyword be the jonas object itself its because it called the object in 'jonas.calcAge()'. not because the this.year is INSIDE the jonas object.
//the this keyword will not simply point at the object in which we wrote the method (jonas)!!!!

//
const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //we copied the method from one object to the other. this is called method borrowing
//if we write directly in the console 'matilda', it will show up '{year: 2017, calcAge: ƒ}'
matilda.calcAge(); //20
//in this method call, the this keyword does now actually point to matilda
//the this keyword always points to the object that is CALLING the method, in this case, mathilda, so it will point to mathilda - even if it was written inside of the jonas object
//therefore, the this keyword is pretty dynamic, it is not static, it depends on HOW the function was called

//what if the function is not inside anything?
// const f = jonas.calcAge; <<<<<<<<<
//the result was
//  ƒ () {
// console.log(this);
//     console.log(2037 - this.year);
//   }
//this is the code of jonas.calcAge

//so the this keyword should be:
// f(); <<<<<<<<<< //Uncaught TypeError: Cannot read properties of undefined (reading 'year')4
//thats because it cannot read year of undefined in the this.year. this is undefined.year and that doesnt exist.
//this becames a regular function call > it is not attached to any object. there is no owner of the f function.

// <<<<<<<<* this means that the code was written but commented out because it was bugging the console
