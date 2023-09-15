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
  let formContainner = document.getElementById("myForm");

  let btnStart = document.createElement("input");
  btnStart.type = "button";
  btnStart.id = "btnStartClock";
  btnStart.value = "Start Count";
  btnStart.addEventListener("click", startClock);

  let btnEnd = document.createElement("input");
  btnEnd.type = "button";
  btnEnd.id = "btnEndClock";
  btnEnd.value = "End Count";
  btnEnd.addEventListener("click", stopClock);

  formContainner.appendChild(btnStart);
  formContainner.appendChild(btnEnd);

  let timerElement = document.getElementById("txtTargetTime");
  timerElement.textContent = targetTime.toString();
}
/**
 * Starts the clock
 */

function startClock() {
    currentTime = 1;
  timerInterval = setInterval(function () {
    currentTime += 1;
  }, 1);
}

/**
 * user stops the clock
 */
function stopClock() {
    clearInterval(timerInterval);
    console.log(currentTime);
    let score = Math.abs(currentTime - targetTime);
    alert(`Your score is: ${score}`);
  
    let message = "";
    if (highScore == null || highScore >= score) {
      highScore = score;
      message = highScore + " is a new high score";
    } else if (highScore < score) {
      message =
        "Your score is " + score + " away from your high score of " + highScore;
    }
  
    const gameRecord = {
      targetTime: targetTime,
      userStopTime: currentTime,
      score: score,
      message: message
    }
    gameRecords.push(gameRecord);
  
    let oldTable = document.getElementById("scoreTable");
    if (oldTable) oldTable.remove();
  
    const tableContainer = document.createElement("table");
    tableContainer.id = "scoreTable";
    tableContainer.style.borderCollapse = "collapse";
    
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
  
    let headers = ["Target Time", "User Stop Time", "Score", "Message"];
    headers.forEach(headerText => {
      let th = document.createElement("th");
      th.style.border = "1px solid black";
      th.style.padding = "5px";
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    thead.appendChild(headerRow);
    tableContainer.appendChild(thead);
  
    let tbody = document.createElement("tbody");
    gameRecords.forEach(record => {
      let tr = document.createElement("tr");
  
      for (let key in record) {
        let td = document.createElement("td");
        td.style.border = "1px solid black";
        td.style.padding = "5px";
        td.textContent = record[key];
        tr.appendChild(td);
      }
  
      tbody.appendChild(tr);
    });
  
    tableContainer.appendChild(tbody);
    document.getElementById("informUser").appendChild(tableContainer);
  }
  



