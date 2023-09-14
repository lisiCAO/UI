console.log("fortune.js loaded");

/*
Your fortune is soon to be revealed​
Store the following information in variables​
Number of children​
Partner's name​
Job Title​
Geographical Location​
Name for a Dog​
Output to the console the users fortune​
-----
Turn the script into a function
The last parameter should be Number of Kids
Number of kids should have a default value of 0

Change the sentence structure depending on number of children.  
if NUMBER OF KIDS is 0, do not mention them
…and live in   G   with your dog   D .
if NUMBER OF KIDS is 1, kids is singular
…and live in   G with your 1 kid and your dog   D .
if NUMBER OF KIDS is greater then 1, kids is plural
…and live in   G with your   N   kids and your dog   D .
if NUMBER OF KIDS is less then 0, do not mention them
…and live in   G with your dog   D  .

*/

function fortune(partner, job, geoLocation, dog, numKids=0){
	let fortune; 
	//-- setup fortune
	// different wasy to concatenate a string
	fortune = "You will be a ";
	fortune += job;
	fortune += " who will one day marry ";
	fortune += partner;
	fortune += " and live in " + geoLocation + " with ";
	
	// conditional kids
	if (numKids > 0 ){

		/*
		fortune += "your " + numKids + " ";
		if (numKids == 1) fortune += "kid";
		else fortune += "kids";
		*/
		/*
		fortune += "your " + numKids + " kid";
		if (numKids > 1) fortune += "s";
		*/
		fortune += "your " 
							+ numKids 
							+ " kid" 
							+ ((numKids > 1)?"s":"") 
							+" and ";
	}
	
	fortune += "your dog " + dog;

	console.log(fortune);
}