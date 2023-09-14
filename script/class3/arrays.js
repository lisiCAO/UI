
/**
 * Accepts a string as input and output swaped case of each character
 * @param {string} str 
 * @returns void
 */
function swapCase(str) {
    let result = '';

    for (let char of str) {
        if (char === char.toLowerCase()) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }

    console.log(result);
    return result;  // Optionally, you can return the result as well.
}

// Example usage:
swapCase("Hello World");  // Outputs: hELLO wORLD

/**
 * Accepts a string as input and output swaped case of each character
 * @param {string} str 
 * @returns void
 */
function swapCase2(str) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Array of lowercase letters
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // Array of uppercase letters

    let result = '';

    for (let char of str) {
        // Check if character is lowercase
        if (lowercase.includes(char)) {
            // Find the index of the character in the lowercase array
            let index = lowercase.indexOf(char);
            // Add the corresponding uppercase character to the result
            result += uppercase[index];
        }
        // Check if character is uppercase
        else if (uppercase.includes(char)) {
            // Find the index of the character in the uppercase array
            let index = uppercase.indexOf(char);
            // Add the corresponding lowercase character to the result
            result += lowercase[index];
        }
        // If the character is neither uppercase nor lowercase (like numbers, punctuation, etc.), just add it to the result as is
        else {
            result += char;
        }
    }

    console.log(result);
    return result; 
}

    // Example usage:
swapCase("Hello World");  // Outputs: hELLO wORLD


/*
Write a function that accepts a string as an input
Remove all vowels from the string
 A E I O U
 Return the new string
 Output the returned values to the console
 */

 /**
  * Removes all vowels from the string given
  * @param {string} str 
  * @return void
  */
 function removeVowels(str){
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let result = ""

    for(let char of str){
        if(vowels.includes(char)){
            result += "";
        }else{
            result += char;
        }
    }
    console.log(result);
 }
 removeVowels("Array");


 function removeVowels2(str){
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let result = "";

    for(let char of str){
        if(vowels.has(char)){
            continue;
        }
        result += char;
    }
    
    console.log(result);
}

removeVowels2("Hello World"); // Expected output: "Hll Wrld"
