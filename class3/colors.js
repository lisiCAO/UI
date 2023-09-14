// 1. Create an array named colors that contains five different names of colors
let colors = ['red', 'blue', 'yellow', 'orange', 'purple'];

// 3. Access the first color in the array and print it to the console
console.log(colors[0]);

// 4. Access the third color in the array and print it to the console
console.log(colors[2]);

// 5. Write one line of code that changes the value of the last color in the list to "green".
colors[colors.length - 1] = 'green';

// 6. Create a new variable called fourthColor and set it equal to the fourth color in the list 
// and print it to the console.
let fourthColor = colors[3];
console.log(fourthColor);

// 7. Add the color pink to the end of the list.
colors.push('pink');

// 8. Add the color white to the beginning of the list.
colors.unshift('white');

// 9. Print the length of the array to the console with console.log()
console.log(colors.length);

// 10. Remove the last color from the end of list and print it to the console.
let removedColor = colors.pop();
console.log(removedColor);

// 11. Output every color's value and every color's index in this format
// E.g., 0, blue
for (let i = 0; i < colors.length; i++) {
    console.log(i + ', ' + colors[i]);
}
