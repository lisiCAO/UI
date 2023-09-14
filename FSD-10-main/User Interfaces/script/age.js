console.log("age has loaded");

/*
We want to be able to calculate the possible age a user has.​
Store the current year in a variable.​
Store the users birth year in a variable.​
Calculate and save their 2 possible ages based on the stored values.​
Output to the console the users age​ 
You're either   X   or   Y   years old.
-----
Using your previously created file we are going to implement functions to make our code reusables
Create a function that will take a user's birth year as the only parameter.
This function should validate that the provided birth year is a number 
----
Remove the hardcoded current year from your code.
Instead use the current year provided by the built-in Date function.
----
Prompt users to provide you with a year of birth.
If they fail to provide a year ignore their request and do nothing else.
If they provide anything other then a year that is less then or equal the current year, alert them with an error message and Prompt them again
If their input pass validation, alert the user with their possible ages.

​*/

/**
 * Alerts users age based on their birth year.
 * @param {number} yearBirth The users birth year
 */
function guessAge(yearBirth){
	yearBirth = parseInt(yearBirth);
	if (isNaN(yearBirth)){
		console.log("Not a number");
		return;
	}
	let d = new Date();
	let yearCurrent = d.getFullYear(); // current year
	//let yearBirth = 1964;	// birth year

	let age1 = yearCurrent - yearBirth;
	// let age2 = yearCurrent - yearBirth - 1;
	let age2 = age1 - 1; //remove redundant code

	alert("You're either " + age1 + " or " + age2 + " years old.");

}
/**
 * Prompt user for their age and validate and 
 * 	calls guessAge() to alert them
 */
function promptAge(){
	let yearBirth; // user year of birth
	let d = new Date();
	let yearCurrent = d.getFullYear(); // current year
	let isDateGood = false;

	do{
		// Prompt users to provide you with a year of birth.
		let promptAnswer = prompt("What year were you born?");

		//If they fail to provide a year ignore their request and do nothing else.
		if (promptAnswer === null )
			return; // exit the function

		yearBirth = parseInt(promptAnswer);	// convert string into int

		// possible errors:
				//- not less than equal to current year
				//- not a number 
		
		if (isNaN(yearBirth) || yearBirth > yearCurrent){
			alert("Date is not valid");
		} else {
			isDateGood = true;
		}
	} while(!isDateGood);
	
	guessAge(yearBirth);
}





/**
 * Prompts users for birth years, validation and
 *  alerts users age based on their birth year.
 */
function guessAgeModified(){
	let yearBirth; // user year of birth
	let d = new Date();
	let yearCurrent = d.getFullYear(); // current year
	let isDateGood = false;

	do{
		// Prompt users to provide you with a year of birth.
		let promptAnswer = prompt("What year were you born?");

		//If they fail to provide a year ignore their request and do nothing else.
		if (promptAnswer === null )
			return; // exit the function

		yearBirth = parseInt(promptAnswer);	// convert string into int

		// possible errors:
				//- not less than equal to current year
				//- not a number 
		
		if (isNaN(yearBirth) || yearBirth > yearCurrent){
			alert("Date is not valid");
		} else {
			isDateGood = true;
		}
	} while(!isDateGood);
	
	//let yearBirth = 1964;	// birth year

	let age1 = yearCurrent - yearBirth;
	// let age2 = yearCurrent - yearBirth - 1;
	let age2 = age1 - 1; //remove redundant code

	alert("You're either " + age1 + " or " + age2 + " years old.");

}

