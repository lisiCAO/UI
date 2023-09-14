username = "Steph"

for(let i = 0; i <= 2; i++){
    console.log(i + username);
}


console.log("i is: " + i); 

//global scope variables 
let firstName = "Steph";
var lastName = "Moreau";

// i has function scope (let keyword) -only exists within this block
for (let i = 0; i <= 2; i++){
    console.log(i + firstName);
    // firstName is global scope so we have access everywhere
}
// console.log("i is: " + i); // error - i is undefined

// global scope (var keyword) - exists everywhere
for( var v = 0; v <=2; v++){
    console.log("v: " + v);
}
console.log("v is : " + v); // global scope - exists everywhere


function myFunctionName(){
    console.log("Hello");
    myOtherFunction();
    console.log("World = " + age);
}

function functionmyOtherFunction(){
    age = 30;
    console.log("Person");
}
myFunctionName();

/**
 * 
 * @param {*} myVar
 */
function myFuncParam(myVar){
}

/**
 * Output parameters
 * @param {*} itemA parameter 1
 */
function myFuncMultiParams(itemA, itemB){
    console.log(itemA + " and " + itemB);
}

function greet(name = "User") {
    console.log("Hello, " + name + "!");
}

greet();          // Outputs: Hello, User!
greet("Alice");   // Outputs: Hello, Alice!

/**
 * describe optional prameters
 * @param {*} itemA
 * @param {*} itemB
 * @param {*} [itemC = "chicken"]
 */

function optionalParam(itemA, itemB, itemC = "chiken"){
    console.log(itemA + ", " + itemB + ", and "+ itemC);
}

function myFuncReturn (itemA, itemB = "2"){
    let total = itemA + itemB;
    return total;
}