'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {

        // Creating NEW variable with same name as outer scope's variable
        const firstName = 'Steven';

        // Reassigining outer scope's variable
        output = 'New Output';

        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);

        function add(a, b) {
            return a + b;
        }
    }
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);


const x = 5; // Assign 5 to x

if (x === 5) {
// console.log(`jonas is a ${job}`);
const job = 'teacher';
}


// HOISTING

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me =  'Jonas';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example

if(!numProducts) deleteShoppingCart(); // undefined so all product delete

var numProducts = 19; 

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var a = 1;
let y = 2;
const z = 3;

console.log(a === window.a);
console.log(y === window.y);
console.log(z === window.z);


//  THIS keyword


console.log(this);

const calcAge1 = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge1(1991);

const calcArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}
calcArrow(1990);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this.year);
    }
}
jonas.calcAge();

const matilda = {
    year: 2017
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

// f();


// Pitfall of this keyword

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this.year);
    console.log(2037 - this.year);

    // Another pitfall

    // solution 1 of pitfall

    // const self = this; // self or that
    // const isMillenial = function() {

    //     console.log(self.year >= 1981 && self.year <= 1996);

    //     // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);

      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  //   Avoid arrow function as arrow function doesn't have it's '''this''' keyword
  greet: () => console.log(`Hey ${this.firstName}`), // this --> window object so undefined (window.firstName)
};

jonas.greet();
jonas.calcAge();

// Argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 10);
*/