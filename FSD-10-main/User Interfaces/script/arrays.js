/* 
Write a  function which accept a string as input 
Swap the case of each character
Output the result to the console

swapCase("Orange Ninja Cats"); // "oRANGE nINJA cATS"

Hint 1: Create two arrays that contain each letter of the alphabet
Hint 2: Find the index of the letter you are looking for (conditional statement)
*/

/**
 * Swap the character case of given parameter
 * @param {string} strOriginal string to convert
 */
function swapCase(strOriginal){
	let strNew = "";
	let arrUpper, arrLower;

	arrUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	arrLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	for (let i = 0; i < strOriginal.length; i++){
		let curChar = strOriginal[i]; // save time

		if (arrUpper.indexOf(curChar) != -1){
			// i have an uppercase letter
				let nexIndex = arrUpper.indexOf(curChar);
				strNew += arrLower[ nexIndex ];
		} else if (arrLower.indexOf( curChar ) != -1 ){
			// i have a lower case letter
			let newIndex = arrLower.indexOf(curChar);
			strNew += arrUpper[ newIndex ];
		} else 
			strNew += curChar;
	}
	
	console.log(strNew);
}

swapCase("Hello World!!??#");
swapCase("Orange Ninja Cats");

/*
Write a function that accepts a string as an input
Remove all vowels from the string
A, E, I ,O U
Return the new string
Output the returned values to the console
*/

function removeVowels(strOriginal){
	let arrVowels = ["A","E","I","O","U","a","e","i","o","u"];
	let strNew = "";

	for( let i = 0; i < strOriginal.length; i++){
		let curChar = strOriginal[ i ]; // current character in the loop
		if (arrVowels.indexOf(curChar) == -1){
			strNew += curChar;
		}
	}

	return strNew;
}

console.log( removeVowels("Hello World!") );