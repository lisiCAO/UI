console.log("demo.js loaded");

// variables
let varSomething = "Steph";
let varAnything = 4;

// data types if not important
varSomething = 313;

console.log(typeof varSomething); // number


// arrays
let arrDogs = ["Fluffy", "Rex", "Pete"];

console.log(arrDogs); // show the array
console.log(arrDogs.length);	// how many items

arrDogs.indexOf("rex"); // -1 because it does not exist
let curDog = arrDogs[1];
console.log(curDog); // Rex

// Comparison operator
console.log("3" == 3); 	// true
console.log("3" === 3);	// false
// strict compare - value AND datatype
console.log( ("3" == 3) && (typeof "3" == typeof 3) )


console.log("Hello" + "\n" + "World"); // multiple lines