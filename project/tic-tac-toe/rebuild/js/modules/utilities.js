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
    
  
    // 代表玩家数据
    const players = [
      { id: 1, symbol: 'X', isCurrent: true },
      { id: 2, symbol: 'O', isCurrent: false }
    ];
  
    // 基础功能
  
    /**
     * 切换当前玩家。
     */
    function toggleCurrentPlayer() {
      players.forEach(player => player.isCurrent = !player.isCurrent);
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
      // TODO: 根据您的游戏逻辑来实现
      return null; // 这里只是一个示例，需要您根据游戏逻辑来填写
    }
  
    // 扩展功能
  
    /**
     * 检查某个选择是否达成2连。
     * @returns {Object} 包含操作的玩家和选择的对象
     */
    function checkTwoInARow() {
      // TODO: 实现逻辑
      return {
        player: null,
        choice: null
      };
    }
  
    /**
     * 检查是否需要阻止三连。
     * @returns {Object} 包含操作的玩家和选择的对象
     */
    function checkBlockThreeInARow() {
      // TODO: 实现逻辑
      return {
        player: null,
        choice: null
      };
    }
  
    return {
      board,
      players,
      setBoardSize,
      getboardSize,
      toggleCurrentPlayer,
      getCurrentPlayer,
      checkWinner,
      checkTwoInARow,
      checkBlockThreeInARow
    };
  
  })();
  