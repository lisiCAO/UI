/*
Call the function *promptTable()* that will prompt the user twice for a number.  

One prompt will request a number of the row count and another prompt will request a number for the columns count.

If either prompt is cancelled, do not do anything. Your script should stop.

If a number is  provided, use its absolute integer value 

If the information in not a number or 0, use a random number between 1 and 10

If two valid inputs were provided in the prompts by the user, you will then call the function *showTable(rows, cols)* that takes two numbers as its 2 parameters.  

It will create a simple html multiplication table using the rows and columns provided and append it to body using DOM API methods createNode and createTextNode.
*/

const randomMax = 10;

function promptTable(){
	let rows = prompt("How many rows?");
	// user cacncelled, leave
	if (rows == null) return;

	let cols = prompt ("How mnay columns?");
	if (cols == null) return;

/*
	// validate the rows
	let intRows = parseInt( rows );
	if (isNaN( intRows ) || intRows != rows || intRows == 0)
		intRows = getRandomIntFrom1();

	intRows = Math.abs( intRows );

	// validate the cols
	let intCols = parseInt( cols );
	if (isNaN( intCols ) || intCols != cols || intCols == 0)
		intCols = getRandomIntFrom1();

	intCols = Math.abs( intCols );
*/
	 rows = validatePromptInput( rows );
	 cols = validatePromptInput( cols );

	 showTable(rows, cols);
}

/**
 * Validates the input from the user
 * @param {*} data user input
 * @returns {number} validated number
 */
function validatePromptInput(data){
	let newData = parseInt( data );
	if (isNaN( newData ) || newData != data || newData == 0)
		newData = getRandomIntFrom1();

	newData = Math.abs( newData );

	return newData;
}

/**
 * Generate multiplication table
 * @param {number} rows 
 * @param {number} cols 
 */
function showTable(rows, cols){
	// create table (table)
	let newTable = document.createElement("table");
	newTable.style.border = "1px solid black";
	newTable.style.borderCollapse = "collapse";

	// create rows (tr)
	for( let r = 1; r <= rows; r++){
		let newRows = document.createElement("tr");

		// create cols (td)
		for( let c = 1; c <= cols; c++){
			let newCols = document.createElement("td");
			newCols.style.border = "1px solid black";

			// add the content
			let data = document.createTextNode( r * c );
			newCols.appendChild( data ) 

			newRows.appendChild( newCols );
		}

		newTable.appendChild( newRows );
	}

	// add table to DOM
	document.querySelector("body").appendChild( newTable );
}

/**
 * Generate a random int between 1 and randomMax (inclusive)
 */
function getRandomIntFrom1(){
	return Math.floor(Math.random() *  randomMax ) + 1;
}
	 