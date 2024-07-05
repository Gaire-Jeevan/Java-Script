/*
let js = 'amazing';

// if (js === 'amazing') {
// alert('JavaScript is amazing!')
// }

console.log(48 + 8 + 23);

let firstName = "Jeevan";

console.log(firstName);

// variable name convention
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415; // capital name for the constant variable

let myFirstJob = 'Coder'; // this type of variable name is best practice to use
let myCurrentJob = 'QA';

let job1 = 'Coder';
let job2 = 'Teacher' ;

console.log(myFirstJob);

// DataTypes
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 123);
console.log(typeof 'Jeevan');

javaScriptIsFun = 'Fun';
console.log(javaScriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);

const birthYear = 1991;
// birthYear = 1990; --> we cannot muted const variable

var job = 'Programmer';
job = 'teacher';

lastName = 'Sal'; // create variable in global
console.log(lastName)


// OPERATOR

// Math Operators
const now = 2081;
const ageJonas = now - 1991;
const ageSarah = now - 2011;
console.log(ageJonas , ageSarah);

console.log(ageJonas * 2, ageJonas /2, 2 ** 3);

const firstName = 'Jeevan';
const lastName = 'Gaire';
console.log(firstName + lastName)
console.log(firstName + " " + lastName)

console.log(typeof firstName);

// Assignment Operator
let x = 10 + 4; // 14
x += 10; // x = x + 10 = 24
x *= 10; // 240
x++; // x = x + 1 
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah); // >, <, <=, >=, ===

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2011);

const now = 2081;
const ageJonas = now - 1991;
const ageSarah = now - 2011;

console.log(now - 1991 > now - 2011);

let x, y;
x = y = 25 -10 -5; // x = y = 10, y = 10 --> x = y --> x = 10
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(averageAge);

const avgAge = (ageJonas + ageSarah) / 2;
console.log(avgAge);

// STRING
const firstName = 'Jeevan';
const job = 'Engineer';
const birthYear = 1990;
const year = 2037;

const jeevan = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + "!";
console.log(jeevan); 

const jeevanNew = `I'm ${firstName}`;
console.log(jeevanNew);

console.log(`Just a regular string...`);

console.log('String with \n\
    multiple \n\
    lines');

console.log(`String
    multiple
    lines`);

// Taking Decisions if_else
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving 🏍️');
} else {
    let yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century  = 20;
} else {
    century = 19;
}

console.log(century);

// TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number('Jeevan')); // fails to convert into Number
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3); // converted to number as there is '-' near number (reverse conversion)
console.log('23' - '10' + 3); // converted number to String as '+' is present near number
console.log('23' + '10' + 3);

let n = '1' + 1; // '1' + '1' = '11'
n = n - 1;       // 11 - 1 = 10
console.log(n);

// Truthy and Falsy Value

// 5 falsy values:- 0, '', undefined, null, NaN 
// everything else are truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jeevan'));
console.log(Boolean({}));
console.log(Boolean(''));

// JavaScript implicitly does type coercion in '''logical operation'''
const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!")
}

let height = 0; // bug
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

const age = '18';
if (age === 18) {
    console.log("You just became an adult :D (strict)");
}

if (age == 18) {
    console.log("You just became an adult :D (loose)");
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
    console.log('Why not 23?');
}
     */


// Boolean Logic

const hasDriverLicence = true;
const hasGooVision = true;

console.log(hasDriverLicence && hasGooVision);
console.log(hasDriverLicence || hasGooVision);
console.log(!hasDriverLicence);

const shouldDrive = hasDriverLicence && hasGooVision;

if (shouldDrive) {
    console.log("Sarah is able to drive!");
}

else {
    console.log("Someone else should drice...");
}

const isTired = false;
console.log(hasDriverLicence || hasGooVision || isTired);
console.log(hasDriverLicence && hasGooVision && isTired);
console.log(hasDriverLicence && hasGooVision && !isTired);