// myvar.tofixed(x);
// // Returns a string with X digits after the decimal

// myVar.toPrecision(x);
// // Returns a string with X digits in total 
// Date.now(); // Returns Unix timestamps
// Date.parse(X); //


// alert("Hello Word");
// function alertUser(word){
//     alert("word");
// }

// let answer = confirm("What is your answer");
// console.log(answer);



// function promptUser(){
//     let answer = prompt("What is your name?");
// }
// console.log(promptUser());

function showConsole(){
    console.log("Done");
}
// let timerId = setTimeout(showConsole,3000);
// let timerId2 = setInterval(showConsole, 3000);
// clearInterval(timerId2);
// clearTimerout(timerId);

function showConsoleString(msg){
    let counter = 1;
    return function() {
        console.log(counter++ + " : " + msg);
    }
}

let intervalId = setInterval(showConsoleString("alex"), 1500);
clearInterval(intervalId);

