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

*/


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