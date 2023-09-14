/* 
Create an array named colors that contains five different names of colors 
Colors should be red, blue, yellow, orange, purple 
Access the first color in the array and print it to the console
Access the third color in the array and print it to the console
Write one line of code that changes the value of the last color in the list to "green".
Create a new variable called fourthColor and set it equal to the fourth color in the list  and print it to the console.
Add the color pink to the end of the list.
Add the color white to the beginning of the list.
Print the length of the array to the console with console.log()
Remove the last color from the end of list and print it to the console.
Output every color's value and every color's index in this format: 
3, purple or 0, blue etc.
*/


// Create an array named colors that contains five different names of colors 
// Colors should be red, blue, yellow, orange, purple 
let colors = ["red", "blue", "yellow", "orange", "purple"];

// Access the first color in the array and print it to the console
console.log( colors[0] );

// Access the third color in the array and print it to the console
console.log( colors[2] );

// Write one line of code that changes the value of the last color in the list to "green".
colors[ colors.length - 1 ] = "green";

// Create a new variable called fourthColor and set it equal to the fourth color in the list  and print it to the console.
let fourthColor = colors[3];
console.log(fourthColor);

// Add the color pink to the end of the list.
colors.push("pink");

// Add the color white to the beginning of the list.
colors.unshift("white");

// Print the length of the array to the console with console.log()
console.log( colors.length );

// Remove the last color from the end of list and print it to the console.
//console.log( colors.pop() );
let removedColor = colors.pop();
console.log(removedColor);

// Output every color's value and every color's index in this format:  3, purple / 0, blue etc.
for (let i = 0; i < colors.length; i++){
	console.log(i + ", " + colors[i] );
}

for(let x in colors){
	console.log(x + ", " + colors[x] );
}