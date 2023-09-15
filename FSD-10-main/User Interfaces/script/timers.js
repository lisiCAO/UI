console.log("timers loaded");
/*
Write a function name bgTimer 
Every 2.6 seconds output to the console the words right and left (alternating) 
Every 3.9 seconds alternate the words UP and DOWN (alternating)
After 15 seconds alert the user "I'm so dizzy" and stop all the timers
*/

let timerRL, timerUD, timerDizzy;
let countRL = 0, countUD = 0;

/**
 * setup timeouts and intervals
 */
function bgTimer(){

	timerRL = setInterval(printRL, 2600);
	timerUD = setInterval(printUD, 3900);
	timerDizzy = setTimeout(printDizzy, 15000);

}
/**
 * output to the console the words right and left (alternating) 
 */
function printRL(){
	if (countRL++ % 2){
		console.log("Right");
	} else {
		console.log("Left");
	}
}

/**
 * alternate the words UP and DOWN (alternating)
 */
function printUD(){
	console.log( (countUD++%2) ? "Up" : "Down" );
}

/**
 * alert the user "I'm so dizzy" and stop all the timers
 */
function printDizzy(){
	clearInterval(timerRL);
	clearInterval(timerUD);
	clearTimeout(timerDizzy); // not needed as this is cleared once executed

	alert("I'm so dizzy");
}


/*

Create a new timer that will change the background of body every 2 seconds and alternate between black and red.
Create a time that will alternate all the H1 text between black and orange every 2.5 seconds.
Make sure that your colors will never be black at the same time.

Instead of alerting "I'm so dizzy" to your user, change the html of body to show the following code : 
	<h1>I'm so dizzy</h1>

*/

let timerBgBody, timerH1Color;
let countBgBody = 0, countH1color = 0; 
let colorBgBody, colorH1Color;

/**
 * Setup timeout and intervals for DOM practice
 */
function setupDomTimers(){
	timerBgBody = setInterval(changeBgBody, 2000);
	timerH1Color = setInterval(changeH1Color, 2500);

}

/**
 * Change body's background color
 */
function changeBgBody(){
	let bodyElem = document.querySelector("body");

	colorBgBody = (countBgBody++%2 && colorH1Color!= "black") ? "black" : "red";
	
	bodyElem.style.backgroundColor = colorBgBody;
}

function changeH1Color(){
	let allH1 = document.getElementsByTagName("h1");

	let currentBgBody = document.querySelector("body").style.backgroundColor;
	if (countH1color++ % 2 && currentBgBody != "black")
		colorH1Color = "black"
	else 
		colorH1Color = "orange";

	for (let i =0; i<allH1.length; i++){
		allH1[i].style.color = colorH1Color;
	}
}