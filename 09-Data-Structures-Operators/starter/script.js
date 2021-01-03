'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// Mutating variables

// let a = 111;
// let b = 999;
// console.log(a, b);
// const obj = { x: 1, y: 2, z: 3 };
// ({ x: a, y: b } = obj);
// console.log(a, b);

// Avoiding argument-order-dependency

// const add = function (args) {
//   return args.a + args.b;
// };
// console.log(add({ a: 5, b: 3 }));

// const add2 = function ({ a, b }) {
//   return a + b;
// };
// console.log(add2({ a: 5, b: 3 }));

// REST and objects

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const { fri, ...remainder } = restaurant.openingHours;
// console.log(fri);
// console.log(remainder);

// --- CODING CHALLENGE 1 ---

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// Task 1:
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];

// Task 2:
// const [gk, ...fieldPlayers] = players1;

// Task 3:
// const allPlayers = [...players1, ...players2];

// Task 4:
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Task 5:
// const { team1: team1, x: draw, team2: team2 } = game.odds;

// Task 6:
// const printGoals = function (...playerNames) {
//   for (let i = 0; i < playerNames.length; i++) {
//     console.log(playerNames[i]);
//   }
//   console.log(`Total number of goals: ${playerNames.length}`);
// };

// printGoals(...game.scored);

// Task 7:
// console.log((team1 < team2 && 'team1') || 'team2');

// --- CODING CHALLENGE 2 ---

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
for (const [number, player] of game.scored.entries()) {
  console.log(`Goal ${number + 1}: ${player}`);
}

// Task 2
let sumOfOdds = 0;
for (const odd of Object.values(game.odds)) {
  sumOfOdds += odd;
}
const averageOdd = sumOfOdds / Object.values(game.odds).length;
console.log(averageOdd);

// Task 3
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[team] ? 'victory ' + game[team] : 'draw'}: ${odd}`
  );
}

// Task 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
}
console.log(scorers);
