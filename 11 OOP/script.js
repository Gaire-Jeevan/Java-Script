'use strict';

/*
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

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};

Person.hey();
//////////////////////////////////////////////////
// Prototype
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

console.log(jeevan.__proto__);
// Object.prototype (top of prototupe chain)
console.log(jeevan.__proto__.__proto__);
console.log(jeevan.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const justin = new PersonCl('Justin Sharma', 1998);
console.log(justin);
justin.calcAge();

console.log(justin.age);

console.log(justin.__proto__ === PersonCl.__proto__);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
justin.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizs
// 3. classes are executed in strict mode

PersonCl.hey();

const walter = new PersonCl('Walter', 1965);
const account = {
  owner: 'Javas',
  movements: [200, 350, 150, 386],

  // latest() {
  //   return this.movements.slice(-1).pop();
  // },

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

////////////////////////////////////////////////
// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const stevenSmith = Object.create(PersonProto);
console.log(stevenSmith);
stevenSmith.name = 'Smith';
stevenSmith.birthYear = 2003;
stevenSmith.calcAge();

console.log(stevenSmith.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('sarah', 1850);
console.log(sarah);


/////////////////////////////////////////////////////
// Inheritance Between "Classes": constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const michale = new Student('Mike', 2020, 'Computer Science');
console.log(michale);
michale.introduce();
michale.calcAge();

console.log(michale instanceof Student);
console.log(michale instanceof Person);
console.log(michale instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor)


////////////////////////////////////////////////////////////////////////
// Inhreritance Between Classes and ES6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

class StudetnCl extends PersonCl{
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  };

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear}`);
  }
}

const john = new StudetnCl('John Cena', 2012);



////////////////////////////////////////////////////////////////////////
// Inhreritance Between Classes: Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const stevenSmith = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

////////////////////////////////////////////////////////////////////////
// Another class example

// there are 4 fields and methods
// 1. Public field
// 2. Private "
// 3. Public method
// 4. Private "
// (there is also the static version)

class Account {
  // 1. Public field
  locale = navigator.language;
  _movemetns = [];

  // 2. Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // placing _ in-front of property is just a convention developer himself should undertand about it not to access such property from outside
    this.#pin = pin;
    // this._movemetns = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3. Public method

  // returning encapsulated property
  getMovements() {
    return this.#movements;
  }

  // Public interface
  deposits(val) {
    this._movemetns.push(val);
    return this;
  }

  withdraw(val) {
    this.deposits(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposits(val);
      console.log(`Loan approved!`);
      return this;
    }
  }

  // static
  static helper() {
    console.log('helper');
  }
  // 4. Private method
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('John', 'USD', 2585);
console.log(acc1);

// instead of accessing property like this we can use methods to interact with it
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposits(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
// console.log(acc1.#movemetns);
// console.log(acc1.#pin);
// console.log(acc1.#approvedLoan);

Account.helper();

////////////////////////////////////////////////////////////////////
// Chaining

acc1.deposits(300).deposits(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());