const fruits = ['apple', 'banana', 'cherry'];
const result = fruits.join();
console.log(result); // Outputs: apple,banana,cherry

const fruits2 = ['apple', 'banana', 'cherry'];
const result2 = fruits2.join(' - ');
console.log(result2); // Outputs: apple - banana - cherry

const fruits3 = ['apple', 'banana', 'cherry'];
const result3 = fruits3.join('');
console.log(result3); // Outputs: applebananacherry


const sentence = 'apple banana cherry';
const words = sentence.split(' ');
console.log(words); // Outputs: ['apple', 'banana', 'cherry']


const data2 = 'apple-banana-cherry';
const fruits4 = data2.split('-');
console.log(fruits4); // Outputs: ['apple', 'banana', 'cherry']


const data = 'apple-banana-cherry';
const fruits5 = data.split('-', 2);
console.log(fruits5); // Outputs: ['apple', 'banana']

const data3 = 'apple, banana; cherry, grapefruit';
const fruits6 = data3.split(/[,;]\s*/);
console.log(fruits); // Outputs: ['apple', 'banana', 'cherry', 'grapefruit']

const word = 'apple';
const characters = word.split('');
console.log(characters); // Outputs: ['a', 'p', 'p', 'l', 'e']

