'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // firstName in current scope is a NEW variable with the same name as outer scope's variable,
      // i.e. this new variable will take precedence over outer scope's variable in the variable lookup
      // and str will include Steven, not Jonas
      const firstName = 'Steven';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // Re-assigning outer scope's variable
      output = 'NEW OUTPUT';
    }

    // var variables are only function-, but not block-scoped
    console.log(millenial);

    // the block has access to the output variable in its parent scope, hence it can
    // reassign its value; i.e. this will log 'NEW OUTPUT' instead of 'Jonas, you are ...'
    console.log(output);

    // const and let variables are block-scoped; this does NOT work:
    // console.log(str);

    // functions are also block-scoped in strict mode, i.e. only accessible inside the block;
    // (if strict mode is turned off, functions are function-scoped); this does NOT work:
    // console.log(add(2, 3));
  }

  printAge();
  return age;
}

// firstName needs to be declared before the calcAge function call
// in order for firstName to 1) be included in the global execution context
// variable environment and 2) thus be accessible from within the calcAge function
const firstName = 'Jonas';
calcAge(1991);
