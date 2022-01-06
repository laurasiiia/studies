"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    //the scope can't find the firstName in the current scope, so it looks up into the calcAge() scope. it finds the birthYear but still can't find the firstName, so it keeps looking up even further, in the global scope. it finds it finally and uses the value.

    if (birthYear >= 1981 && birthYear <= 1996) {
      //block scope
      var millenial = true;
      // CREATING NEW VARIABLE WITH SAME NAME AS OUTER SCOPE'S VARIABLE
      const firstName = "Steven"; //the value in the str changes from Jonas to Steve, because, when looking for the variable, it finds it in its own block scope so it doesnt need to keep looking up. but, outside this block (up), the firstName will still be Jonas.

      // REASSIGNING OUTER SCOPE'S VARIABLE
      output = "NEW OUTPUT";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); > cant find str because its not defined. its defined inside the printAge() child's scope, so it cannot access.

    console.log(millenial); //it logged "true"! because var variables are function scoped >> they ignore the block (they are not block scoped) so they are "stored" in the closest parent scope
    //add(2,3); > not defined, because a function IS block scoped. so it can only be accessed by the function add() itself or its childs' scopes.
    // >>>> that is only true for strict mode!!! if we comment the strict mode out, it will work and log "5"
    console.log(output); //it works because its reasigning the value of a parent variable.
  }
  printAge();

  return age;
}

// calcAge(1991); >can't do that here because the firstName wasn't defined already. it has to be defined BEFORE i call the function
const firstName = "Jonas";
calcAge(1991);
// console.log(age); >age is a variable stored inside the function scope. i'm currently coding in the global scope, so it cannot find a variable stored inside its child scope.
// printAge(); >can't call a function stored inside a child scope either.
