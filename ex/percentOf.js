
/**
 * Determines the percentage of the first number with respect to the second.
 * @param {number} num1 
 * @param {number} num2 
 * @returns void
 */
function percentOf(num1, num2) {
    let percentage = (num1 / num2) * 100;
    console.log(num1 + " is " + percentage + "% of " + num2 + ".");
}

percentOf(2, 4);