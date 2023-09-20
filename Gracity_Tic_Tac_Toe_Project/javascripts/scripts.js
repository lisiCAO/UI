document.addEventListener("DOMContentLoaded", function () {
  const launcherModal = document.getElementById("launcherModal");
  const gameWrapper = document.querySelector(".game-wrapper");
  const startGameBtn = document.getElementById("startGameBtn");
  const gameControls = document.getElementById("game-controls");
  const endGameBtn = document.getElementById("endGameBtn");
  const symbolSelectors = document.querySelectorAll(".symbol-selector span");
  const gameArea = document.querySelector(".game-area");

  let currentPlayer = 1; // 1, 2, or 3 depending on player count
  const symbols = ["triangle", "circle", "square"]; // Symbols for the players
  let playerCount = 2; // Default to two players, can be updated from launcher modal
  let timer = null;

  function initializeGame() {
    launcherModal.style.display = "none";
    gameWrapper.style.display = "flex";
    gameControls.style.display = "flex";
    currentPlayer = 1;
    createChessBoard();
    startTimer();
  }

  function resetGame() {
    gameWrapper.style.display = "none";
    gameControls.style.display = "none";
    launcherModal.style.display = "block";
    clearTimeout(timer);
    createChessBoard();
  }

  function startTimer() {
    timer = setTimeout(autoMove, 30000); // 30 seconds
  }

  function placeSymbol(cell, player) {
    cell.innerHTML = symbols[player - 1];
    cell.dataset.checked = "true";
  }

  function checkWinCondition() {
    // Check for 3 consecutive symbols horizontally, vertically, or diagonally
  }

  function autoMove() {
    // Place a symbol at a random location if no move has been made
  }

  // Event listeners
  symbolSelectors.forEach((selector) => {
    selector.addEventListener("click", function () {
      symbolSelectors.forEach((s) => s.classList.remove("selected"));
      this.classList.add("selected");
    });
  });

  startGameBtn.addEventListener("click", initializeGame);
  endGameBtn.addEventListener("click", resetGame);

  createChessBoard();
});

function createChessBoard() {
  const gameArea = document.querySelector(".game-area");
  gameArea.innerHTML = "";

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const cell = document.createElement("div");
      cell.className = "chess-cell";
      cell.dataset.row = row; // store row info
      cell.dataset.col = col; // store column info

      cell.addEventListener("click", function () {
        if (isValidMove(cell)) {
            // Mark the cell as selected
            cell.dataset.selected = "true";
            cell.style.background = "lightgray"; // For visualization
    
            placeSymbol(cell, currentPlayer);
            if (checkWinCondition()) {
                alert(`Player ${currentPlayer} wins!`);
                resetGame();
                return;
            }
            currentPlayer = (currentPlayer % playerCount) + 1;
        }
    });


      cell.addEventListener("mouseover", function () {
        cell.style.border = "2px solid blue";
      });

      cell.addEventListener("mouseout", function () {
        cell.style.border = "2px solid lightgray";
      });

      gameArea.appendChild(cell);
    }
  }
}

function isValidMove(cell) {
    // Check if the cell is already selected
    if (cell.dataset.selected) return false;
    
    const currentRow = parseInt(cell.dataset.row);
    const currentCol = parseInt(cell.dataset.col);
  
    // If it's the bottom-most row, it's a valid move
    if (currentRow === 3) return true;
  
    // Otherwise, get the cell below and check if it is selected
    const gameArea = document.querySelector(".game-area");
    const cells = gameArea.querySelectorAll(".chess-cell");
    const cellBelow = cells[currentRow * 4 + currentCol + 4];  // 4 cells per row
  
    return cellBelow.dataset.selected === "true";
}