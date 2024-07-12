'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Array distructuring
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
const [first1, , third] = restaurant.categories;
console.log(first, second);
console.log(first1, third);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// to swap main and secondary
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// swap using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// return 2 values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
