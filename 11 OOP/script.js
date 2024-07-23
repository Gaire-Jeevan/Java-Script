'use strict';

const Person = function (firstName, birthYear) {
  console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
};

const jeevan = new Person('Jeevan', 2003);
console.log(jeevan);
// 1. New {} (object)is created
// 2. function is called, this = {}
// 3. {} to prototype
// 4. function automatically return {}

const matlida = new Person('matlida', 2017);
const jack = new Person('jack', 1975);
console.log(matlida, jack);

console.log(jeevan instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

jeevan.calcAge();
matlida.calcAge();

console.log(jeevan.__proto__);
console.log(jeevan.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jeevan));
console.log(Person.prototype.isPrototypeOf(matlida));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jeevan.species, matlida.species);

console.log(jeevan.hasOwnProperty('firstName'));
console.log(jeevan.hasOwnProperty('species'));