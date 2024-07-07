// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - how to compute max and min temperature?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - how to ignore error?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }

    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - with 2 array, should we implement functionality twice? Answer:- NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }

    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

const measureKelvin = function () {
  const measeurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX --> making return of prompt to Number
    // value: Number(prompt('Degree celsius: ')),
    value: 10,
  };

  //   B) FIND
  console.log(measeurement);
  console.table(measeurement);

  // console.log(measeurement.value);
  // console.warn(measeurement.value);
  // console.error(measeurement.value);

  const kelvin = measeurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Fixing another bug -> Using debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) {
      max = curTemp;
    }

    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) Identify
console.log(amplitudeNew);
