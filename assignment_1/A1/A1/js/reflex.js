/* Assignment 1 - LISI CAO 2387145 */

//----- DO NO TOUCH BELOW ----//
// You are encouraged to use these variables but should not modify them
const targetTime = 5000; // Time (in ms) user is expected to be close to
let highScore; // Current high score
let currentTime; // Counter to track time as timer is running
let gameRecords =[];

window.addEventListener("load", prepForm); //onload event listener
//----- DO NOT TOUCH ABOVE ----//

/**
 * Setup page when the document is done loading
 */
function prepForm() {

    // Declares variables and creates buttons
    let form = document.getElementById("myForm")
    let btnStart = document.createElement("input");
    let btnEnd = document.createElement("input");
    let txtElement = document.getElementById("txtTargetTime");

    // Defines buttons
    btnStart.id = "btnStartClock";
    btnEnd.id = "btnEndClock";
    btnStart.type = "button";
    btnEnd.type = "button";
    btnStart.value = "Start Count";
    btnEnd.value = "End Count";

    form.appendChild(btnStart);
    form.appendChild(btnEnd);

    // Adds Listeners to both buttons
    btnStart.addEventListener("click", startClock);
    btnEnd.addEventListener("click", stopClock);

    // Set target text in explaination.
    txtElement.textContent = targetTime;
}

/**
 * Starts the clock
 */
function startClock() {
    // Initial current time and set interval by 1ms
    currentTime = 0;
    timerInterval = setInterval(() => {
        currentTime += 1;
    }, 1);
}

/**
 * user stops the clock
 */
function stopClock() {
    // Stops Interval
    clearInterval(timerInterval);

    // Calculate Scores
    score = Math.abs(parseInt(currentTime) - targetTime);

    // Set message and display by alert
    let message = "";
    if(highScore === undefined || highScore >= score){
        highScore = score;
        message = highScore + " is a new high score";
    } else {
        message = "Your score is " + score + " away from your high score of " + highScore;
    }
    alert(message);

    // Declare object gameRecord to store information 
   const gameRecord = {
        targetTime: targetTime,
        userStopTime: currentTime,
        score: score,
        message: message
    };

    // Push records to game Records Set
    gameRecords.push(gameRecord);

    generateScoreTable();
  }

  /**
   * Generage Score Table 
   */
  function generateScoreTable(){
    // Declare variable for the section to put table
    let informElement = document.getElementById("informUser");
    
    // Removes old table for updating
    let oldTable = document.querySelector("#scoreTable");;
    if(oldTable) oldTable.remove();

    // Declare variables for create table content
    let tableContainer = document.createElement("table");
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let tbody = document.createElement("tbody");
    let headers = ["Target Time", "User Stop Time", "Score", "Message"];

    // Defines table atrributes
    tableContainer.id = "scoreTable";
    tableContainer.style.borderCollapse = "collapse";

    // Designs header row
    headers.forEach(headerText =>{
        let th = document.createElement("th");
        th.style.border = "1px solid black";
        th.style.padding = "5px"
        th.textContent = headerText;
        headerRow.appendChild(th);
    }) 

    thead.appendChild(headerRow);
    tableContainer.appendChild(thead);

    // Designs table body and assigns values
    gameRecords.forEach(record =>{
        let tr = document.createElement("tr");
        for(let key in record){
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.padding = "5px";
            td.textContent = record[key];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    })

    tableContainer.appendChild(tbody);
    informElement.appendChild(tableContainer);
  }
  



