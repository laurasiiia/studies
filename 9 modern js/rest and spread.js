'use strict';

//destructuring is an ES6 feature it is a way of unpacking values from an array or an object into separate variables > is to break a complex data structure down into a smaller data structure like a variable

//the spread operator is a bit similiar to destructuring, because it also helps us get elements out of arrays, but the big difference is that the spread operat  takes all the elements from the array and it doesnt create new variables. as a consequence, we can only use it in places where we would otherwise write values separated by commas.
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //destructuring values as we pass the function setting the default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// the rest pattern

// 1) destructuring

//it also uses the '...' but it actually does the opposit of the spread operator! uses the exact same syntax but to collect multiple elements and consense them into an array > the spread operator is to unpack an array while rest is to pack elements into an array

//SPREAD syntax, because on RIGHT side of =
const arr1 = [1, 2, ...[3, 4]]; //we know is a spread syntax because we are usint it '...' on the right hand side of the assignment operator, so of the equal sign '='.

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]
//it is called rest because it will take the rest of the elemenst (the remaining) and then put them into a new array > that we called "others".
//the rest pattern basically collects elements that are unused in the destructuring assignment

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//it logged the two strings 'pizza' and 'risotto' and later, it collected every element that we didnt select previously into their own variables. and the rest syntax collectsall the array AFTER the LAST variable, so AFTER RISOTTO. it does NOT INCLUDE SKIPPED ELEMENTS, thats why 'pasta' is not included, for that reason, the rest patter must ALWAYS be the lest in the destructuring assignmentQ
//for exemple, we could NOT do this "[pizza, ...otherFood, risotto]". We would get the following message: Uncaught SyntaxError: Rest element must be last element. for that reason, there is only one rest pattern.

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //Object
// fri: {open: 11, close: 23}
// thu: {open: 12, close: 22}
// [[Prototype]]: Object
//its an object only containing friday and thursday, and thats because we already put friday in its own variable before and the '...' collected the rest of the propertie and put on a weekdays object

// 2) functions
const add = function (...numbers) {
  //this is called rest parameter
  // console.log(numbers); //it logged all the arguments that we passed into the functions, inside of an array, for example "[5, 3, 7, 2]"
  //the rest syntax is taking multiple values and packing them all into one array > the opposite of the spread operator
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum); //it returned the values 5, 17 and 25
};
add(2, 3); //the goal of this function is to return 5
add(5, 3, 7, 2); //and also be able to return 17
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //35
//we used this spread operator: this would be the same thing as writing manually 23, 5 and 7. this is a good example of how spread is the opposite of rest!

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); //mushrooms and in the next line: ['onion', 'olives', 'spinach']
//so the first argument was stored in the 'mainIngredient', and then the remaining arguments that were passed in were simply stored into this array 'otherIngredients' by the rest parameter syntax
restaurant.orderPizza('mushrooms'); //mushrooms and in the next line: []
//there is nothing to collect in the 'otherIngredients' array so we get the empty one that we can work with if we want

///////////////////////////////////////////////////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

// the spread operator
//used to build new arrays of to pass multiple values into a function, or to expand an array into individual elements

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]
//the spread takes all elements of this 'arr' array and then write them individually as if we wrote '7, 8, 9' manually
//if we wrote [1, 2, arr], without the '...' we would have the array inside the array, like '[1, 2, array(3)] or like '[1, 2, [7, 8, 9]]', but the spread operator only takes the elements no the entire array
//so we can use the '...' spread operator whenever we whould otherwise write multiple values separated by commas. and that happens wheneverwe write an array literal or when we pass arguments into functions, for example:

console.log(...newArr); // 1 2 7 8 9
//it logged the individual values of the array, not inside one!

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //(4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']
//we are NOT manipulating the original array, we are creating a new one!!!!

//the spread operator is a bit similiar to destructuring, because it also helps us get elements out of arrays, but the big difference is that the spread operat  takes all the elements from the array and it doesnt create new variables. as a consequence, we can only use it in places where we would otherwise write values separated by commas.

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); //(7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

//spread operators works on all so-called iterables
//iterables are things like arrays, strings, maps and sets.. but not objects! most of the build-in data structures in js are now iterables, EXCEPT objects

//if a string is a iterable than we can use the spread operator on a string as well!
const str = 'Jonas';
const letters = [...str, '', 'S.']; //the fact that we are using [] automatically means that we ARE creating a new array! thats why its logged like an array
console.log(letters); //(7) ['J', 'o', 'n', 'a', 's', '', 'S.']
console.log(...str); // J o n a s
// console.log(`${...str} Schmedtmann`); //this does not work because `${}` does NOT expect multiple values separated by a comma > thats what the spread does
/*
// real world example
const ingredients = [
  prompt('Lets make pasta! Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
];

console.log(ingredients); //it logged all the prompts we wrote

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //Here is your delicious pasta with a, b and c
restaurant.orderPasta(...ingredients); //Here is your delicious pasta with a, b and c >>> more modern way!

//even though objects are not iterables, since ES2018 the spread operators also works on objects

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' }; //in objects, the order DOES NOT MATTER
console.log(newRestaurant); //we got the original object plus two new properties!

//copying
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); //Ristorante Roma
console.log(restaurant.name); //Classico Italiano

//////////////////////////////////////////////////////////////

//destructuring

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); //it logged 'Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30'
//we only passed one argument into this function, not 4!! its only one object! and in the function 'orderDelivery', as we received that object, we do immediately destructuring
//the order we pass the properties in the index dont have to match the order in which we do destructuring up there in the function

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
}); //it logged Order received! Garlic Bread and Pizza will be delivered to Via del Sole, 21 at 20:00
//we did not set any property for the time so when js destructured the object, it took the default value of '20:00', and in the mainMenu, the default value is 0, which is the index for "pizza"

///////////////////////////////////////////////////

//destructuring objects
const { name, openingHours, categories } = restaurant;
//in this case we need to use curly braces and especify the names of the properties
console.log(name, openingHours, categories); //Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
//now it created three new variables based on the 'restaurant' object

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; //giving them new variable names!!
console.log(restaurantName, hours, tags); //it logged the same thing as earlier but now we used different names!

// default values
//restaurant.menu would be undefined because there are no menu property, but we can set default values just like in arrays:
const { menu1 = [], starterMenu: starters = [] } = restaurant;
console.log(menu1, starters); // [] ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
//the first one is undefined but we set a default value of [] and the second one we retrieved the property while changing its name

// mutating variables
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, c: 14 };

// {a, b} = obj; //Uncaught SyntaxError: Unexpected token '='
//when we start a line with curly braces js expects a code block, so the trick is to wrap everything with a parenteshis:
({ d, e } = obj);
console.log(d, e); //23 7
//we did overwrap the two initial values but we had to wrap this destructuring assignment into parenthesis

// nested objects
//we already destructured 'openingHours' so thats the object we are gonna keep destructuring since friday is an object inside an object inside the other object
const { fri } = openingHours;
console.log(fri); //{open: 11, close: 23}
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); // 11 23
//we could go even further and even assign new variables to these 'open' and 'close' with the colon ':' :
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); //11 23

//

// destructuring arrays
const arr2 = [2, 3, 4];
const l = arr2[0];
const m = arr2[1];
const n = arr2[2];
//but with destructuring we can declare all three variables at the same time
// the destructuring assignment
const [r, s, t] = arr2; // 2 3 4
console.log(r, s, t);
console.log(arr2); //the original array is not affected! it logged [2, 3, 4]

//now working on the restaurant
let [first, second] = restaurant.categories;
//we dont need to extract all of the elements!
console.log(first, second); //italian pizzeria
//what if we only want the first and the third element? simply leave a hole in between the elements like: '(first, , third)'
const [primeiro, , terceiro] = restaurant.categories;
console.log(primeiro, terceiro); //italian vegetarian

// switching variables
//changing the elements in the category
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second); //pizzeria italian

[first, second] = [second, first];
console.log(first, second); //pizzeria italian

// receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main); //garlic bread pizza

// destructuring nested arrays > arrays inside of arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6 as separated values
//destructuring inside of destructuring!

// default values
const [f = 1, g = 1, h = 1] = [8, 9];
console.log(f, g, h); // 8 9 undefined BUT since r = 1, now 8 9 1, because we set a default value. if we exclude 9, it would log 8 1 1

/////////////////////////

RECAP 

the spread and the rest syntax look exactly the same '...something' but they work in opposite ways depending on where they are used:

-the spread opeator is used where we would otherwise write values separated by a comma

-the rest pattern in basically used where we would otherwise write variable names separated by commas - NOT VALUES separated by commas. only VARIABLE NAMES!! 
*/
