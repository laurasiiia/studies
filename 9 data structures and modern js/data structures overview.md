# data structures overview

## sources of data

    1. from the program itself: data written directly in source code (e.g. status messages that will be displayed on a webpage based on user actions)
    2. from the UI: data input from the user (into some form) or data written in DOM (e.g. tasks in todo app or expenses in a budget app)
    3. from external sources: data fetched for example for web API+ (e.g. recipe objects)

+API stands for Application Programming Interface, and we can use web APIs to get data from other web applications, like get the current weather in a city or data about movies or currency conversion rates... any kind of data

no matter where the data comes from or what kind of data it is, we usually always have collections of data that we need to store somewhere.

### where do we store collections of data?

we use data structures! there are FOUR built-in data structures in JavaScript. and we need a way of deciding between them.

the first decision is this:

#### do we just need a simple list of values?

then we are gonna use an ARRAY or a SET

#### but we need key value pairs?

then we need an OBJECT or a MAP

> the big difference here is that with a key value pair we have a way of describing the values by using the key. in the other hand, on a list like an array or a set, we simply have the values without any description

quick example: lets go back from getting data from a web API > because in modern js applications, APIs are the most common source of data. data from web APIs usually comes in a special data format called JSON, wich looks like 'JSON example.jpg'. JSONS is essentially just text, a long string, but it can easilly be converted to js objects because it uses the same formating as js objects and arrays.
in 'JSON example.jpg' we have three objects that descripe recipes, we have the values in green, like the title and a publisher and it makes complete sense that there values are then described using a key. otherwise we would have no idea what the different values are. so key value pairs are essential, and thats why this data is stored in an object and not an array
each of these recipe objects in itself can be seen as a value and since we have many of them, it means that we have a collection of data and therefore we need a data structure to store them
its not really necessary to describe each of the of the objects, because we already know they are all recipes and whatever information we need about the recipes is already stored inside each of the objects, so all we want is a simple list where all the recipes are held togheter, and so here, an array is the perfect data structure for that. and in fact, creating an array of objects is extremelly common in js

#### other built-in

    1. weakmap
    2. weakset

#### non-built in

data structures that exists but not built for js:

    1. stacks
    2. queues
    3. linked lists
    4. trees
    5. hash tables

## array vs sets and objects vs maps

### arrays vs sets

> we should use them for simple lists of values, when there is no need to describe the values

#### arrays

    tasks = ['code', 'eat', 'code'];
    //["code", "eat", "code"]

- use when you need ORDERED list of values (might contain duplicates)
- use when you need to MANIPULATE data
  > because there is a ton of useful array methods

#### sets

    tasks = new Set(['code', 'eat', 'code]);
    //{"code", "eat"}

- use when you need to work with UNIQUE values
- use when HIGH-PERFORMANCE is really important
  > operations like searching for an item or deleting an item from a set can be up to 10 times faster in sets than in arrays
- use to REMOVE DUPLICATES from arrays

> sets are not meant to replace arrays, but rather to complement them whenever we are dealing with unique values

### objects vs maps

> we should use these key value data structures whenever we need to describe the values using keys

#### objects

    task {
        task: 'code',
        date: 'today',
        repeat: true
    };

- more "tradicional" key/value store ("abused" objects)
- easier to write and access valyes with . and []

- use when you need to include FUNCTIONS (methods)
- use when working with JSON (can convert to map)

#### maps

    task = newMap([
        ['task', 'code'],
        ['date', 'today'],
        [false, 'start coding']
    ]);

- better performance
- keys can have ANY data type
- easy to iterate
- easy to compute size

- use when you simply need to map key to values
- use when you need keys that are NOT strings
