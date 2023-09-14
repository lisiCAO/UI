/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i = 1; i<=100; i++){
	/*
	if ( ((i%3)== 0) && ((i%5) ==0)){ // divisible by 3 and 5
		console.log("FizzBuzz");
	} else if ( (i % 3) == 0) { // divisible by 3
		console.log("Fizz");
	} else if ( (i % 5) == 0){ // divisible by 5 (not 3)
		console.log("Buzz");
	}	else{ 
		console.log(i);
	}

		*/
	if ( ((i%3)== 0) && ((i%5) ==0)){ // divisible by 3 and 5
		console.log("FizzBuzz");
		continue;
	} 
	if ( (i % 3) == 0) { // divisible by 3
		console.log("Fizz");
		continue;
	} 
	if ( (i % 5) == 0){ // divisible by 5 (not 3)
		console.log("Buzz");
		continue;
	}	
		
	console.log(i);
	
	
}
/*

for (let i = 1; i<=100; i++){
	let output = "";
	if ( (i%3) == 0){
		output = "Fiz";
	}

	if ( (i%5) == 0){
		output += "Buzz";
}

	if (output == ""){
	//if ((i%3) !=0 && (i%5) != 0)
		output = i;
	}

	console.log(output);

}

*/
/*
let x = 0;

while (++x <= 100){
	let output = "";
	if ( (x%3) == 0) output = "Fizz";
	if ( (x%5) == 0) output += "Buzz";
	console.log( ( (output == "") ? x : output)  );
}
*/
let arrNums = [5,4,5,4,86,21,2,5,6];
let total = 0;
for (let a = 0; a < arrNums.length; a++){
	total += arrNums[a];
}
console.log("the total is: " + total);