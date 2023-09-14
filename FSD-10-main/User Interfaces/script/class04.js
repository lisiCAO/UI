/* BUILT-IN METHODS */
/*
let amount = "123.928ss";

if ( parseFloat(amount) == amount )
	console.log("amount contains float value");
// no output because the parse float value does not equal the amount value

amount = "123.928";

if ( parseFloat(amount) == amount )
	console.log("amount contains float value");
// output visible because float value equals smount value

if ( parseFloat(amount) == amount )
	console.log("amount contains float value");
// no output because value may be the same but not the same data type


// /* NUMBERS */
amount = 1223.331231

amount.toFixed(2);	// 	1223.33
amount.toFixed(10);	// 	1223.3312310000
amount.toPrecision("10");	//	1223.331231
amount.toPrecision("15");	//	1223.33123100000
amount.toPrecision("3");	//	1.22e+3
amount.toPrecision("4");	//	1223

/* DATE */
// values will change if you test, date at current time of execution
Date.now(); //	1694612411990

// values will change if you test, date at current time of execution
Date.now(); //	1694612413214

Date.parse("September 13 2023, 9:40"); //	1694612400000
Date.parse("September 13 2023"); 	// 1694577600000
/*
// values will change if you test, date at current time of execution
let d = new Date();	// Wed Sep 13 2023 09:47:26 GMT-0400 (Eastern Daylight Time)
d.getFullYear();	//	2023
d.getDay();		//	3
d.getDate();	//	13
d.getMonth();	//	8
d.getHours();	//	9
d.getUTCHours();	//	13

let d = new Date("May 11, 2017 12:55");	//Thu May 11 2017 12:55:00 GMT-0400 (Eastern Daylight Time)
d.getMonth();	//	4
d.getDate();	//	11

let d = new Date(1578965412548);	//	Mon Jan 13 2020 20:30:12 GMT-0500 (Eastern Standard Time)
d.getDate();	//	13
d.getDay();		//	1

let d = new Date(2020, 7, 26, 5, 45);	//	Wed Aug 26 2020 05:45:00 GMT-0400 (Eastern Daylight Time)
d.getMonth();	//	7

d.setYear(2024);	// 1706763600000
// d = Thu Feb 01 2024 00:00:00 GMT-0500 (Eastern Standard Time)
d.setHours(23);	//	1706846400000
// d = Thu Feb 01 2024 23:00:00 GMT-0500 (Eastern Standard Time)

*/

function alertUser(){
	alert("This is my message");
}

function confirmUser(){
	let answer = confirm("Are you sure?");
	console.log(answer);

	if (answer){ // == true
		alert("Hooray!!");
	} else {
		alert("Oh No...");
	}
}

function promptUser(){
	let answer = prompt("What is your name?");
	console.log(answer);

	if (answer !== null ){ // == true
		alert("Hello " + answer);
	} else {
		alert("Prompt Cancelled...");
	}
}

/* timer */
let counter = 0;
function showConsole(){
	console.log("hello");
	alert("Done");
}

function showConsoleString(msg, msg2){
	console.log(counter++ + " : " + msg);
}

//let timerId = setTimeout(showConsole, 5000);

//let intervalId = setInterval(showConsoleString, 1500, "Hello",  counter++);

// create an interval every 2s show the increase amount
// 1. set interval using global variable
//let intervalId = setInterval(showCounter1, 1000);
let counter1 = 0;
function showCounter1(){
	console.log(counter1++);
}
// 2. set timeout and call itself with argument
// let timerId = setTimeout(showCounter2, 1000, 0);
function showCounter2(counter2){
	console.log(counter2++);
	timerId = setTimeout(showCounter2, 1000, counter2);
}