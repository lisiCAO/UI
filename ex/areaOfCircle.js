
/**
 * Calculates and outputs the area of a circle given its radius.
 * @param {number} radius 
 * @returns void
 */
function areaOfCircle(radius){
    const pi = Math.PI;
    let area = radius * radius * pi;
    console.log("The area for a circle with radius " + radius + " is " + area + ".");
}

areaOfCircle(2);