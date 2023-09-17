/* TEST 1 - SAMPLE SOLUTION */

/**
 * Converts a string into an acronym
 * @param {string} slogan string to be converted
 */
function tooManyWords( slogan ){
  //When the function is called and the parameter passed is empty or not a valid string, output the following to the console "Cannot complete request".
  if ( typeof(slogan)!= "string" || slogan == "" ){
    printOut("Cannot complete request");
  }else{
    //Convert string to its acronym (acronyms are abbreviations formed from the initial letters of words)
    let accronym = "";
    let words = slogan.split(" ");
    
    for (let c = 0; c < words.length; c++ ){
      //The generated acronym should be in uppercase
      accronym += words[c].charAt(0).toUpperCase();
    }
    
    //Output to the console the acronym using the following format "X stands for Y"	- X being the newly created acronym	Y being the phrase they submitted
    printOut( accronym + " stands for " + slogan );
  }
}

/**
 * Function to practice manipulating arrays
 * @returns {number} length of array
 */
function speedDial(){
  // 1. Create an array with the following 4 people: Adele, Henri, Simon, David
  let people = ["Adele", "Henri", "Simon", "David"];
  
  // 2. Using a loop, iterate through this array and console.log each one.
  loop(people);
  
  // 3. Write the command that will remove the first item, "Adele", from the array
  people.shift();
  
  // 4. Write the command that will remove the last item, "David", from the array.
  people.pop();
  
  // 5. Write the command to add "Matt" and "Peter" to the front of the array.
  people.unshift("Matt", "Peter");
  
  // 6. Write the command to add "Rick" as a new 3rd item.
  people.splice(2, 0, "Rick");
  
  //7. Using a loop, iterate through this array and console.log each one.
  loop(people);
  
  // 8. Output to the console the indexOf where "Henri" is located. 
  printOut(people.indexOf("Henri"));
  // 9. Output to the console the indexOf where "Arthur" is located.
  printOut(people.indexOf("Arthur"));
  
  // 10. Using a loop, iterate through this array and after console.log-ing "Rick", exit from the loop.
  for(let i=0; i < people.length; i++){
    printOut(people[i]);
    if (people[i] == "Rick"){
      break;
    }
  }
  // 11. Write the command to make a copy of the array using slice.
    //The copy should NOT include "Simon" or "Matt".
  let copy = people.slice(1, people.length-1);      //STEP 11
    //Output this new array to the console (no loop required)
    printOut(copy);
   
  // 12. Using the copy you made in step 11 remove "Rick" from the array and add "Laura" and "Jenn".
  copy.splice(copy.indexOf("Rick"), 1, "Laura", "Jenn");
  
  //13. Create a new variable called withBob and set it to a concatenation of: 
    //The variable create in step 1
    //The variable create in step 11
    //The string "Bob"
  
  let withBob = people.concat(copy, "Bob"); //STEP 13
  //printOut("---");printOut(people);printOut("---");
  // 14. Using a loop, iterate through the array from step 13 and console.log each one.
  loop(withBob);
  
  // 15. Output the console (no loop required): 
  //The variable created in step 1
  //The variable created in step 11
  //The variable created in step 13
  printOut(people);
  printOut(copy);
  printOut(withBob);
  
  // 16. Return the number of elements in the array created in step 13.
  return withBob.length;
  
} 


/**
 * Outputs in a loop elements provided
 * @param {*} items Items to iterate and output 
 */
function loop( items ){
  items.forEach( i => printOut( i ) );  
}


/**
 * Output to the console the provided argument
 * @param {*} x Item to oupput to the console
 */
function printOut( x ){
	console.log( x );
}