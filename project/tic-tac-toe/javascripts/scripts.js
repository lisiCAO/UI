/*
  Gravity Tic-Tac-Toe
  JavaScript file for the Gravity Tic-Tac-Toe game
  Author: Group ForxTox
   Team members: 
    - Cao, Lisi
    - Kim, Sang Kyu
    - Kim, Bo Kyung
  Date: 2023-09-21
  Version: 2.3
 */

document.addEventListener("DOMContentLoaded", function () {
  // DOM elements initialization
  const playerNumberSelection = document.querySelector(
    "#player-number-selection"
  );
  const symbolSelection = document.querySelector("#symbol-selection");
  const boardSizeSelection = document.querySelector("#board-size-selection");
  const startGameButton = document.querySelector("#start-game");
  const gameArea = document.querySelector("#game-area");
  const messageDiv = document.getElementById("message");
  const leaderboardBtn = document.getElementById("show-leaderboard");
  const leaderboardModal = document.getElementById("leaderboard-modal");
  const leaderboardList = document.getElementById("leaderboard-list");
  const closeBtn = document.querySelector(".close");
  // Game variables initialization
  let currentTurn = 0;
  let symbols = [];
  let winners = [];
  let countdownTimeout;
  let countdownInterval;
  const initialTime = 30; // 30 seconds
  let currentTime = initialTime;

  let gameRulesData = {}; // initialize as an empty object
  fetch("javascripts/game_guide.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      gameRulesData = data;
      // Add event listener here
      document.getElementById('showRules').addEventListener('click', function() {
        const modal = document.getElementById('gameRulesModal');
        modal.innerHTML = '';  
      
        gameRulesData.sections.forEach(section => {
            const sectionElem = document.createElement('div');
      
            // Only add title and content if they exist and are not undefined
            if (section.title) sectionElem.innerHTML += `<h2>${section.title}</h2>`;
            if (section.content) sectionElem.innerHTML += `<p>${section.content}</p>`;
            
            modal.appendChild(sectionElem);
            
            if (section.subsections) {
                section.subsections.forEach(sub => {
                    const subSectionElem = document.createElement('div');
      
                    // Only add title and content if they exist and are not undefined
                    if (sub.title) subSectionElem.innerHTML += `<h3>${sub.title}</h3>`;
                    if (sub.content) subSectionElem.innerHTML += `<p>${sub.content}</p>`;
                    
                    sectionElem.appendChild(subSectionElem);
                });
            }
        });
      
        modal.style.display = 'block';  
        document.getElementById("launcher").style.display = "none";
      });
    })
    .catch((error) => {
      console.error("Fetch error: ", error.message);
    });

  // Optionally: Close the modal when clicking outside
  document
    .getElementById("gameRulesModal")
    .addEventListener("click", function () {
      this.style.display = "none"; // Hide the modal
      document.getElementById("launcher").style.display = "block";
    });

  // Event listeners for leaderboard modal
  leaderboardBtn.addEventListener("click", showLeaderboard);
  closeBtn.addEventListener("click", function () {
    leaderboardModal.style.display = "none";
  });
  // Update symbol dropdown when player count changes
  playerNumberSelection.addEventListener("change", (event) => {
    const numberOfPlayers = parseInt(event.target.value);
    populateSymbolSelection(numberOfPlayers);

    // Handle board size options based on player number
    let easyOption = boardSizeSelection.querySelector('option[value="easy"]');
    if (numberOfPlayers === 3) {
      easyOption.disabled = true;
      if (easyOption.selected) {
        easyOption.selected = false;
        boardSizeSelection.querySelector(
          'option[value="middle"]'
        ).selected = true;
      }
    } else {
      easyOption.disabled = false;
    }
  });
  /**
   * Populate the symbols dropdown based on number of players
   * @param {number} numberOfPlayers
   */
  function populateSymbolSelection(numberOfPlayers) {
    symbolSelection.innerHTML = ""; // Clear previous selections

    for (let i = 0; i < numberOfPlayers; i++) {
      const symbolDiv = document.createElement("div");
      const label = document.createElement("label");
      label.textContent = `Player ${i + 1} Symbol:`;
      const select = document.createElement("select");

      ["X", "O", "Z", "W"].slice(0, numberOfPlayers).forEach((symbol) => {
        const option = document.createElement("option");
        option.value = symbol;
        option.textContent = symbol;
        select.appendChild(option);
      });

      symbolDiv.appendChild(label);
      symbolDiv.appendChild(select);
      symbolSelection.appendChild(symbolDiv);
    }
  }

  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }
  /**
   * Prepare Game Board
   */
  // Game initialization on "start game" button click
  startGameButton.addEventListener("click", () => {
    const playerNumberRadioButtons = document.querySelectorAll(
      "#player-number-selection input[type='radio']"
    );
    const checkedRadioButton = Array.from(playerNumberRadioButtons).find(
      (radio) => radio.checked
    );
    // Check if player number is selected
    if (!checkedRadioButton) {
      alert("Please select the number of players before starting the game!");
      return;
    }

    const numberOfPlayers = parseInt(checkedRadioButton.value);
    const selectedSymbols = Array.from(
      symbolSelection.querySelectorAll("select")
    ).map((select) => select.value);
    // Check if all players have selected symbols
    if (hasDuplicates(selectedSymbols)) {
      alert(
        "Please ensure all players have unique symbols before starting the game!"
      );
      return;
    }

    startGameNavbar();
    updateMessage();
    // Gather selections
    symbols = Array.from(symbolSelection.querySelectorAll("select")).map(
      (select) => select.value
    );
    const boardSize = boardSizeSelection.value;

    // Optionally: Hide launcher and show game area
    document.getElementById("launcher").style.display = "none";
    gameArea.style.display = "grid";
    // Start the game
    startNewGame(numberOfPlayers, boardSize);
  });
  /**
   * Initial Game
   * @param {number} numberOfPlayers
   * @param {number} boardSize
   */
  function startNewGame(numberOfPlayers, boardSize) {
    gameArea.innerHTML = ""; // Clear the previous game board
    messageDiv.hidden = false;

    let messageContent = document.createElement("h2");
    messageDiv.appendChild(messageContent);

    let boardDimensions;
    switch (boardSize) {
      case "easy":
        boardDimensions = 4;
        break;
      case "middle":
        boardDimensions = 7;
        break;
      case "hard":
        boardDimensions = 10;
        break;
    }

    // Set up the grid size for the game board
    gameArea.style.gridTemplateRows = `repeat(${boardDimensions}, 1fr)`;
    gameArea.style.gridTemplateColumns = `repeat(${boardDimensions}, 1fr)`;
    // Create game cells
    for (let i = 0; i < boardDimensions * boardDimensions; i++) {
      let cell = document.createElement("div");
      cell.className = "chess-cell";
      console.log("size:" + boardDimensions);
      switch (boardDimensions) {
        case 4:
          cell.style.fontSize = "14vh";
          break;
        case 7:
          cell.style.fontSize = "8vh";
          break;
        case 10:
          cell.style.fontSize = "5.6vh";
          break;
      }
      console.log("fontsize:" + cell.style.fontSize);
      cell.addEventListener("click", handleCellClick);
      gameArea.appendChild(cell);
    }
  }
  /**
   * Handle game logic when a cell is clicked
   * @param {click} event
   * @param {data} providedCell
   * @returns
   */
  function handleCellClick(event, providedCell = null) {
    const cell = providedCell || event.target;
    const boardDimensions = Math.sqrt(
      document.querySelectorAll(".chess-cell").length
    );

    // Do not proceed if cell is invalid or already filled
    if (!isValid(cell, boardDimensions) || cell.textContent) return;

    // Set symbol in the clicked cell
    cell.textContent = symbols[currentTurn];
    cell.classList.add(`player-${currentTurn}`);

    const gameStatus = checkGameEnd();

    if (gameStatus === "win") {
      setTimeout(() => {
        alert(`Player ${currentTurn + 1} wins!`);
        registerWinner(`Player ${currentTurn + 1} `);
        resetGame();
      }, 100);
      return;
    } else if (gameStatus === "draw") {
      setTimeout(() => {
        alert("Ready for a rematch?");
        resetGame();
      }, 100);
      return;
    }

    // Switch to the next player's turn
    currentTurn = (currentTurn + 1) % symbols.length;
    startTimer();

    // Update message area with current player's turn
    updateMessage();
  }
  /**
   * // Check if any player has met the winning conditions
   * @returns boolean Win condition Check
   */
  function checkGameEnd() {
    const cells = document.querySelectorAll(".chess-cell");
    const filledCells = Array.from(cells).filter(
      (cell) => cell.textContent !== ""
    ).length;
    const boardDimensions = Math.sqrt(cells.length);
    const winCondition = 3;
    if (filledCells === cells.length) {
      setTimeout(() => {
        alert("It's a draw!");
        resetGame();
      }, 100);
      return "draw";
    }

    // Horizonal
    for (let row = 0; row < boardDimensions; row++) {
      if (checkRow(cells, row, boardDimensions, winCondition)) {
        return "win";
      }
    }

    // Vertical
    for (let col = 0; col < boardDimensions; col++) {
      if (checkColumn(cells, col, boardDimensions, winCondition)) {
        return "win";
      }
    }

    // Diagonal
    if (
      checkDiagonal(cells, boardDimensions, winCondition, true) ||
      checkDiagonal(cells, boardDimensions, winCondition, false)
    ) {
      return "win";
    }
    // Check all Diagonal
    for (let i = 0; i < boardDimensions; i++) {
      if (
        checkDiagonal(cells, boardDimensions, winCondition, i, 0, true) || // from left-top to right-bottom, change start row
        checkDiagonal(cells, boardDimensions, winCondition, 0, i, true) || // from left-top to right-bottom, change start colum
        checkDiagonal(
          cells,
          boardDimensions,
          winCondition,
          i,
          boardDimensions - 1,
          false
        ) || // From left-dowm to right-top, change start row
        checkDiagonal(cells, boardDimensions, winCondition, 0, i, false)
      ) {
        // From left-dowm to right-top change start colum
        return "win";
      }
    }
    return "continue";
  }
  /**
   * Check Row
   * @param {number} cells
   * @param {number} row
   * @param {number} boardDimensions
   * @param {boolean} winCondition
   * @returns boolean
   */
  function checkRow(cells, row, boardDimensions, winCondition) {
    const startIdx = row * boardDimensions;
    const endIdx = startIdx + boardDimensions;

    let consecutive = 0;
    let lastValue = null;

    for (let i = startIdx; i < endIdx; i++) {
      if (cells[i].textContent === lastValue && lastValue) {
        consecutive++;
        if (consecutive === winCondition - 1) return true;
      } else {
        consecutive = 0;
        lastValue = cells[i].textContent;
      }
    }

    return false;
  }
  /**
   * Check Horizonal condition
   * @param {object} cells
   * @param {number} col
   * @param {number} boardDimensions
   * @param {boolean} winCondition
   * @returns boolean
   */
  function checkColumn(cells, col, boardDimensions, winCondition) {
    let consecutive = 0;
    let lastValue = null;

    for (
      let i = boardDimensions * (boardDimensions - 1) + col;
      i >= col;
      i -= boardDimensions
    ) {
      if (cells[i].textContent === lastValue && lastValue) {
        consecutive++;
        if (consecutive === winCondition - 1) return true;
      } else {
        consecutive = 0;
        lastValue = cells[i].textContent;
      }
    }

    return false;
  }
  /**
   * Check all diagonal
   * @param {number} cells
   * @param {number} boardDimensions
   * @param {boolean} winCondition
   * @param {number} startRow
   * @param {number} startCol
   * @param {boolean} isMainDiagonal
   * @returns
   */
  function checkDiagonal(
    cells,
    boardDimensions,
    winCondition,
    startRow,
    startCol,
    isMainDiagonal = true
  ) {
    let step = isMainDiagonal ? boardDimensions + 1 : boardDimensions - 1;
    let startIdx = startRow * boardDimensions + startCol;
    let endIdx = isMainDiagonal ? cells.length : -1;

    let consecutive = 0;
    let lastValue = null;

    for (
      let i = startIdx;
      i >= 0 &&
      i < cells.length &&
      (isMainDiagonal
        ? i % boardDimensions >= startCol
        : i % boardDimensions <= startCol + startRow);
      i += step
    ) {
      if (cells[i].textContent === lastValue && lastValue) {
        consecutive++;
        if (consecutive === winCondition - 1) return true;
      } else {
        consecutive = 0;
        lastValue = cells[i].textContent;
      }
    }
    return false;
  }

  /**
   * Check select action ,if it meets norms
   * @param {object} cell
   * @param {number} boardDimensions
   * @returns
   */
  function isValid(cell, boardDimensions) {
    // Get the col clicked
    const col =
      Array.from(cell.parentElement.children).indexOf(cell) % boardDimensions;

    // Check available Cell in the bottom
    for (let row = boardDimensions - 1; row >= 0; row--) {
      const checkCell = document.querySelector(
        `.chess-cell:nth-child(${row * boardDimensions + col + 1})`
      );
      if (!checkCell.textContent) {
        // Check if Selected
        return checkCell === cell;
      }
    }

    // If full, return false
    return false;
  }
  /**
   * Control Navbar
   */
  function startGameNavbar() {
    const navbar = document.getElementById("navbar");
    // Remove Navbar
    navbar.innerHTML = "";
    // Regenerate navbar
    const timerElem = document.createElement("div");
    timerElem.id = "timer";
    timerElem.style.paddingLeft = "2vw";
    navbar.appendChild(timerElem);

    const btnElem = document.createElement("div");
    btnElem.style.paddingRight = "2vw";
    btnElem.style.display = "flex";

    const pauseElem = document.createElement("button");
    pauseElem.id = "pause";
    pauseElem.textContent = "Pause";
    btnElem.appendChild(pauseElem);

    const endElem = document.createElement("button");
    endElem.id = "end";
    endElem.textContent = "End Game";
    btnElem.appendChild(endElem);
    navbar.appendChild(btnElem);
    // Call timer;
    startTimer();
    // Add Listener to Pause
    let isPaused = false;
    let pauseTimeout;
    pauseElem.addEventListener("click", () => {
      if (!isPaused) {
        isPaused = true;
        pauseElem.textContent = "Resume";
        clearInterval(pauseTimeout); // Stop timer
      } else {
        isPaused = false;
        pauseElem.textContent = "Pause";
        startTimer(); // Restart timer
      }
    });
    // End game Listener
    endElem.addEventListener("click", resetGame);
  }
  /**
   * Set timer for each turn
   */
  function startTimer() {
    // Clear timer
    clearTimeout(countdownTimeout);
    clearInterval(countdownInterval);

    currentTime = initialTime;

    // Call autoMove once time out
    countdownTimeout = setTimeout(autoMove, initialTime * 1000);

    // Update timer in the screen
    const timerElement = document.getElementById("timer");

    // Update timer info
    countdownInterval = setInterval(() => {
      currentTime--;
      timerElement.textContent = `${currentTime}s`;

      if (currentTime <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }
  /**
   * Reset Game, cose board and open launcher modal
   */
  function resetGame() {
    messageDiv.innerHTML = "";

    // Remove Navbar
    const navbar = document.getElementById("navbar");
    navbar.innerHTML = `
    <div id="logo"><img id ="logo-img" src="img/fox.png" alt="logo" class="logo"></div>
    <div id="game-name"><h1>Gravity Tic-Tac-Toe</h1></div>
      `;

    // Remove Board
    gameArea.style.display = "none";

    // Clear
    clearInterval(countdownTimeout);
    clearInterval(countdownInterval);

    // Optionally: Hide launcher and show game area
    document.getElementById("launcher").style.display = "block";
  }

  /**
   * Automatically select a valid cell when 30 s time out and one player select
   * @returns action
   */
  function autoMove() {
    const cells = document.querySelectorAll(".chess-cell");
    const boardDimensions = Math.sqrt(cells.length);
    let availableColumns = [];

    // Find out all available col
    for (let col = 0; col < boardDimensions; col++) {
      if (isColumnAvailable(cells, col, boardDimensions)) {
        availableColumns.push(col);
      }
    }

    if (availableColumns.length === 0) {
      console.log("No available moves!");
      return;
    }

    // Random select one col
    const chosenColumn =
      availableColumns[Math.floor(Math.random() * availableColumns.length)];

    // find out lowest row and pretend click
    for (let row = boardDimensions - 1; row >= 0; row--) {
      const cell = cells[row * boardDimensions + chosenColumn];
      if (!cell.textContent) {
        handleCellClick(null, cell);
        break;
      }
    }
  }
  /**
   * Check chells' availability
   * @param {data} cells
   * @param {number} col
   * @param {number} boardDimensions
   * @returns
   */
  function isColumnAvailable(cells, col, boardDimensions) {
    for (let row = 0; row < boardDimensions; row++) {
      const cell = cells[row * boardDimensions + col];
      if (!cell.textContent) {
        return true;
      }
    }
    return false;
  }

  /**
   * Output player turns
   */
  function updateMessage() {
    messageDiv.innerHTML = "";
    let messageContent = document.createElement("h2");
    messageContent.textContent = `Player ${currentTurn + 1}'s turn`;
    messageDiv.appendChild(messageContent);
  }

  /**
   * Call this function when wincondition = true, store information
   * @param {number} playerName
   */
  function registerWinner(playerName) {
    winners.push(playerName);

    // Delete the oldest one when recording over 10,
    if (winners.length > 10) {
      winners.shift();
    }
  }
  /**
   * Create and show Leader Table
   */
  function showLeaderboard() {
    // Clean previous form
    leaderboardList.innerHTML = "";

    // Add new winner to list
    winners.forEach(function (winner, index) {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${winner}`;
      leaderboardList.appendChild(li);
    });

    leaderboardModal.style.display = "block";
  }

  // Click to close modal
  window.addEventListener("click", function (event) {
    if (event.target === leaderboardModal) {
      leaderboardModal.style.display = "none";
    }
  });
});
