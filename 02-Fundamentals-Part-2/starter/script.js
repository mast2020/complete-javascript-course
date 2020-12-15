// 'use strict';
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const germany = describeCountry("Germany", 83, "Berlin");
// const spain = describeCountry("Spain", 47, "Madrid");
// const france = describeCountry("France", 67, "Paris");

// console.log(germany);
// console.log(spain);
// console.log(france);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// console.log(percentageOfWorld1(1441));
// console.log(percentageOfWorld1(83));
// console.log(percentageOfWorld1(330));


// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// }
// console.log(percentageOfWorld2(1441));
// console.log(percentageOfWorld2(83));
// console.log(percentageOfWorld2(330));

const percentageOfWorld3 = population => (population / 7900) * 100;
// function percentageOfWorld3(population) {
//   return (population / 7900) * 100;
// }
// console.log(percentageOfWorld3(1441));
// console.log(percentageOfWorld3(83));
// console.log(percentageOfWorld3(330));

// function describePopulation(country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`;
// }
const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`;
console.log(describePopulation("China", 1441));
console.log(describePopulation("Germay", 83));
console.log(describePopulation("USA", 330));