'use strict';
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 1982234212,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;

  if (passenger.passport === 1982234212) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas); //alert: Check in
console.log(flight); //LH234
console.log(jonas); //{name: 'Mr Jonas Schmedtmann', passport: 1982234212}
//the flight is still the same, but the name in the 'jonas' object changed > line 11

//the flight variable is a primitive type, just a string, as we pass that value into the function, the flight number in the parameter is basically a copy of the original value. 'flightNum' contains a copy and not the original value of the 'flight' variable. this would be exactly the same as writing:
//const flightNum = flight;
//this would simply copy the value, but still be a completely different variable, and therefore, as we changed it on line 10, it didnt reflect in the outside 'flight' variable

//but, as we called 'passenger' in the 'checkIn' function, we passed in a reference type, and what is copied is just a reference to the object in the memory heap. it would be exaclty as doing:
//const passenger = jonas;
//when we try to copy an object, we are really only copying the reference to that object in the memory heap, but they both point to the same object in memory. thats what happen to the 'jonas' object when we pass it into the 'checkIn' function where is called 'passenger'. and as we are manipulating the 'passenger' object, it is exactly the same as manipulating the 'jonas' object, because they are THE SAME object in the memory heap.

//passing a primitive value to a function is really just the same as creating a copy outside of the function. the value is simply copied. on the other hand, as we pass an object to a function it is really just like copying an object, and whatever we change in a copy will also happen in the original.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas); //alert: Check In, alert: Wrong passport!
//we have two functions manipulating the same object and this is creating a problem, because when we manipulated the 'jonas' in the 'newPassport', it reflected on the outside object, that got passed into the 'checkIn' and its not the same as the original one.

//js does not have passing by reference, only passing by value
*/
