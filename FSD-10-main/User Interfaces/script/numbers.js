/**
 * Squares a number, and output to the console
 * @param {number} num Numebr to be squared
 * @returns {number} Squared number value
 */
function squareNumber(num){
	let squaredNumber = num * num;
	console.log("The result of squaring the number " + num + " is " + squaredNumber + ".");
	return squaredNumber;
}

/**
 * Divides number by 2, and output to the console
 * @param {number} num Number to be halved
 * @returns {number} Halved number
 */
function halfNumber(num){
	let half = num / 2;
	console.log("Half of " + num + " is " + half + ".");
	return half;
}

/**
 * Find what percent the first number represents of the second number
 * @param {number} num1 Percentage of this number
 * @param {number} num2 Represented in this number
 * @returns {number} Percentage of number
 */
function percentOf(num1, num2){
	let percent = ((num1 * 100) / num2);
	console.log(num1 + " is " + percent + "% of " + num2 + ".");
	return percent;
}

/**
 * Calculates the area of a circle
 * @param {number} num Radius of the circle 
 * @returns {number} Area of the circle
 */
function areaOfCircle(num) {
	let area = (squareNumber(num) * Math.PI);
	console.log("The area for a circle with radius " + num + " is " + area + ".");
	return area;
}

/**
 * Combines previous function
 * @param {number} num Number used to start the calculations
 */
function allTheStuff(num){
	//	a. Take half of the number and store the result.
	let result = halfNumber(num);
	
	//	b. Square the result of (a) and store that result.
	result = squareNumber(result);
	
	//	c. Calculate the area of a circle with the result of (b) as the radius.
	let area = areaOfCircle(result)

	//	d. Calculate what percentage that the original number is the area (c).
	percentOf(num, area);
}