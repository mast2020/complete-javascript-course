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

const add = function (args) {
  return args.a + args.b;
};
console.log(add({ a: 5, b: 3 }));

const add2 = function ({ a, b }) {
  return a + b;
};
console.log(add2({ a: 5, b: 3 }));
