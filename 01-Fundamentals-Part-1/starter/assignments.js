// Variable declaration
// let country = "Germany";
// let continent = "Europe";
// let population = 83000000;
// const isIsland = false;
// let language;

// Console logs
// console.log(country);
// console.log(continent);
// console.log(population);

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// language = "German";
// console.log(language);

// console.log(population / 2);
// population++
// console.log(population);
// console.log(population > 6000000);
// console.log(population < 33000000);
// const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
// console.log(description);

// -------------------------------------------------
// Coding challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massMark = 95;
// const heightMark = 1.88;
// const bmiMark = massMark / heightMark ** 2;

// const massJohn = 92;
// const heightJohn = 1.95;
// const massJohn = 85;
// const heightJohn = 1.76;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHigherBMI);
// -------------------------------------------------

// const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
// console.log(description);

// if (population > 33000000) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(`${country}'s population is ${33000000 - population} average`);
// }

// -------------------------------------------------
// Coding challenge #2
// if (markHigherBMI) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
// }
// -------------------------------------------------

// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // "617"
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// if (numNeighbours === 1) {
//   console.log("Only 1 border!")
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border")
// } else {
//   console.log("No borders")
// }

// if (language === "English" && population < 50000000 && !isIsland) {
//   console.log(`You should live in ${country} :)`)
// } else {
//   console.log(`${country} does not meet your criteria :(`)
// }

// -------------------------------------------------
// Coding challenge #3
// const averageDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 106) / 3;
// const minScore = 100;

// if (averageDolphins >= minScore && averageKoalas >= minScore && averageDolphins === averageKoalas) {
//   console.log("Draw")
// } else if (averageDolphins >= minScore && averageDolphins > averageKoalas) {
//   console.log("Dolphins win!")
// } else if (averageKoalas >= minScore && averageKoalas > averageDolphins) {
//   console.log("Koalas win!")
// } else {
//   console.log("No team wins, min score not reached by either team")
// }
// -------------------------------------------------

// const language = "spanish";

// switch (language) {
//   case "chinese or mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log('2nd place in number of native speakers');
//     break;
//   case "english":
//     console.log('3rd place');
//     break;
//   case "hindi":
//     console.log('Number 4');
//     break;
//   case "arabic":
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too :D');
// }

// const population = 13;
// console.log(`Germany's population is ${population > 33 ? "above" : "below"} average`);

// -------------------------------------------------
// Coding challenge #4
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const finalValue = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`);
// -------------------------------------------------