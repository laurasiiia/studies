# first-class and higher-order functions

first-class functions enables us to write higher order functions

## first-class

-js treats functions as first-class citizens
-this means that functions are simply treated as values
-functions are just another "type" of object

since objects are values, functions are values too, and there is a bunch of interesting things that we can do, for example:

### store them in variables or properties:

    const add = (a, b) => a + b;

> created a function expression

    const counter = {
        value: 23,
        inc: function() {this.value++;}
    }

> created an object method

the values in the functions (after de '=' on line 15 and after the 'inc:' on like 23) we can store wherever we like.

### pass functions as arguments to OTHER functions:

    const greet = () => console.log('Hey Jonas);
    btnClose.addEventListener('click', greet)

> we have the 'addEventListener' function, that we passed the 'greet' function into as a value.

### return functions FROM functions.

### call methods on functions:

    counter.inc.bind(someOtherObject);

> the function being the 'bind' method.

the fact that javascript has first class functions makes it possible for us to use and write higher order functions:

## higher-order functions

-either a function that RECEIVES another function as an arguments, that RETURNS a new function, or BOTH
-this is only possible because of first-class functions

### functions that RECEIVES another function:

    const greet = () => console.log('Hey Jonas);
    btnClose.addEventListener('click', greet)

the 'addEventListener is a higher-order function, because it RECEIVES another funtion as an input, in this case, the 'greet' function

> we usually say that the function that is passed in is a callback function, because that callback function will be called later by the higher order function. in this case, 'addEventListener' will call the 'greet' callback later as soon as the 'click' event happens

### function that RETURNS new function

    function count() {
        let counter = 0,
        return function() {
            counter++
        };
    }

we have the higher-order function as the line 61, and this whole code block, which clearly returns a new function, which is line 63, the returned function

all functions are values. thats it! there are no first-class functions in practice, its just a concept. there are however higher-order functions in practice, which are possible because the language supports first-class functions
