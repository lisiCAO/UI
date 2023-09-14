/*
Mark and John are comparing their BMI's ( Body Mass Index)/).
BMI = mass / height ^ 2 = mass / (height * height)
    mass is in kg and height in meter

1. Store Mark and John's mass and height in variables
2. Calculate both their BMIs
3. Create a Boolean variable containing information about whether Mark has a highter BMI than John.
4. Output to the console
    Mark's BMI is : ___
    John's BMI is : ___
    Is Mark's BMI greater than John? ________
*/

var markMass = 78;
var markHeight = 1.78;

var johnMass = 92;
var johnHeight = 1.95;

var markBMI = markMass / markHeight * markHeight;
var johnBMI = johnMass / johnHeight * johnHeight;

var isMarkBMIGreater = markBMI > johnBMI;

console.log("Mark's BMI is: " + markBMI);
console.log("John's BMI is: " + johnBMI);
console.log("Is Mark's BMI greater than John? " + isMarkBMIGreater);
