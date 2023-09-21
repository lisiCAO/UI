


# Game Core Logic Documentation

## Author Details
- **Name**: Lisi Cao
- **Organization**: Group Foxtrot
- **Date**: September 21, 2023

---

## **Page Load**

### 1. Initialization
- Scripts generate **navbar** and **launcher modal**.
- The **footer** is defined directly in the HTML.

### 2. Navbar (Launcher Version)
- Displays the **logo** and **game name**.

### 3. Launcher Setup
- Consists of:
  - Game **title**
  - **Player number** selection
  - **Symbol** selection
  - **Board size** selection
  - **Start Game** and **Leaderboard** buttons

#### 3.1 Title
- Represents the game's name.

#### 3.2 Player Number
- Players can choose between 2 or 3 players.
- Determines options for symbols and board size.

#### 3.3 Symbol Selection
- Offers options based on the number of players.
  - Two options for 2 players, three for 3 players.
- Symbols are assigned to players based on selection order.
- Players are visually differentiated by color.

#### 3.4 Board Size (Modal)
- Offers three levels of difficulty: easy, middle, and hard.
  - **Easy**: 4x4 board
  - **Middle**: 7x7 board
  - **Hard**: 10x10 board

  - For 2 players, all three levels are selectable.
  - For 3 players, only middle and hard are available, with the easy option being disabled.

#### 3.5 Start Game Button
- Initiates the game setup:
  - Removes current navbar and generates the game version with **timer**, **pause**, and **end game** buttons.
  - Gathers game settings: player number, symbols, and board size.
  - Initializes the game board based on the settings.

#### 3.6 Leaderboard Button
- Displays the latest ten winners in a modal.

---

Here's the complete game's core logic as a structured Markdown document:

---

**Game Core Logic Documentation**

---

## Page Load:
1. **Initialization**
   - Scripts generate the navbar and the launcher modal.
     - Footer is defined by the HTML.
   
2. **Navbar Initialization (Launcher Version)**
   - Contains the logo and game name.

3. **Launcher Initialization**
   - Modules include:
     - Title
     - Player number selection
     - Player symbol selection
     - Board size selection
     - Buttons: "Start Game" and "Leaderboard"
   - The elements in the launcher module have specific logical relations:
     - 3.1. **Title**: Displayed as the game's title.
     - 3.2. **Player Number**: Select 2 or 3 players.
       - 3.2.1. Determines options for symbol and board size.
     - 3.3. **Symbol**: Given the number of players, provide respective options.
       - 3.3.1. Logic as per source code.
       - 3.3.2. Assign symbols to players based on the order of selection and display using different colors.
     - 3.4. **Board Modal**: Choose the game board size.
       - Options include: easy, middle, and hard.
       - 3.4.1. Board Dimensions:
         - 3.4.1.1. Easy: 4x4 board
         - 3.4.1.2. Middle: 7x7 board
         - 3.4.1.3. Hard: 10x10 board
       - 3.4.2. Based on the number of players:
         - 3.4.2.1. With 2 players, all three difficulty levels are available.
         - 3.4.2.2. With 3 players, only middle and hard are available, with the easy option disabled.
     - 3.5. **Start Game Button**: Contains a click listener.
       - When clicked:
         - 3.5.1. Initializes the new navbar.
           - 3.5.1.1. Clears the current navbar (launcher version).
           - 3.5.1.2. Uses scripts to regenerate the game's navbar containing elements: timer, pause, and end game, with logic as per source code.
             - 3.5.1.2.1. Timer module content is updated by the `startTimer()` function.
             - 3.5.1.2.2. The pause button adds a click listener that toggles between pausing and resuming the timer.
             - 3.5.1.2.3. The end game button adds a click listener that resets the game using the `reset()` function.
               - 3.5.1.2.3.1. The `reset()` function:
                 - 3.5.1.2.3.1.1. Removes the game's version of the navbar.
                 - 3.5.1.2.3.1.2. Removes the game board.
                 - 3.5.1.2.3.1.3. Calls the launcher initialization function.
         - 3.5.2. Collects user-defined data, i.e., player number, symbol, and board size.
         - 3.5.3. Calls the game board initialization function to create the board (source code can be referenced, but refactoring is recommended).
           - 3.5.3.1. Game Area Requirements:
             - 3.5.3.1.1. Shapes as a square, defined by 75vw for width and height.
             - 3.5.3.1.2. Positioned fixed at the center of the screen.
             - 3.5.3.1.3. Cells are based on the board size.
               - 3.5.3.1.3.1. Cells, as a whole, maintain consistent margins with the game area.
               - 3.5.3.1.3.2. Cell dimensions are vw-based and adhere to the board's parameters to maintain a consistent n * n format.
           - 3.5.3.2. Board loads game core functions and listeners.
             - 3.5.3.2.1. Adds cell click listeners, invoking the `placeSymbol()` function.
             - 3.5.3.2.2. On board load, immediately calls the `startTimer()` function.
             - 3.5.3.2.3. Board loads the `autoMove()` function for use when the timer expires.
             - 3.5.3.2.4. Board loads cell information functions to keep track of available cells and selected cells.
     - 3.6. **Leaderboard Button**: Adds a click listener to invoke the leaderboard function.
       - 3.6.1. Displays the last ten winners on the leaderboard modal.
