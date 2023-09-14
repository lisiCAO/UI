/* 
Write a program that uses console.log ito print all the numbers rom 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

let i = 0;
do{
    i+=1;
    if(i % 3 == 0){
        console.log("Fizz");
    }else if (i % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log("i :" + i);
    }
}while(i <100);

// let i = 0;
// do {
//     i += 1;
//     let output = ""; // reset output for each loop iteration

//     if (i % 3 === 0) {
//         output += "Fizz";
//     }
//     if (i % 5 === 0) {
//         output += "Buzz";
//     }
//     if (output === "") {
//         output = i;
//     }

//     console.log(output);
// } while (i < 100);


/*
When you have that working, modify your program to print "FizzBuzz" for numbers 
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" 
for numbers divisible by only one of those).
*/
console.log("\n Modification: FizzBuzz for ones divisible by both 3 and 5.")
i = 0;
do{
    i+=1;
    if(i % 5 ==0 && i % 3 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }else if (i % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log("i :" + i);
    }
}while(i <100);

/*
1. Create an array of numbers 
    Find the sum of all the numbers and output it to the console

2. Loop through a string 
Remove all the vowels(a,e,i,o,u)
*/

let arrNums =  [5 , 4 , 5 , 4 , 86 , 21 , 2 , 5 , 6 ]
let total = 0;
for(let a = 0; a < arrNums.length; a++){
    total += arrNum[a];
}
console.log("The total is : " + total)
