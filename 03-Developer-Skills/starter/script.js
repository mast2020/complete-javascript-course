// Remember, we're gonna use strict mode in all scripts now!
'use strict';

////////////////////////////////////////////////
// Coding challenge #1

const printForecast = function (arr) {
  let outputString = '';
  for (let i = 0; i < arr.length; i++) {
    outputString += `... ${arr[i]}°C in ${i + 1} days `;
  }
  outputString += '...';
  console.log(outputString);
};

printForecast([12, 5, -5, 0, 4]);
////////////////////////////////////////////////
