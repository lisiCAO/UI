/*
1. Store the users birth year in a variable.
2. Calculate and save their 2 possible ages based on the stored values.
3. Output to the console the user age
-- You're either X or Y --
*/


let yearCurrent = new Date().getFullYear
let yearBirth = new Date();
yearBirth.setFullYear('1964');
let age1 =  yearCurrent -  yearBirth;
let age2 = yearCurrent -  yearBirth - 1;
let status =(age1 > 18 ) ? "adult": "child";

console.log("your age is eithe " + age1 + " or " + age2);