'use strict';

var firstName = 'Matilda';

//arrow function
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet(); //hey undefined
//this happens because arrow functions does not get their own this keyword. it will simply use the this keyword from its surroudings (the parent's keywords) - and the parent's scope of this greet method is the global scope
//inside of 'jonas' is not a code block. it doesnt create its own scope. its not a code block. its an object literal - just a way that we literally define objects. all of 'jonas' is still in the global scope, therefore, it includes the greet function, which does not have its own this keyword will use the this keyword from the global scope - the window object in this case.
console.log(this.firstName); //undefined
//when we try to access a property that doesnt exist in a certain object, we do not get an error, but simply 'undefined'. this is what is happening. this is the window object, and there is no fistName variable in the window object.
//this behavior becames pretty dangerous in case we use var to declare variables because var variables creates properties in the global object. for example, check line 3
//now that we declared "var firstName = 'Matilda';", it was created a property in the global scope > because its a var. So the value logged in the console on the line 18 changed from 'undefined' to 'Matilda'

//also, line 16 logged 'Hey Matilda' to the console for the exactly same reason. Arrow function does not have this keyword, so it look the this keyword of the parent scope (the global scope therefore the window object) which is 'Matilda'. So it logged 'Hey Matilda', even if it was called by the jonas (hence 'jonas.greet()').
//it was like if we had written window.firstName and thats 'Matilda'

//never use var!
//never ever use arrow function as a method!

//regular function
const jonas2 = {
  firstName: 'Jonas2',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: function () {
    console.log(this); //the jonas object was logged:
    //{firstName: 'Jonas', year: 1991, calcAge: ƒ, greet: ƒ}
    console.log(`Hey ${this.firstName}`); //hey jonas2
  },
};
jonas2.greet();
//now, the method greet get its own this keyword because is a regular function, therefore it HAS its own this keyword

//function inside of a method
const jonas3 = {
  firstName: 'Jonas3',
  year: 1991,
  calcAge: function () {
    console.log(this); //jonas3 object
    console.log(2037 - this.year); //46

    const isMillenial = function () {
      console.log(this); //undefined
      // console.log(this.year >= 1981 && this.year <= 1996); // Uncaught TypeError: Cannot read properties of undefined (reading 'year'), at isMillenial (7.js:60), at Object.calcAge (7.js:62), at 7.js:71
      //thats because the this keyword is undefined
    };
    isMillenial();
    //this is a regular function call even though it happens inside of a method. and the rules says that inside a regular function call, the this keyword must be undefined. it is like if the function isMillenial was outside of this method.
    //this is not really a bug. its a clear rule that a regular function call has the this keyword set to undefined.
  },

  greet: function () {
    console.log(this); //jonas3 object
    console.log(`Hey ${this.firstName}`); //hey jonas3
  },
};
jonas3.greet();
jonas3.calcAge();

//there are two solutions to this problem. the first solution is to use an extra variable that we usuallu call self. so outside of the function, lets say:

//solution 1
const jonas4 = {
  firstName: 'Jonas4',
  year: 1991,
  calcAge: function () {
    console.log(this); //jonas4 object
    console.log(2037 - this.year); //46

    const self = this; //the self const still have the access to the this outside the function, so it will have the value of the this keyowrd set to jonas4
    //can be called self or that
    const isMillenial = function () {
      console.log(self); //so we switch this for self and the result was the jonas4 object
      console.log(self.year >= 1981 && self.year <= 1996); //true!
    };
    isMillenial();
  },

  greet: function () {
    console.log(this); //jonas4 object
    console.log(`Hey ${this.firstName}`); //hey jonas4
  },
};
jonas4.greet();
jonas4.calcAge();
//this self variable was the solution before the ES6.

//but now, after ES6, there is a better solution > to use an arrow function!

//solution 2
const jonas5 = {
  firstName: 'Jonas5',
  year: 1991,
  calcAge: function () {
    console.log(this); //jonas5 object
    console.log(2037 - this.year); //46

    const isMillenial = () => {
      console.log(this); //jonas5 object
      console.log(this.year >= 1981 && this.year <= 1996);
    }; //true

    isMillenial();
  },

  greet: () => {
    console.log(this); //window object
    console.log(`Hey ${this.firstName}`); //hey matilda
  },
};
jonas5.greet();
jonas5.calcAge();
//we use an arrow function because arrow functions does not get their this keyword, therefore it will use the this keyword from the jonas5 which is the jonas5 object!
//at the same time, when the greet tries to call the this keyword, it also uses the parent's this keyword and in its case, it is the window object

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5); //arguments(2), 0: 2, 1: 5 [...]
addExpr(2, 5, 8, 12); //argumentos(4), 0: 2, 1: 5, 2: 8, 3: 12 [...]
//even though there is only two parameters, it is completely legal to add more arguments. they will not have a name - parameter, but they exist, and can be use in functions. for example, we could use a loop, loop all the numbers togheter.

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
}; //when we have more than one line of code, we need to explicitly return
addArrow(2, 5, 8); //Uncaught ReferenceError: arguments is not defined at addArrow
//arguments keyword only exists in regular functions, like func expressios and func declarations
//but arguments keywords are not that important in moderm JavaScript anymore, because now we have a more modern way of dealing with multiple parameters
