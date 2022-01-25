'use strict';

///////////// SETS ////////////////////
/*
//a set is basically a collection of unique values > a set can never have any duplicates

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
//the set can hold mixed data types... strings, numbers, etc
console.log(ordersSet); //Set(3) {'Pasta', 'Pizza', 'Risotto'}
//all the duplicates are gone
//looks similar to an array > there are no key value pairs, just a bunch of values grouped together. sets are also ITERABLES. but differently from an array, because its elements are unique and because the order is irrelevant

//creating new sets
console.log(new Set('Jonas')); //Set(5) {'J', 'o', 'n', 'a', 's'}
console.log(new Set()); //Set(0) {size: 0}

//checking its size
console.log(ordersSet.size); //3
//useful for a chef to know how many different meals he is gonna prepare > the amount of each one of them doesnt matter and neither the order > just the unique amount of values!
//also, its called SIZE and not LENGTH like arrays

//checking if it has an element
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false
//this is a method

//adding elements
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); //Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
//only one of them was added, because the set has to be UNIQUE. the second one was ignored

//deleting elements
ordersSet.delete('Risotto');
console.log(ordersSet); //Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}

//retrieving elements out of a set
//in sets, there are NO indexes, there is no way of getting items out of a set, because there is no need for getting ta out of a set, because if all values are unique and if their order does not matter, then there is no point of retrieving items. all we need to know is whether a certain value is in the set or not > 'has' method.

//deleting all items from the set
// ordersSet.clear();
// console.log(ordersSet); //Set(0) {size: 0}

//sets are iterable, therefore we can loop over them!
for (const order of ordersSet) console.log(order); //Pasta Pizza Garlic Bread

//the most used case of sets is to remove duplicate values of arrays
// example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//but we are interested in knowing which different positions there are in our restaurant, basically the array without the duplicates:

// const staffUnique = new Set(staff);
// console.log(staffUnique); //Set(3) {'Waiter', 'Chef', 'Manager'}

//converting that set to an array:
const staffUnique = [...new Set(staff)];
console.log(staffUnique); //(3) ['Waiter', 'Chef', 'Manager']
//since sets are iterables, it can be used the spread operator, and now we ended up with a new array

//if we only want to know how many different positions there are, then we can use the size property is very useful:
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); //3
console.log(new Set(staff).size); // 3

console.log(new Set('jonasschmedtmann').size); //11
//strings are also iterable

//sets are NOT intended to replace arrays at all. if you need to store values in oredr and that might contain duplicates, USE ARRAYS.
*/

///////////////// MAPS //////////////////
/*

//a map is a data structure that we can use to map values to keys, just like an object, data is stored in key value pairs in maps. the difference between objects and maps is that in maps, the keys can have any type: strings, objects, arrays or other maps

//the easiest way to creat a map is to create an empty map and then fill up the map with the 'set' method:
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
//calling 'set' does not only update the map that is called on, but also returns the map, for example:
console.log(rest.set(2, 'Lisbon, Portugal')); //Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

//since calling the 'set'method updates returns the updated map, so we can call 'set' again and uptade it again:
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed D:');

//to read data from a map we use the 'get' method:
console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(true)); //We are open :D
//while getting the data, the type of the key matters. we cannot write 'rest.get('true')' if the key is a boolean and we are writing it like a string > that would be undefiend. the same goes for 1 as '1'.
console.log(rest.get(1)); //Firenze, Italy

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //We are open :D
//the good thing about having booleans are keys, because the operation above is true, therefore it calls the 'rest.get(true)', which is 'We are open :D'

//checking if a map contains a certain key
console.log(rest.has('categories')); //true

//deleting elements on the map
rest.delete(2);
console.log(rest); //Map(7) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …}

//size propertie
console.log(rest.size); //7

//removing all the elements from the map
// rest.clear();
// console.log(rest); //Map(0) {size: 0}

rest.set([1, 2], 'Test');
console.log(rest); //in the entries: 7: {Array(2) => "Test"}

console.log(rest.get([1, 2])); //undefined
//these two arrays in line 125 and line 128 are not the same, because they are not the same object in the heap. the key in line 125 is exacly this object in memory and not in the line 128. in order to make it work we would have to do:
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); //Test
//now it works because they both refer to the same place in memory

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); //in the entries: 9: {h1 => "Heading"}
//if we pass our mouse into it on the console, the h1 on the page turns blue

//both sets and maps were introduced in ES6
*/
/*
//another way of populating a new map without using the set method:
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);
console.log(question); //Map(7) {'question' => 'what is the best programming language in the world?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, …}
//this is a much easier way to put a lot of elements into the map at the same time

const restaurant = {
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
      open: 0,
      close: 24,
    },
  },
};

//convert object to map
console.log(Object.entries(restaurant.openingHours)); //(3) [Array(2), Array(2), Array(2)
// 0: (2) ['thu', {…}]
// 1: (2) ['fri', {…}]
// 2: (2) ['sat', {…}]
//this is the same as calling line 152, because its the same array structure that is returned, because in there we get an array where the first element is the key, and the second one is the value.

//what this means is that there is an easy way to convert from objects to maps

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap); //Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}
//is exacly the same as 'question' map: an array of arrays

//maps are also iterables, and since objects are not iterables, we couldnt loop over it, so we would have to transform its entries into a map, so we could '(const x of map)':
//quiz app
console.log(question.get('question')); //what is the best programming language in the world?
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
} //Answer 1: C Answer 2: Java Answer 3: JavaScript

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(answer === question.get('correct')));

//convert map to array
console.log(...question); //(2) ['question', 'what is the best programming language in the world?'] (2) [1, 'C'] (2) [2, 'Java'] (2) [3, 'JavaScript'] (2) ['correct', 3] (2) [true, 'Correct 🎉'] (2) [false, 'Try again']
//an array of arrays
// console.log(question.entries()); //MapIterator {'question' => 'what is the best programming language in the world?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, …}
console.log(question.keys()); //MapIterator {'question', 1, 2, 3, 'correct', …}
console.log([...question.keys()]); //(7) ['question', 1, 2, 3, 'correct', true, false]
console.log(question.values()); //MapIterator {'what is the best programming language in the world?', 'C', 'Java', 'JavaScript', 3, …}
console.log([...question.values()]); //(7) ['what is the best programming language in the world?', 'C', 'Java', 'JavaScript', 3, 'Correct 🎉', 'Try again']
*/
