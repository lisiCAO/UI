/*
Using your previously created file we are going to implement functions to make our code resuables
Create a function that will take a user's birth year as the only parameter
this function should validate that the provided birth year is a number
*/

function validateBirthYear(birthYear) {
    // Check if the provided value is a number and if it's within a reasonable range for birth years
    if (typeof birthYear === 'number' && birthYear > 1900 && birthYear <= new Date().getFullYear()) {
        return true;
    } else {
        return false;
    }
}

// Usage:
const isBirthYearValid = validateBirthYear(1990);
console.log(isBirthYearValid); // should return true for this example

function guessAge(yearBirth){
    yearBirth = parseInt(yearBirth);
    if(isNaN(yearBirth)){
        console.log("Not a number")
    }else{
        let yearCurrent = 2023; // current year
        //let yearBirth = 1964; // birth year

        let age1 = yearCurrent - yearBirth;
        let age2 = age1 - 1;
    }
    console.log("You are either " + age1 + " or " + age2 + " years old.");
}

/**
 *  Outputs users age based on their birth year.
 * @param {number} yearBirth The users birth year
 */

/**
 * 
 */
