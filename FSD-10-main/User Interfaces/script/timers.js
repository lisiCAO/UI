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