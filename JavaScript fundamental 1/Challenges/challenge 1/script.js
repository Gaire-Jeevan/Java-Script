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