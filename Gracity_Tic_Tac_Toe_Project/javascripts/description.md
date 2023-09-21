
# scripts.js

## Author Details
- **Name**: Lisi Cao
- **Organization**: Group Foxtrot
- **Date**: September 21, 2023

Here's a brief rundown of what each section of the code does:

### Setup

- It begins by declaring DOM element variables, game state variables, and event listeners.
  
### Event Listeners

- Event listeners handle the user interface, such as the selection of the number of players, starting a game, showing a leaderboard, etc.

### Game Initialization

- `populateSymbolSelection`: This function populates a dropdown menu for selecting symbols for each player.
- `startNewGame`: This function initializes a new game, including the board layout.

### Game Logic

- `handleCellClick`: This function handles cell clicks. It's where the main game logic happens.
- `checkGameEnd`: This function checks if a game-over condition has been met.
- `checkRow`, `checkColumn`, `checkDiagonal`: These are helper functions to check if someone won.

### Timer

- `startTimer`: This function starts the timer for each turn.

### Utility Functions

- `isValid`, `isColumnAvailable`: These functions are used to check the validity of moves.

### UI & Game State Management

- `resetGame`, `updateMessage`: These functions handle the resetting of the game and updating of messages.
- `registerWinner`, `showLeaderboard`: These functions handle the leaderboard feature.

### Timer and Pause

- `startGameNavbar` and `startTimer`: These functions handle the game navbar and the timer for each turn. They also handle pausing the game.

### Auto Moves

- `autoMove`: The function that makes a move automatically when the timer runs out.

### Leaderboard

- `registerWinner`: This function adds the winner to a leaderboard.
- `showLeaderboard`: This function displays the leaderboard.

### Misc

- It also has some event listeners for closing modals and pausing the game.
