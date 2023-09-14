/*
## #5 allTheStuff(num)

Write a function that will take one argument (a number) and perform the following operations, **using the functions you wrote earlier**:  

a. Take half of the number and store the result.  
b. Square the result of (a) and store that result.  
c. Calculate the area of a circle with the result of (b) as the radius.  
d. Calculate what percentage that the original number is the area (c)

```text
allTheStuff(7);
> Half of 7 is 3.5.
> The result of squaring the number 3.5 is 12.25.
> The area for a circle with radius 12.25 is 471.43524757931834.
> 7 is 1.4848274574170994% of 471.43524757931834.
```
 */

/**
 * square a given number, and output to the console.  
 * @param {number} num 
 * @returns squareNumber
 */
function squareNumber(num){
    let squareNumber = num * num
    return squareNumber;
}

/**
 * Determines the percentage of the first number with respect to the second.
 * @param {number} num1 
 * @param {number} num2 
 * @returns percentage
 */
function percentOf(num1, num2) {
    let percentage = (num1 / num2) * 100;
    return percentage;
}


/**
 * Divides the number by 2, and output to the console.  
 * @param {number} num 
 * @returns halfNumber
 */

function halfNumber(num){
    let halfNumber = num / 2;
    return halfNumber;
}

/**
 * Calculates and outputs the area of a circle given its radius.
 * @param {number} radius 
 * @returns area
 */
function areaOfCircle(radius){
    const pi = Math.PI;
    let area = radius * radius * pi;
    return area;
}

/**
 * Takes one argument (a number) and perform several operations
 * @param num 
 * @returns void
 */
function allTheStuff(num){
    let result = halfNumber(num);
    console.log(result);
    result = squareNumber(result);
    console.log(result);
    result = areaOfCircle(result);
    console.log(result);
    result = percentOf(num, result);
    console.log(result);
}

allTheStuff(7);