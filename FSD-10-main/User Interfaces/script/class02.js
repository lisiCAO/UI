
// global scope variables
let firstName = "Steph";
var lastName = "Moreau";

// i has function scope (let keyword) - only exists within this block
for  (let i = 0; i <= 2; i++){
	console.log(i  +  firstName );
	// firstName is global scope so we have access everywhere
}
// console.log("i is: " + i); // error - i is undefined

// gloabl scope (var keyword) - exists everywhere
for (var v = 0; v <=2; v++){
	console.log("v:" + v);
}
console.log("v is: " + v); // global scope - exists everywhere


/**
 * 
 * @param {*} myVar 
 */
function myFuncParam(myVar){
	console.log("the parameter was: " + myVar);
}

/**
 * Ouptut parameters
 * @param {*} itemA parameter 1
 * @param {*} itemB Parameter 2
 */
function myFuncMultiParams(itemA, itemB){
	console.log(itemA + " and " + itemB);
}

const myFunc = function(){ console.log("something"); }

// optional parameter must always be last!!
/**
 * describe optional parameters
 * @param {*} itemA 
 * @param {*} itemB 
 * @param {*} [itemC=chicken] chicken by default
 */
function myFuncOptionalParam(itemA, itemB, itemC = "chicken"){
	console.log(itemA + ", " + itemB + ", and " + itemC );
}

/**
 * Function that returns a value
 * @param {*} itemA 
 * @param {*} [itemB=2]
 * @returns {string} the concatination of the parameters
 */
function myFuncReturn(itemA, itemB = "2"){
	let total = itemA + itemB ;
	return total;
}

let x = myFuncReturn("hello");
console.log(x);