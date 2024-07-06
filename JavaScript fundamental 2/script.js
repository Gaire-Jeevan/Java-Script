// Strict note

'use strict';

/*
let hasDriverLicence = false;
const passTest = true;

if (passTest) {
    hasDriverLicence = true;
}

if (hasDriverLicence) {
    console.log("I can drive :D")
}

// const interface = 'Audio'; // strict note reserve this word for future use
// const private = 5434;


function logger() {
    console.log('My name is Jonas');
}

logger(); // invokin / calling / running function
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23'); // Build in function



// FUNCTION DECLARATION

function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


// FUNCTION EXPRESSION   -> function without name (anonymous function)
//                       -> expression produce value

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);


// we cannot call function for function expression but can in function declaration




// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}


// ARROW FUNCTION       --> special function expression

//              parameter
const calcAge3 = birthYear => 2037 - birthYear;  // this is value '''birthYear => 2037 - birthYear''' assigned to calcAge3 variable

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));



// Calling one function in another

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



// Reviewing Functions

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));



// ARRAYS

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(years[0]);

console.log(years.length);
console.log(years[-1]);
console.log(friends[friends.length - 1]);

friends[2] = 'Jeevan';
console.log(friends[2]);

const firstName = 'Jeevan';
const lastName = 'Gaire';
const jonas = [firstName, lastName, 2027 - 1991, 'student', friends];
console.log(jonas);


// Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const year = [1990, 1927, 2002, 2010, 2018];
console.log(calcAge(year));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);

console.log(age1, age2, age3);

const ages = [age1, age2, age3]
const ag = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ag);



// BASIC OPERATION IN ARRAY
const friends = ['Michael', 'Steven', 'Peter']


// Add element
const newLength = friends.push('Jay');   // add element at the end of the array
console.log(friends);
console.log(newLength)

friends.unshift('John'); // add element at the beginning of the array
console.log(friends);

// Remove element
const popped = friends.pop();  // last
console.log(popped);
console.log(friends);

friends.shift();  // first
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // straight check element doesn't do type coersion

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}



// OBJECTS       value pair --> give name to each value

const jeevanArray = [
    'Jeevan',
    'Gaire',
    2037 - 1991,
    'student',
    ['Bibek', 'Ram', "Hari"]
]

// object literal syntax --> giving each element of object
const jeevan = {
    firstName : 'Jeevan',
    lastName: 'Gaire',
    age: 2037 - 1991,
    job: 'student',
    friends: ['Bibek', 'Ram', "Hari"]
};


// Retrieving Objects

const jeevan = {
    firstName : 'Jeevan',
    lastName: 'Gaire',
    age: 2037 - 1991,
    job: 'student',
    friends: ['Bibek', 'Ram', "Hari"]
};

console.log(jeevan);

// dot notation require the exact property
console.log(jeevan.lastName);

// bracket notation can be used to take input from user and fill the bracket with property that user input
console.log(jeevan['firstName']);

const nameKey = 'Name';
console.log(jeevan['first' + nameKey]);
console.log(jeevan['last' + nameKey]);

// console.log(jonas.'last' + nameKey);
const interestedIn = prompt("What do you want to know about Jeevan? Choose between firstName, lastName, age, job, and friends.");

if(jeevan[interestedIn]) {
    console.log(jeevan[interestedIn])
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
}

jeevan.location = 'Portugal';
jeevan['twitter'] = '@GaireJ7';
console.log(jeevan);

// Challenge
console.log(`${jeevan.firstName} has ${jeevan.friends.length} friends, and his best friend is called ${jeevan.friends[0]}`);




// OBJECT METHOD        --> we can use function expression as value but not function declaration

const jeevan = {
    firstName : 'Jeevan',
    lastName: 'Gaire',
    birthYear: 1991,
    job: 'student',
    friends: ['Bibek', 'Ram', "Hari"],
    hasDriverLicense: false,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? "driver's licence." : "no driver's licence."}`;
    }
};

console.log(jeevan.calcAge());
// console.log(jeevan['calcAge'](1991));

console.log(jeevan.age);


// Challenge
// Jeevan is a 46-years old student and he has a driverLicence.

console.log(jeevan.getSummary());



// console.log("Lifting weights repetition 1 🏋️");
// console.log("Lifting weights repetition 2 🏋️");
// console.log("Lifting weights repetition 3 🏋️");
// console.log("Lifting weights repetition 4 🏋️");
// console.log("Lifting weights repetition 5 🏋️");
// console.log("Lifting weights repetition 6 🏋️");
// console.log("Lifting weights repetition 7 🏋️");
// console.log("Lifting weights repetition 8 🏋️");
// console.log("Lifting weights repetition 9 🏋️");
// console.log("Lifting weights repetition 10 🏋️");

// Iteration --> Loops

// for loops keep running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`)
}



// Looping Backwards and Loops

const jeevanArray = [
    'Jeevan',
    'Gaire',
    2037 - 1991,
    'student',
    ['Bibek', 'Ram', "Hari"]
];

for(let i = jeevanArray.length - 1; i >= 0; i--) {
    console.log(jeevanArray[i]);
}

// nested loop
for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`------Starting excercise ${excercise}------`);

    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Excercise ${excercise}: Lifting weights repetition ${rep} 🏋️`)
    }
}
*/


// While loop

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}

console.log("-----while loop-----");
let rep = 0;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6 ) console.log('Loop is about to end...')
}