'use strict';

const airline = 'TAP Air Portugal';
// const plane = 'A320';
/*
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

//changing the case of a string
console.log(airline.toLowerCase()); //tap air portugal
console.log('jonas'.toUpperCase()); //JONAS

//fix capitalization in name
const passenger = 'jOnAS'; // it should look like 'Jonas'
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Jonas

//creating a function to do that (assignment):
const fixName = function (name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
};
fixName('lAuRA'); //Laura

//comparing user input email
const email = 'hello@laura.com';
const loginEmail = '  Hello@Laura.COm \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail); //hello@laura.com

//doing everything at the same time:
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //hello@laura.com
console.log(email === normalizedEmail); //true

//creating a function for that (assignment):
const fixEmail = function (loginEmail) {
  const fixedEmail = loginEmail.toLowerCase().trim();
  if (fixedEmail === email) console.log('This email is already registered');
  else console.log('This email is not registered yet');
};
fixEmail(loginEmail); //this email is already registered

//replace parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); //288.97$
console.log(priceUS);

const announcement = 'All passagers come to boarding door 23. Boarding door 23';
console.log(announcement.replace('door', 'gate')); //All passagers come to boarding gate 23. Boarding door 23
//but its only the first appearence of 'door'
console.log(announcement.replaceAll('door', 'gate')); //All passagers come to boarding gate 23. Boarding gate 23
//or we can use regular expression:
// console.log(announcement.replace(⁄door⁄g, 'gate')); DOESNT WORK

//it is also case sensitive

//methods that returns booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); //false

console.log(plane.startsWith('Bus')); //false
console.log(plane.startsWith('Air')); //true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family'); //it got logged
}

// practices exercises
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife'); //You are not allowed on board
checkBaggage('Socks and camera'); //Welcome aboard!
checkBaggage('Got some snacks and a gun for protection'); //You are not allowed on board
//if we didnt put 'bagagge' on lower case, it wouldnt recognize 'Knife' from the first function call on line 145, because its case sensitive therefore 'knife' !== 'Knife'

//split and join
console.log('a+very+nice+string'.split('+')); //(4) ['a', 'very', 'nice', 'string']
//it stored the splitted elements into a new array
console.log('Jonas Schmedtmann'.split(' ')); //(2) ['Jonas', 'Schmedtmann']

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName); //Jonas

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Mr. Jonas SCHMEDTMANN

//join is the opposite of split. using empty strings to split or join can create new strings like line 158 or to cut words out like line 155

//capitalizing the full name
const capitalizeName = function (name) {
  const names = name.split(' ');
  let upperName = [];
  for (const n of names) {
    upperName.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(...upperName);
  // console.log(upperName.join(' ')); //COURSE METHOD
};
capitalizeName('jessica ann smith davis'); //Jessica Ann Smith Davis
capitalizeName('laura loyola'); //Laura Loyola

//quick challenge, rewrite 'capitalizeName' function in another way:
const capitalizeName2 = function (name) {
  const names = name.split(' ');
  const capName = [];

  for (const n of names) {
    capName.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(...capName);
};

capitalizeName2('jessica ann smith davis'); //Jessica Ann Smith Davis
capitalizeName2('laura loyola'); //Laura Loyola

//padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); //+++++++++++Go to gate 23!
//padding means to add a number of characters to the string until the string has a certain desired length
console.log('laura'.padStart(25, '+')); //++++++++++++++++++++laura, it has a bunch more or '+' but the length of the string is still 25
console.log(message.padStart(25, '+').padEnd(35, '+')); //+++++++++++Go to gate 23!++++++++++
//it only added more 10 '+' because the lenght of the string was already 25 characters long

const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + ''; //this works because when one of the operands of the plus sign is a string, it will convert all the operands to a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12345678)); //****5678
console.log(maskCreditCard(1234567812345678)); //************5678
console.log(maskCreditCard('56781234567812345678')); //****************5678

//repeat
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5)); //Bad weather... All Departues Delayed... Bad weather... All Departues Delayed... Bad weather... All Departues Delayed... Bad weather... All Departues Delayed... Bad weather... All Departues Delayed...
//just one big string with the same message repeating over and over again

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5); //There are 5 planes in line ✈️✈️✈️✈️✈️
planesInLine(3); //There are 3 planes in line ✈️✈️✈️
*/
