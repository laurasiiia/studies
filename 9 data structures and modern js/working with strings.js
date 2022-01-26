'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'TAP Air Portugal';
const plane = 'A320';

//just like in arrays, we can get the character of a string at a certain position:
console.log(plane[0]); //A
console.log(plane[1]); //3, but not as a number, for that we would have to convert
//we can also retrieve it while writing the string:
console.log('B737'[0]); //B
//and also retrieve the length at the same time:
console.log(airline.length); //16
console.log('B737'[0].length); //1

//strings also have methods, and some of them are quite similiar to array methods
//checking at which position the letter are:
console.log(airline.indexOf('r')); //6
//strings are also ZERO BASED. 0: T, 1: A 2: P, 3: '', 4: A, 5: i, 6: r, 7: '', ... > the space also counts!
//this will only gives us the first occurance of the letter, but sometimes we might need the last one, and so then we can use:
console.log(airline.lastIndexOf('r')); //10

//search for entire words:
console.log(airline.indexOf('Portugal')); //8
//this is case sensitive, so if we search with lowercase 'portugal', we get '-1', because this cannot be found in this 'airline' string

//why are indexes useful? one good use case is to extract part of a string using the slice method, and the slice method needs indexes as arguments, therefore sometimes it can be really useful to first figure out the index of a part of a string to then extract that:
//slice method
console.log(airline.slice(4)); //Air Portugal
//this happens because the '4' is the begin parameter, basically is the position at which the extraction will start, this is also ZERO BASED. the result, 'Air Portugal', is called a substring, because its just a part of the original string. this does not change the underlying string, because its impossible to mutate strings, they are primitives. if we wanted to use this new string we would have to store it first into some variable or data structure.
console.log(airline.slice(4, 7)); //Air
//we specified the end parameter, and the end value is NOT included in the string, since the 7 is the '' empty space. it stops extracting before reaching index number 7.
//the length of the extracted string is always gonna be the end paramenter minus the beginning > 7 - 4 = 3.

//extracting the first word without knowing any of the indexes > without hard coding
console.log(airline.slice(0, airline.indexOf(' '))); //TAP
//extracting the last word
console.log(airline.slice(airline.lastIndexOf(' '))); //  Portugal, but it has the '' included, so we need to:
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

//counting from the end with negative paramenters
console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga
//we started at 1, thats why the 'T' is cut off, and then the negative end parameter (which counts backwards) cuts off the last character

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat :(');
  else console.log('You got lucky :)');
};

checkMiddleSeat('11B'); //You got the middle seat :(
checkMiddleSeat('23C'); //You got lucky :)
checkMiddleSeat('3E'); //You got the middle seat :(

//if strings are primitives, why do they have methods? whenever we call a method on a string, js will automaticallu behind the scenes convert that string primitive to a string object with the same content. and then its on that object where the methods are called. this process is called boxing, because it basically takes our string and puts it into a box which is the object.

console.log(new String('jonas')); //String {'jonas'}
// 0: "j"
// 1: "o"
// 2: "n"
// 3: "a"
// 4: "s"
// length: 5
//this string looks a little bit like an object
console.log(typeof new String('jonas')); //object1
//this conversion is what js makes behind the scenes whenever we call a method on a string. and then when the operation is done, the object is converted back to a regular string primitive. all string methods return primitives, even if called on a string object:
console.log(typeof new String('jonas').slice(1)); //string