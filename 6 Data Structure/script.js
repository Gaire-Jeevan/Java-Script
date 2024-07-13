'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHour = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // open 24 hour
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHour = openingHour;
  // ES6 enhanced object literal
  openingHour,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //

  orderDelivery({ time = '20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(
  //     `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //   );
  // },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // orderPizza: function (mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////////////////////////////////////////////////////////////////
// Working with Strings - Part III
console.log('a+very+nice+movie'.split('+'));

const [firstName, lastName] = 'John Cena'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice[1]);
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('justin beiber')

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(23, '+').padEnd(30, '+'));
console.log(message.padEnd(23, '+'));


const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(43337582363366));
console.log(maskCreditCard('545185233566666'));

// Repeat
const message2 = 'Bad weather... All Departure Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(5);
planesInLine(9);
planesInLine(12);

/*
/////////////////////////////////////////////////////////////////////////
// Working with Strings - Part II

const airline = 'Nepal Airlines';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',','.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//              regular expression    g - global
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus320neo';
console.log(plane.startsWith('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.endsWith('neo'));

if (plane.startsWith('Airbus') && plane .endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  }
  else {
    console.log('Welcome aboard!');
  }
}
checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snaks and a gun for protection');

/////////////////////////////////////////////////////////////////////////
//  Working with String - Part I

const airline = 'Nepal Airlines';
const plane = 'A330';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('e'));
console.log(airline.indexOf('Nepal'));

console.log(airline.slice(4));
console.log(airline.slice(6, 9));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s == 'B' || s === 'E') {
    console.log('You got middle seat 😁');
  }
  else{
    console.log('You got lucky 😎');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('8E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));


/////////////////////////////////////////////////////////////////////////
// Map Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHour));
const hoursMap = new Map(Object.entries(openingHour));

console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if(typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log(...question);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());


////////////////////////////////////////////////////////////////////////
// Maps: Fundamental

const rest = new Map();
rest.set('name', 'The Royal family');
rest.set(1, 'The Grand Plaza');
console.log(rest.set(2, 'Kathmandu, Nepal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open',11)
.set('close',23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

// rest.clear();
// rest.set([1, 2], 'Test')
const arr = [1, 2]
rest.set(arr, 'Test')

rest.set(document.querySelector('h1'), 'heading');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));



////////////////////////////////////////////////////////////////////////
// SETS

const orderSet = new Set([
  'Pasta', 
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza',
]);
console.log(orderSet.size);
console.log(orderSet);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

console.log(new Set('Jeevan'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');

orderSet.delete('Risotto');

// orderSet.clear();
console.log(orderSet);

for(const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chief', 'Waiter', 'Manager', 'Chief', 'Waiter'];

// extracting all unique element and making one new array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chief', 'Waiter', 'Manager', 'Chief', 'Waiter']).size);

console.log(new Set('jeevanGaire').size);


/////////////////////////////////////////////////////////
// Looping Object

// Property Names
const properties = Object.keys(openingHour);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHour);
console.log(values);

// Entire object
const entries = Object.entries(openingHour);
console.log(entries);

// [key, value]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//////////////////////////////////////////////////////////
// Optional Chaining

if (restaurant.openingHour && restaurant.openingHour.mon) console.log(restaurant.openingHour.mon.open);

// without optional chaining
// console.log(restaurant.openingHour.mon.open);

// WITH optional chaining
console.log(restaurant.openingHour.mon ?.open);
console.log(restaurant.openingHour ?.mon ?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHour[day] ?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order ?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderChowmein ?.(0,1) ?? 'Method does not exist');

// Arrays
const users = [
  {name: 'Jonas', email:'abc@abc'}
]

console.log(users[0] ?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

///////////////////////////////////////////////////////////
// Looping Arrays (The for-of Loop)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries())
{
  console.log(item);
}

for (const [i, el] of menu.entries())
{
  console.log(`${i + 1} : ${el}`);
}

///////////////////////////////////////////////////////////
// Local Assignment Operator

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'The Royal Place',
  owner: 'Ramesh',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// local assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator 
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// OR assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


///////////////////////////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests1 = restaurant.newGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


//////////////////////////////////////////////////////////

// Short circuiting (&& and ||)

// Use ANY data type, return ANY data type, short-circuiting (short-circuit evaluation)
console.log('-------------------OR----------------');

console.log(3 || 'Jonas'); // if first value is truthy value then it doesn't even read the second value

console.log("" || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || '23 || null');

restaurant.numGuests = 23;
const guests1 = restaurant.newGuests ? restaurant.numGuests : 10;
console.log(guests1);

// using short circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------------------AND----------------');
console.log(0 && 'Jonas');
console.log("hello" && 23 && null && 'jonas');

// Practical example
if(restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
// if present       then call function
console.log('if function is present then call it');
restaurant.orderPizz && restaurant.orderPizza('mushroom', 'spinach');

///////////////////////////////////////////////////////////
// 1) Destructuring

// Rest Pattern --> just opposite of Spread Operator

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHour;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinash');


///////////////////////////////////////////////////////////
restaurant.orderDelivery({
  time: '22:30',
  address: 'Here',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Here',
  starterIndex: 1,
});

///////////////////////////////////////////////////////////
// Spread Operators

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr1 = [1, 2, arr];
console.log(newArr1);

const newArr = [1, 2, ...arr];
console.log(newArr);

// this is just like writing individual element
console.log(1, 2, 7, 8, 9);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterable :- array, set, map, string but not object
const str = 'jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

console.log(...str);
// console.log(`${...str} Davis`);

const ingredients = [prompt("Let's make pasta! Ingredient1?"), prompt("Ingredient 2?"), prompt("Ingredient 3")];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Gaire'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);
console.log(restaurant);

///////////////////////////////////////////////////////////
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
