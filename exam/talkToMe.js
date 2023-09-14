/**
 * Output given parameter to the console.
 * @param {*} x Content to be printed to the console.
 */
function printOut( x ){
	console.log( x );
}
/* --- DO NOT EDIT ABOVE THIS LINE -- */

/* TEST 1 - Lisi CAO 2387145 */


/**
 * Convert a given string into an acronym and output it.
 * @param {String} slogan 
 * @returns void
 */
function tooManyWords(slogan){
	// Validate the input variable 
	if(typeof slogan != "string" || slogan.trim() === ""){
		printOut("Cannot complete request.");
		return;
	}
	// Generates the acronym
	const words = slogan.split(" ");
	let acronym = "";
	for(let word of words){
		acronym += word[0].toUpperCase();
	}

	// Outputs the acronym
	output = acronym + " stands for " + slogan
	printOut(output);
}

// Test the function with the provided examples
tooManyWords("Too Many Words");
tooManyWords("OMG. It's Test Day");
tooManyWords("It's not T-shirt season anymore");
tooManyWords("supercalifragilisticexpialidocious");
tooManyWords("");  

function excuseMeDoctor( conversation = undefined ){
  
} 

/**
 * Array manipulation
 * @returns number
 */
function speedDial(){
	// Step 1 Creates an array to store people's name
	let persons = ["Adele", "Henri", "Simon", "David"];
	
	// Step 2 output with loop
	for(let p of persons){
		printOut(p);
	}
	// Step 3 Removes the first person
	persons.shift(); // Expects 'Adele'

	// Step 4 Removes the last person
	persons.pop(); // Expects 'David'
	
	// Step 5 Adds two people to the start 
	persons.unshift("Matt", "Peter");

	// Step 6 Adds "Rick" in the third position
	persons.splice(2, 0, "Rick");

	// Step 7
	for(let p of persons){
		printOut(p);
	}

	// Step 8 Outputs index
	printOut(persons.indexOf("Henri"));

	// Step 9
	printOut(persons.indexOf("Arthur"));

	// Step 10 Outputs items until "Rick"
	for(let p of persons){
		printOut(p);
		if (p === "Rick") {
			break;
		}
	}

	// Step 11 Slices array without first and last person and outputs the new array
	let slicedArray = persons.slice(1, persons.length - 1);
	printOut(slicedArray);

	// Step 12 Remove "Rick" from slicedArray and add "Laura" and "Jenn"
	let indexRick = slicedArray.indexOf("Rick");
	if(indexRick !== -1){
		slicedArray.splice(indexRick, 1, "Laura", "Jenn");
	}
	
  	// Step 13 Combines Arrays in step 1, step 11 and "Bob"
  	let withBob = [...persons, ...slicedArray, "Bob"];

	// Step 14 Iterates withBob
	for(let p of withBob){
		printOut(p);
	}

	//Step 15 Outputs variables 
	printOut(persons);
	printOut(slicedArray);
	printOut(withBob);

	// Returning number of elements in array from step 13
	return withBob.length
} 