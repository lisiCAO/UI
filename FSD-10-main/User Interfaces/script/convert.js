console.log("convert.js");
/*
Create functions for the 4 different calculation we have in our file
	convertC2F(x)
	convertF2C(x)
	convertLbs2Kg()
	convertKg2Lbs()
Using the built-in Number methods, toFixed the output so that the does not exceed 2 decimals spaces
2 decimal for the KG
1 decimal for the temperatures
0 decimal for the LBS
*/

/*
Store a Celsius temperature into a variable.
Save the converted Fahrenheit temperature in a variable
C to F = Multiply by 9, then divide by 5, then add 32
Output to the console.	X   C is    Y   F.
*/

/**
 * output converted temperature from C to F
 * @param {number} celsius temperature to convert
 */
function convertC2F( celsius ){
	// celsius = 40;
	
	// if wrapped in parentheses, expression is number and can use toFixed
	let fahrenheit = (( ( celsius * 9 ) / 5 ) + 32).toFixed(1);
	console.log(celsius + "C is " + fahrenheit + "F");
}
/*
 Store a Fahrenheit temperature into a variable.
Save the converted Celsius temperature in a variable
F to C = Subtract 32, then multiply by 5, then divide by 9
Output to the console.	X   F is    Y   C.
*/

/**
 * output converted temperature form F to C
 * @param {number} fahrenheit temperature to convert
 */
function convertF2C(fahrenheit){
	// fahrenheit = 32;
	let celsius = ( ( fahrenheit - 32 ) * 5) / 9;
	// tofixed on output variable
	console.log( fahrenheit + "F is " + celsius.toFixed(1) + "C");
}
/*
Store a weight value in pounds
Save the converted kilogram weight in a variable
KG = LBS / 2.2046
Output to the console.	X   lbs is  Y   kg.
*/
/**
 * output converted weight from lbs to kg
 * @param {number} lbs weight to be converted
 */
function convertLbs2Kg(lbs){
	//	lbs = 120;
	let kg = lbs / 2.2046;
	console.log(lbs + "lbs is " + kg.toFixed(2) + "kg");
}

/*
Store a weight value in kilograms
Save the converted pounds weight in a variable
LBS = KG / 0.454
Output to the console. X   kg is  Y   lbs.
*/
/**
 * output converted weight form kg to lbs 
 * @param {Number} kg weight to be converted
 */
function convertKg2Lbs(kg){
	// kg = 60;
	let lbs = kg / 0.454;
	console.log(kg + "kg is " + lbs.toFixed(0) + "lbs");
}