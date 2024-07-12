'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hour
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '20:00', 
    address, 
    mainIndex = 0, 
    starterIndex = 1}) 
    {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: "Here",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address : "Here",
  starterIndex: 1,
})

// Object destructuring
const { name, openingHour, categories } = restaurant;
console.log(name, openingHour, categories);

const {
  name: restaurantName,
  openingHour: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// when curly braces come then javascript expect code block and in code block we cannot assign values so it is better to wrap inside paranthesis
({a, b} = obj); 

// nested objects
const {fri : {open: o, close : c}} = openingHour;
console.log(open, close);
/*
///////////////////////////////////////
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
*/
