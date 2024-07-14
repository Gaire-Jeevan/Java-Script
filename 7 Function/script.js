'use strict';

/*
////////////////////////////////////////////////////
// Default Parameter 

const bookings = [];

const createBooking = function(
    flightNum,
    numPassengers = 1, 
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum, 
        numPassengers, 
        price
    }
    console.log(booking);
    bookings.push(booking);
    // console.log(bookings);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


//////////////////////////////////////////////////
// Passing argument workflow 
const flight = 'LH234';
const jonas = {
    name: 'Jonas Sen',
    passport: 24681325666,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24681325666) {
        alert('Checked in');
    }
    else {
        alert('Wrong passport');
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas);
checkIn(flight, jonas);


////////////////////////////////////////////////////
// Higher Order Function (function accepting function)

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}
 
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callback all the time
const high5 = function() {
    console.log('👋');
}
document.body.addEventListener('click', high5);

['Jonas', 'Martin', 'Adam'].forEach(high5);


/////////////////////////////////////////////////////
// Function Returning function

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

// Challenge --> Arrow function
greet('Hello')('Jeevan');

const greet1 = (greeting) => {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet1('Namaste')('Ram');
greet2('Namaste')('Ram Ram');


////////////////////////////////////////////////////
// The Call and Apply method

const lufthansa = {
    airline: 'Lufth',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings  = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does Not work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

// Apply method
const flightData  = [578, 'George Bailey'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData)

// Bind method -> return function that bind '''this'''
const bookEW = book.bind(eurowings);
const bookLW = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Smith');

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Justin Beiber");


// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// as addEventListener function points to whole element so this doesn't work (output: NaN)
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes); 

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa)); 


// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addTax = value => value + value * 0.23;

console.log(addVAT(100));

// Challenge
const addTaxRate= function(rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));


/////////////////////////////////////////////////
// Immediately Invoked Function

const runOnce = function() {
    console.log('this will never run again');
};

runOnce();

// IIFE
(function() {
    console.log('this will never run again');
})();

() => console.log('this will also never run again')();

{
    const isPrivate = 16;
}
*/

/////////////////////////////////////////////////
// Closure

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();

console.dir(booker);