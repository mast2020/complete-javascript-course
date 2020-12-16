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

// const percentageOfWorld3 = population => (population / 7900) * 100;
// function percentageOfWorld3(population) {
//   return (population / 7900) * 100;
// }
// console.log(percentageOfWorld3(1441));
// console.log(percentageOfWorld3(83));
// console.log(percentageOfWorld3(330));

// function describePopulation(country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`;
// }
// const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`;
// console.log(describePopulation("China", 1441));
// console.log(describePopulation("Germay", 83));
// console.log(describePopulation("USA", 330));

//////////////////////////////////////////////////////
// Coding challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} to ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} to ${avgDolphins})`);
//   } else {
//     console.log(`No team wins (Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`);
//   }
// }

// checkWinner(avgDolphins, avgKoalas);
//////////////////////////////////////////////////////

// const populations = [83, 330, 1440, 50];
// console.log(populations.length === 4);
// const percentages = new Array(
//   percentageOfWorld3(populations[0]),
//   percentageOfWorld3(populations[1]),
//   percentageOfWorld3(populations[2]),
//   percentageOfWorld3(populations[3])
// );
// console.log(percentages);

// const neighbours = ["Austria", "Belgium", "France"];
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//   console.log('Probably not a central European country :D');
// }
// neighbours[neighbours.indexOf("Austria")] = "Poland";
// console.log(neighbours);

//////////////////////////////////////////////////////
// Coding challenge #2
// const calcTip = value => value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);
//////////////////////////////////////////////////////

// const myCountry = {
//   country: "Germany",
//   capital: "Berlin",
//   language: "German",
//   population: 83,
//   neighbours: ["Austria", "Poland"]
// }
// console.log(myCountry);

// const jonas = {
//   name: "Jonas",
//   friends: ["Michael", "Ben", "Toni"]
// }

// console.log(`${jonas.name} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// myCountry.population += 2;
// console.log(myCountry);
// myCountry["population"] -= 2;
// console.log(myCountry);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
//   },
// }

// const testArray = [1, 2];

// console.log(jonas.getSummary());
// console.log(typeof jonas);
// console.log(typeof testArray);

// const myCountry = {
//   country: "Germany",
//   capital: "Berlin",
//   language: "German",
//   population: 83,
//   neighbours: ["Austria", "Poland"],
//   describe: function () {
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0;
//     return this.isIsland;
//   },
// }

// myCountry.describe();
// console.log(myCountry.checkIsland());

//////////////////////////////////////////////////////
// Coding challenge #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height ** 2);
//     return this.BMI;
//   },
// }

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height ** 2);
//     return this.BMI;
//   },
// }

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})!`);
// } else {
//   console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})!`);
// }
//////////////////////////////////////////////////////

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

const populations = [83, 330, 1440, 50];
const percentageOfWorld3 = population => (population / 7900) * 100;

const percentages2 = [];
for (i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld3(populations[i]));
}

console.log(percentages2);