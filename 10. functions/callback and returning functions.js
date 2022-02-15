'use strict';

//functions accepting callback functions

//lower-level functions:
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher-order function:
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  //functions can have properties, one of them being the 'name' property:
  console.log(`Transformed by: ${fn.name}`);
};

//the goal of the function is to take the value and the function that will be called on that value, instead of just calling each function, we have one that can call multiple ones
transformer('JavasCript is the best!', upperFirstWord);
//we are NOT calling the function in the second value, using the '()' after. it will be the 'transformer' function that will call this function

//WHAT WAS LOGGED?
//line 17: Original string: JavasCript is the best!
//line 18: Transformed string: JAVASCRIPT is the best!
//line 21: Transformed by: upperFirstWord

transformer('JavasCript is the best!', oneWord);

//WHAT WAS LOGGED?
//line 17: Original string: JavasCript is the best!
//line 18: Transformed string: javascriptisthebest!
//line 21: Transformed by: oneWord

//we call the 'fn' properties the callback functions, because they are being called as they pass into other functions. we do not call them ourselves, instead, we basically tell js to call them later > in this case, whenever the 'transformer' function calls them

const high5 = function () {
  console.log('🖐🏻');
};

document.body.addEventListener('click', high5);
//we pass in a callback function, in this case 'high5', into the 'addEventListener' function > the higher-order function. in this case, the callback function is also called the event handler or event listener.

['Jonas', 'Martha', 'Adam'].forEach(high5); //3 🖐🏻
//thats because we have three elements in this array, and as the name of the method says, for each of them, this callback will be called

//js uses callbacks all the time:
//the big advantage of this is that it makes it easy to split up our code into more reusable and interconnected parts

//callback functions allow us to creat abstraction: we hide the detail of some code implementation because we dont really care about all that detail. this allow us to think about problems at a higher more abstract level.
//for example, the 'transformer' function does not care at all how the  string is transformed, it doesnt care about this level of detail. all it wants to do is to transform a string, but it doesnt care how it should do it. what it means is that we could have taken the line 11 and written it directly into transformer, or even line 7. it would have worked the smae, but instead, we abstracted this code away into other functions. we created a new level of abstraction. by doing this, the 'transformer' is really only concerned with transforming the input string itself, no matter how that transforming actually works.
//basically delegating the transformation to the other lower level functions, which are the first two

//function returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
//this value is now a function, it its the 'greet' function with the 'hey' parameter. we can now call this 'greeterHey' function, just like any other function:
greeterHey('Jonas'); //Hey Jonas
greeterHey('Steven'); //Hey Steven

//the 'greeting' on line 63 is still comming from the 'greet' function parameter, it works because of something called closure.

//doing everything in one go:
greet('Hello')('Jonas'); //Hello Jonas
//since 'greet('Hello')' by itself is already a function, we can call it again

//this will be incredibly important, especially if we're using a really important programming paradigm called funcitonal programming.

//chalenge, rewrite the code using arrow functions
const greet2 = greet => name => console.log(`${greet} ${name}`);

greet2('Hello')('Laura'); //Hello Laura
