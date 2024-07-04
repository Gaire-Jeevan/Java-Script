/*
1. Store Mark's and John's mass and height in variables.
2. Calcualte both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark hs heigher BMI than John.
*/

const johnMass = 92;
const johnHeight = 1.95;
const markMass = 78;
const markHeight = 1.69;

const bmiOfJohn = johnMass / johnHeight ** 2;
const bmiOfMark = markMass / (markHeight * markHeight);
console.log(bmiOfJohn, bmiOfMark);

const markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI)

// Challenge - II

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
Use a template string to include the BMI values is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" HINT: Use an if/else statement GOOD LUCK Use the BMI example from Challenge # 1 , and the code you already wrote , and improve it : 
1. Print a nice output to the console , saying who has the higher BMI . The message can be either " Mark's BMI is higher than John's ! " or " John's BMI is higher than Mark's ! " 
2. Use a template literal to include the BMI values is the outputs . Example : " Mark's BMI ( 28.3 ) is higher than John's ( 23.9 ) ! " 

HINT : Use an if / else statement 

GOOD LUCK
*/

if (bmiOfJohn > bmiOfMark) {
    console.log(`John's BMI (${bmiOfMark}) is higher than Mark's (${bmiOfJohn}) !`);
} else {
    console.log(`Mark's BMI (${bmiOfMark}) is higher than John's (${bmiOfJohn}) !`);
}