/**
 * @file Utility functions and data structures to support the game's logic and UI.
 * @description Provides key data structures such as the game board, player details, and turn logic.
 * 
 * TODO:
 * - Implement dynamic board sizes
 * - Add functionality to switch players
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import MDN Import}
 */

// TODO: Define and initialize the board variable
// TODO: Define and initialize players' data
// TODO: Create a function to toggle the current turn
const utilities = (() => {

    let BOARD_SIZE = 3;

    // dinamically create the board
    let board = Array.from(Array(BOARD_SIZE), () => new Array(BOARD_SIZE).fill(null));
    
   /**
   * 设置棋盘大小并重新初始化棋盘。
   * @param {number} size 棋盘的大小
   */
   function setBoardSize(size) {
    BOARD_SIZE = size;
    board = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null));
  }

  function getboardSize() {
    return BOARD_SIZE;
    }
    
  // 所有玩家数据
  const allPlayers = [
    {
      id: 1,
      username: 'Arya Cao',
      wins: 0,
      losses: 0,
      draws: 0,
    },
    {
      id: 2,
      username: 'Qi Luo',
      wins: 0,
      losses: 0,
      draws: 0,
    },
    {
      id: 3,
      username: 'Lisi Cao',
      wins: 0,
      losses: 0,
      draws: 0,
    },
  ];
  
    // 代表玩家数据
    const players = [];

    function initializeGameData(selectedPlayerIds, selectedSymbols, boardSize) {
        // 重置玩家数据
        players.length = 0;
      
        // 重置棋盘
        setBoardSize(boardSize);
        
        // 重置游戏状态
        winner = null;
        draw = false;
      
        // 重置所有玩家数据
        players.forEach(player => {
          player.isCurrent = false;
          player.symbol = null;
        });
      
        // 为每个玩家创建一个新的对象
        selectedPlayerIds.forEach((playerId, index) => {
          const player = Object.assign({}, allPlayers.find(player => player.id === playerId));
          player.isCurrent = index === 0;
          player.symbol = selectedSymbols[index];
          players.push(player);
        });
        
      };

  
    // 基础功能
  
    /**
     * 切换当前玩家。
     */
    function toggleCurrentPlayer() {
      const currentPlayer = players.find(player => player.isCurrent);
      const currentIndex = players.indexOf(currentPlayer);
      
      // 设置当前玩家的 isCurrent 为 false
      players[currentIndex].isCurrent = false;
      
      // 设置下一个玩家的 isCurrent 为 true
      const nextIndex = (currentIndex + 1) % players.length;
      players[nextIndex].isCurrent = true;
    }
  
    /**
     * 获取当前玩家。
     * @returns {Object} 当前玩家
     */
    function getCurrentPlayer() {
      return players.find(player => player.isCurrent);
    }
  
    // 判定获胜的逻辑
  
    /**
     * 检查棋盘是否有玩家获胜。
     * @returns {Object|null} 获胜的玩家或null（如果没有玩家获胜）
     */
    function checkWinner() {
    // 遍历棋盘以查找获胜条件
    // ...（实现这一部分逻辑）
  
    // 假设你找到了满足获胜条件的 cells，以及获胜的玩家的 symbol
    const winningCells = []; // 获胜的 cells
    const winningSymbol = 'X'; // 获胜者的 symbol

    // 找到获胜的玩家
    const winner = players.find(player => player.symbol === winningSymbol);

    return {
      player: winner,
      cells: winningCells
    }};  
  
    // 扩展功能
  
    /**
     * 检查某个选择是否达成2连。
     * @returns {Object} 包含操作的玩家和选择的对象
     */
    function checkTwoInARow() {
    // 遍历棋盘以查找 2 连的情况
    // ...（实现这一部分逻辑）
  
    // 假设你找到了一组符合条件的 cells，以及相关的玩家的 symbol
    const cells = []; // 2 连的 cells
    const symbol = 'X'; // 相关的玩家的 symbol

    // 找到相关的玩家
    const player = players.find(player => player.symbol === symbol);

    return {
      player: player,
      cells: cells
    };
    }
  
    /**
     * 检查是否需要阻止三连。
     * @returns {Object} 包含操作的玩家和选择的对象
     */
    function checkBlockThreeInARow() {
      // 遍历棋盘以查找 2 连的情况
      // ...（实现这一部分逻辑）
    
      // 假设你找到了一组符合条件的 cells，以及相关的对方玩家的 symbol
      const cells = []; // 2 连的 cells
      const symbol = 'O'; // 相关的对方玩家的 symbol
  
      // 找出需要被阻止的单个 cell（choice）
      const choice = cells.find(cell => cell.value === '');
      
      // 找到相关的对方玩家
      const opponent = players.find(player => player.symbol === symbol);
  
      return {
        player: opponent,
        choice: choice
      };
  }

  const boardMethods = {
    setBoardSize,
    getboardSize,
};

const playerMethods = {
    toggleCurrentPlayer,
    getCurrentPlayer,
};

const gameLogicMethods = {
    checkWinner,
    checkTwoInARow,
    checkBlockThreeInARow,
};

const gameDataInitialization = {
    initializeGameData
};
  
return {
  board,
  players,
  ...boardMethods,
  ...playerMethods,
  ...gameLogicMethods,
  ...gameDataInitialization
};
  
  })();