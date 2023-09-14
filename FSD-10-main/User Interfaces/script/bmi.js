console.log("bmi.js loaded");

/*
Mark and John are comparing their BMI's (Body Mass Index). 
BMI = mass / height^2 = mass / (height *height)
mass is in kg and height in meter

Store Mark and John's mass and height in variables
Calculate both their BMIs
Create a Boolean variable containing information about whether Mark has a higher BMI then John.
Output to the console
	Mark's BMI is : _____
	John's BMI is : _____
	Is Mark's BMI greater then John? __true/false__
*/

let markHeight, markWeigth, johnHeight, johnWeigth;
let markBmi, johnBmi;

markHeight = 1.3;
markWeigth = 40;
markBmi = markWeigth / (markHeight * markHeight);

johnHeight = 1.6;
johnWeigth= 80;
johnBmi = johnWeigth / (johnHeight * johnHeight);

let markBmiHigher = markBmi > johnBmi;

console.log("Mark's BMI is : " + markBmi);
console.log("John's BMI is : " + johnBmi);
console.log("Is Mark's BMI greater than John's? " + markBmiHigher);